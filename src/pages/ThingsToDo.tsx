import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, MapPin, Waves, TreePine, Utensils, Wine, ShoppingBag, Sparkles, Music, Fish, Car, Moon, GraduationCap, Anchor, Bike, Mountain } from 'lucide-react';

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  description?: string;
  items: { name: string; url: string; description?: string }[];
};

const categories: Category[] = [
  {
    id: 'adventure',
    label: 'Adventure & Fun',
    icon: Mountain,
    items: [
      { name: "Beaver's Bend Mining Company", url: 'https://beaversbendminingcompany.com' },
      { name: 'Beavers Bend Safari Park', url: 'https://beaversbendsafaripark.com/' },
      { name: 'Beavers Bend Wildlife Museum', url: 'http://www.pine-net.com/nature/' },
      { name: 'Bigfoot Axe Throwing', url: 'https://www.hochatownescapegames.com/hochatown-bigfoot-axe-throwing/' },
      { name: 'Broken Bow Balloon Rides', url: 'https://www.facebook.com/Broken-Bow-Balloon-Rides-106425755454152/' },
      { name: 'Broken Bow Lake Tiki Boat Tours', url: 'https://thebrokentiki.com' },
      { name: 'Crag Climb Indoor Boulder Gym', url: 'https://www.cragclimbbeaversbend.com' },
      { name: 'Forest Heritage Center Museum', url: 'https://forestry.ok.gov/fhc' },
      { name: 'Gutter Chaos Bowling', url: 'https://www.facebook.com/Gutter-Chaos-113320113867837/' },
      { name: "Hester's Theater of Magic", url: 'https://www.hestermagic.com/' },
      { name: 'Hochatown Escape Games', url: 'https://www.hochatownescapegames.com' },
      { name: 'Hochatown Petting Zoo', url: 'https://www.facebook.com/HochatownPettingZoo/' },
      { name: 'Hydrafly Watersports', url: 'https://www.facebook.com/HydraFly-Watersports-Broken-Bow-Lake-Hochatown-OK-436503757182193/' },
      { name: 'McCurtain Cinema', url: 'https://www.mccurtaincinema.com' },
      { name: 'Rugaru Adventures–Zip Line Tours', url: 'https://rugaruadventures.com' },
      { name: 'Semper Fly Helicopter Tours', url: 'https://www.facebook.com/semperflyhelicopters/' },
      { name: 'The Gallery Paint & Chardonnay', url: 'https://www.paintandchardonnay.com' },
      { name: 'The Cave Virtual Reality', url: 'https://www.thecavevr.com/' },
      { name: 'The Maze of Hochatown', url: 'https://www.facebook.com/TheMazeofHochatown/' },
      { name: "Thomahawk's Axe Throwing", url: 'https://throwthataxe.com' },
    ],
  },
  {
    id: 'atv',
    label: 'ATV Trails',
    icon: Car,
    description: `The Ouachita National Forest contains hundreds of miles of designated off-highway vehicle routes so you can cover more ground. Discover the wildlife and wonders of the deep forest. Be sure to contact the U.S. Forest Service for rules and regulations regarding allowed vehicles.\n\nDirections: From Hochatown, go north on HWY 259 about 6–7 miles. You'll come to a road on the left with a small sign that says "53,000." Take a left on Road 53000. There will be a big circle area to park and then ride.`,
    items: [
      { name: 'ATV Maps & Information (USDA Forest Service)', url: 'https://www.fs.usda.gov/detailfull/ouachita/home/?cid=STELPRDB5156448&width=full#OHV' },
      { name: 'Printable ATV Map', url: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-09-at-12.29.08-PM.png' },
      { name: 'Download Avenza Offline Maps App', url: 'https://www.avenzamaps.com/mobile-maps' },
    ],
  },
  {
    id: 'beavers-bend',
    label: 'Beavers Bend State Park',
    icon: TreePine,
    description: `Beavers Bend State Park is one of Oklahoma's most popular parks — and rightly so! The park spans a vast 1,300 acres and hosts a wide variety of activities: hiking, biking, fishing, tennis, volleyball, golf, mini-golf, swimming, paddle boarding, canoeing, kayaking, horseback riding, and picnicking. Nestled in the Kiamichi Mountains along the shores of Broken Bow Lake, with the Mountain Fork River flowing through it.`,
    items: [
      { name: 'Beavers Bend State Park', url: 'https://www.travelok.com/state-parks/beavers-bend-resort-park' },
    ],
  },
  {
    id: 'broken-bow-lake',
    label: 'Broken Bow Lake',
    icon: Waves,
    description: `Broken Bow Lake covers 14,000 acres and has 180 miles of scenic shoreline. Enjoy stunning views from rock cliffs, pack a picnic, watch the birds, or go for a swim in the clear, deep water. Bring your own boat or rent one from Beavers Bend Marina — speed boats, pontoons, houseboats, and jet skis available. Great fishing too: bass, catfish, crappie, sunfish, and walleye.`,
    items: [
      { name: 'Beavers Bend Marina', url: 'https://beaversbendmarina.com' },
      { name: 'Broken Bow Watersports', url: 'https://brokenbowwatersports.com' },
    ],
  },
  {
    id: 'boat-canoe',
    label: 'Boat & Canoe Rentals',
    icon: Anchor,
    items: [
      { name: 'Ambush Adventures Kayak Rentals', url: 'http://ambushcanoerental.com' },
      { name: 'Bandits ATV and Boat Rentals', url: 'https://banditsatvboatrentals.com' },
      { name: 'Beavers Bend Land & Water Park', url: 'https://visitmccurtaincounty.com/directory/beavers-bend-land-water-park/' },
      { name: 'Beavers Bend Marina', url: 'https://beaversbendmarina.com' },
      { name: 'Beavers Bend River Floats', url: 'https://www.travelok.com/listings/view.profile/id.432' },
      { name: 'Lucky Dog River Floats', url: 'https://www.facebook.com/LuckyDogRiverFloats/' },
      { name: 'PaddleSUP Paddle Board & Kayak', url: 'https://paddlesupoklahoma.wixsite.com/paddlesupok' },
      { name: 'Wild Goose Canoe & Kayak', url: 'http://www.wildgoosecanoe.com' },
      { name: 'Remote Floats', url: 'https://www.facebook.com/Remote-Floats-105970068702450/' },
    ],
  },
  {
    id: 'casinos',
    label: 'Casinos',
    icon: Sparkles,
    items: [
      { name: 'Choctaw Casino Broken Bow', url: 'https://www.choctawcasinos.com/broken-bow/' },
      { name: 'Choctaw Landing Hochatown', url: 'https://choctawlanding.com/' },
    ],
  },
  {
    id: 'fishing-guides',
    label: 'Fishing Guides',
    icon: Fish,
    items: [
      { name: '4 Seasons Fishing Guide Service', url: 'https://www.4seasonsguideservice.com' },
      { name: "Beavers Bend Fly Shop & Professional Guide Service", url: 'https://www.beaversbendflyshop.com' },
      { name: "Bob's Guide Service", url: 'https://www.bobsguideservices.com' },
      { name: 'Broken Bow Lake Family Crappie Guide Service', url: 'https://brokenbowlakefamilycrappieguideservice.com' },
      { name: 'Broken Bow Lake Guide Service', url: 'http://www.brokenbowlakeguide.com' },
      { name: 'Broken Bow Lake Crappie Guide', url: 'https://brokenbowlakecrappie.com' },
      { name: 'Steve Branson – Trout Guide', url: 'http://www.brokenbowlakeguide.com/TroutGuide.html' },
      { name: 'Wright Guide Service', url: 'https://www.facebook.com/The-Wright-Guide-Service-845973598818998/' },
    ],
  },
  {
    id: 'food-drink',
    label: 'Food & Drink',
    icon: Utensils,
    items: [
      { name: "Abendigo's Grill & Patio", url: 'https://abendigos.com/' },
      { name: "Amy's Macarons and Bakery", url: 'https://brokenbowmacarons.com/' },
      { name: 'Beavers Bend Brewery', url: 'https://www.beaversbendbrewery.com/' },
      { name: 'Beavers Bend Restaurant', url: 'https://www.facebook.com/pages/category/American-Restaurant/Beavers-Bend-Restaurant-227189594369420/' },
      { name: 'Brick & Bread', url: 'http://brickandbread.com/' },
      { name: 'Buffalo Grill', url: 'https://www.facebook.com/buffalogrillht/' },
      { name: 'Grateful Head Pizza & Tap Room', url: 'https://gratefulheadpizza.com/' },
      { name: 'Hochatown Saloon', url: 'https://hochatownsaloon.com/' },
      { name: 'Jake\'s Brickhouse Grill', url: 'https://www.facebook.com/jakesbrickhousegrill' },
      { name: 'Mexico Lindo', url: 'https://www.mexicolindobrokenbow.com/' },
      { name: 'Mi Ranchito', url: 'https://www.miranchitotexmexok.com/' },
      { name: 'Monica Wimbley – Personal Chef', url: 'https://offthegridincabincatering.com/' },
      { name: 'Mountain Fork Brewery & Restaurant', url: 'https://www.mtforkbrewery.com/home' },
      { name: "Naaman's BBQ", url: 'https://www.naamansbbq.com/' },
      { name: 'Okie Girls Coffee and Ice Cream', url: 'https://www.travelok.com/listings/view.profile/id.25846' },
      { name: "Papa Poblano's Mexican Restaurant", url: 'http://papapoblanos.net/' },
      { name: "Phat Tabb's BBQ", url: 'https://phattabbsbbq.com/' },
      { name: 'Pressa', url: 'https://www.pressaitalia.com/' },
      { name: 'Rock Bottom Boyz BBQ', url: 'https://www.facebook.com/Rock-Bottom-Boyz-BBQ-660351367451143/' },
      { name: 'Rogue Local', url: 'https://roguelocalgrill.com/' },
      { name: "Roma's Italian Restaurant", url: 'https://www.romaitalianrestaurantok.com/' },
      { name: 'Shady Oaks Restaurant', url: 'http://www.beavers-bend.com/shadyoaks.htm' },
      { name: 'Shuck Me Seafood', url: 'https://www.shuckme.net/' },
      { name: "Smith's Good Eats", url: 'https://www.facebook.com/pages/category/American-Restaurant/Smiths-Good-Eats-284145881785093/' },
      { name: 'Stevens Gap Restaurant', url: 'https://www.facebook.com/pages/category/American-Restaurant/Stevens-Gap-Restaurant-346700422077605/' },
      { name: 'The Blue Rooster', url: 'https://www.facebook.com/blueroosterok/' },
      { name: 'The Lookout Kitchen', url: 'https://www.facebook.com/TheLookoutKitchen' },
      { name: 'The Oaks Steakhouse', url: 'https://theoakssteakhouse.com/' },
      { name: 'Tuklo Grill at Choctaw Landing', url: 'https://choctawlanding.com/eat-drink' },
      { name: 'Whip.Poor.Will Fudge & Candy', url: 'https://www.facebook.com/whippoorwillresort' },
    ],
  },
  {
    id: 'golf',
    label: 'Golf Courses',
    icon: GraduationCap,
    items: [
      { name: 'Cedar Creek Golf Course & Shop', url: 'https://www.travelok.com/listings/view.profile/id.1168' },
      { name: 'Idabel Country Club', url: 'https://idabelcountryclub.org' },
    ],
  },
  {
    id: 'hiking',
    label: 'Hiking',
    icon: Bike,
    items: [
      { name: '2 Lost Girls Trails', url: 'https://www.facebook.com/2lostgirls/' },
      { name: 'Hiking Trails on AllTrails', url: 'https://www.alltrails.com/us/oklahoma/broken-bow/views' },
    ],
  },
  {
    id: 'horseback',
    label: 'Horseback Riding',
    icon: MapPin,
    items: [
      { name: 'A to Z Guest Ranch – Smithville', url: 'https://www.atozguestranch.com' },
      { name: 'Glover River Trail Rides', url: 'http://gloverrivertrailrides.com' },
      { name: 'Riverman Trail Rides & Stables', url: 'https://rivermantrailrides.com' },
    ],
  },
  {
    id: 'jeep-atv',
    label: 'Jeep & ATV Rentals',
    icon: Car,
    items: [
      { name: 'Bandits ATV and Boat Rentals', url: 'https://banditsatvboatrentals.com' },
      { name: 'Broken Bow Slingshot Adventures', url: 'https://brokenbowslingshots.com' },
      { name: "Captain's Hideaway Powersports Rentals", url: 'https://captainshideawayrentals.com' },
      { name: 'Hochatown Outfitters', url: 'https://hochatownoutfitters.wixsite.com/home' },
    ],
  },
  {
    id: 'massages',
    label: 'Massages & Spa',
    icon: Sparkles,
    items: [
      {
        name: 'A Servants Hands Massage Therapy',
        url: 'https://aservantshandsmassages.com/',
        description: 'In-cabin massages, couples massage, prenatal, hot stone, therapeutic & Swedish. Call or text (580) 703-3209.',
      },
      {
        name: 'Flawless Wellness SPA',
        url: 'https://flawlesswellnessspa.com/',
        description: 'Facials, massages, waxing, medical spa services, tea & oxygen bar, outdoor patio with fire pits.',
      },
      { name: 'Body Harmony Day Spa', url: 'http://www.bodyharmonydayspa.com/' },
    ],
  },
  {
    id: 'nightlife',
    label: 'Nightlife',
    icon: Moon,
    items: [
      { name: 'Hochatown Saloon', url: 'https://hochatownsaloon.com/' },
      { name: "Scotty Dog's Hideout", url: 'https://www.facebook.com/scottydoggshideout/' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: ShoppingBag,
    items: [
      { name: 'Broknbo Vintage Market', url: 'https://www.facebook.com/broknbovintagemarket' },
      { name: "Bruton's Outdoors", url: 'https://www.facebook.com/brutonsonline/' },
      { name: 'Campe Diem', url: 'https://www.facebook.com/people/Campe-Diem/61567111647914/' },
      { name: 'Country Antiques & Gifts', url: 'https://www.facebook.com/Country-Antiques-Gifts-168141037193501/' },
      { name: 'Hochatime', url: 'https://hochatime.com' },
      { name: "Janet's Treasure Chest", url: 'https://www.facebook.com/janetstreasurechest/' },
      { name: 'Once Upon A Time Antiques', url: 'https://www.facebook.com/OUATantiques/' },
      { name: 'Perfectly Imperfect Flea Market', url: 'https://www.facebook.com/perfectlyimperfectmarket/' },
      { name: 'Savvy Chix', url: 'https://www.facebook.com/Savvy.Chix.Boutique/' },
      { name: 'Shabby Shack', url: 'https://www.facebook.com/shabbyshackbrokenbow' },
      { name: 'Youngbloods Gifts', url: 'https://www.facebook.com/YoungbloodsGifts/' },
    ],
  },
  {
    id: 'train',
    label: 'Train Rides',
    icon: MapPin,
    items: [
      { name: 'Beavers Bend Depot & Stables', url: 'https://www.facebook.com/trainandstables' },
    ],
  },
  {
    id: 'wineries',
    label: 'Wineries, Distilleries & Breweries',
    icon: Wine,
    items: [
      { name: 'Beavers Bend Brewery', url: 'https://www.beaversbendbrewery.com' },
      { name: 'Fish Tales Winery & Vineyards', url: 'https://www.fishtaleswine.com' },
      { name: 'Girls Gone Wine', url: 'https://www.thegirlsgonewine.com' },
      { name: 'Hochatown Distilling Company', url: 'https://www.hochatowndistilling.com' },
      { name: 'Knotted Rope Winery', url: 'https://www.facebook.com/knottedropewinery/' },
      { name: 'Mountain Fork Brewery', url: 'https://www.mtforkbrewery.com' },
      { name: 'The Tasting Room', url: 'https://www.facebook.com/thetastingroominhochatown' },
      { name: 'Vojas Winery', url: 'https://vojaiswinery.com' },
    ],
  },
];

// Hero images per category
const categoryImages: Record<string, string> = {
  adventure: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=1200',
  atv: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200',
  'beavers-bend': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200',
  'broken-bow-lake': 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200',
  'boat-canoe': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200',
  casinos: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1200',
  'fishing-guides': 'https://images.unsplash.com/photo-1545450818-d00b8d3a7e87?auto=format&fit=crop&q=80&w=1200',
  'food-drink': 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200',
  golf: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200',
  hiking: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200',
  horseback: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=1200',
  'jeep-atv': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=1200',
  massages: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
  nightlife: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200',
  shopping: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=1200',
  train: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200',
  wineries: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80&w=1200',
};

export default function ThingsToDo() {
  const [activeTab, setActiveTab] = useState('adventure');
  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-cream">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold uppercase tracking-[0.3em] text-xs font-bold"
        >
          Adventure Awaits
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold text-espresso"
        >
          Things to Do
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-espresso/60 max-w-2xl mx-auto text-lg italic"
        >
          Enjoy the many activities of the surrounding areas! Whether you're looking for a relaxing restaurant
          or a great outdoor adventure, Broken Bow, Oklahoma is the place to be.
        </motion.p>
      </div>

      {/* Tab Bar */}
      <div className="border-b border-gold/10 bg-white sticky top-[70px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-200 ${
                    activeTab === cat.id
                      ? 'bg-forest text-gold shadow-md'
                      : 'text-espresso/60 hover:text-espresso hover:bg-gold/10'
                  }`}
                >
                  <Icon size={12} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Category Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {/* Category Header with Image */}
          <div className="relative h-64 md:h-96 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={categoryImages[activeTab]}
              alt={active.label}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{active.label}</h2>
            </div>
          </div>

          {/* Description if available */}
          {active.description && (
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <p className="text-espresso/70 leading-relaxed whitespace-pre-line text-lg">{active.description}</p>
            </div>
          )}

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-gold/5 hover:border-gold/20 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif font-bold text-espresso group-hover:text-gold transition-colors text-lg leading-snug">
                    {item.name}
                  </h3>
                  <ExternalLink size={14} className="text-gold/50 group-hover:text-gold flex-shrink-0 mt-1 transition-colors" />
                </div>
                {item.description && (
                  <p className="text-espresso/60 text-sm leading-relaxed">{item.description}</p>
                )}
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold mt-auto pt-2">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-espresso rounded-[40px] p-12 md:p-16 text-center text-cream space-y-6">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Ready to Plan?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Make Broken Bow Your Basecamp</h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            All of these amazing activities are just minutes from our luxury cabins. Book your stay and make it a trip to remember.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:5802124746"
              className="bg-gold hover:bg-gold-hover text-forest font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300 w-full sm:w-auto"
            >
              Call (580) 212-4746
            </a>
            <a
              href="mailto:bearmountainlodging@gmail.com"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full border border-white/20 uppercase text-xs tracking-widest transition-all duration-300 w-full sm:w-auto"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
