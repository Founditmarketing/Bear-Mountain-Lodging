import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Waves, TreePine, Utensils, Wine, ShoppingBag, Sparkles, Fish, Car, Moon, Anchor, Bike, Mountain, MapPin, Train } from 'lucide-react';

const BASE = 'https://visitbrokenbowcabins.com/wp-content/uploads';

type Item = { name: string; url: string; image: string; description?: string };
type Category = { id: string; label: string; icon: React.ElementType; description?: string; heroImage: string; items: Item[] };

const categories: Category[] = [
  {
    id: 'adventure',
    label: 'Adventure & Fun',
    icon: Mountain,
    heroImage: `${BASE}/2022/05/Untitled-design-20.png`,
    items: [
      { name: "Beaver's Bend Mining Company",       url: 'https://beaversbendminingcompany.com',                                                              image: '/images/things-to-do/mining-company.png' },
      { name: 'Beavers Bend Safari Park',            url: 'https://beaversbendsafaripark.com/',                                                                 image: '/images/things-to-do/safari-park.png' },
      { name: 'Beavers Bend Wildlife Museum',        url: 'http://www.pine-net.com/nature/',                                                                    image: `${BASE}/2022/05/Untitled-design-7-1.png` },
      { name: 'Bigfoot Axe Throwing',                url: 'https://www.hochatownescapegames.com/hochatown-bigfoot-axe-throwing/',                               image: `${BASE}/2022/05/Untitled-design-7-1.png` },
      { name: 'Broken Bow Balloon Rides',            url: 'https://www.facebook.com/Broken-Bow-Balloon-Rides-106425755454152/',                                 image: '/images/things-to-do/balloon-rides.png' },
      { name: 'Broken Bow Lake Tiki Boat Tours',     url: 'https://thebrokentiki.com',                                                                          image: `${BASE}/2022/05/Untitled-design-8-1.png` },
      { name: 'Crag Climb Indoor Boulder Gym',       url: 'https://www.hochatownescapegames.com/crag-climb/',                                                   image: `${BASE}/2022/05/Untitled-design-20.png` },
      { name: 'Forest Heritage Center Museum',       url: 'https://beaversbend.com/forest-heritage-center/',                                                    image: `${BASE}/2022/05/Untitled-design-9-1.png` },
      { name: 'Gutter Chaos Bowling',                url: 'https://www.facebook.com/Gutter-Chaos-113320113867837/',                                             image: `${BASE}/2022/05/Untitled-design-12-1.png` },
      { name: "Hester's Theater of Magic",           url: 'https://www.hestermagic.com/',                                                                       image: '/images/things-to-do/hesters-theater.png' },
      { name: 'Hochatown Escape Games',              url: 'https://www.hochatownescapegames.com',                                                               image: `${BASE}/2022/05/Untitled-design-21.png` },
      { name: 'Hochatown Petting Zoo',               url: 'https://www.facebook.com/HochatownPettingZoo/',                                                      image: `${BASE}/2022/05/Untitled-design-11-1.png` },
      { name: 'Hydrafly Watersports',                url: 'https://www.facebook.com/HydraFly-Watersports-Broken-Bow-Lake-Hochatown-OK-436503757182193/',        image: `${BASE}/2022/05/Untitled-design-23.png` },
      { name: 'McCurtain Cinema',                    url: 'https://www.mccurtaincinema.com',                                                                    image: `${BASE}/2022/05/Untitled-design-19.png` },
      { name: 'Rugaru Adventures–Zip Line Tours',    url: 'https://rugaruadventures.com',                                                                       image: `${BASE}/2022/05/Untitled-design-13-1.png` },
      { name: 'Semper Fly Helicopter Tours',         url: 'https://www.facebook.com/semperflyhelicopters/',                                                     image: `${BASE}/2022/05/Untitled-design-22.png` },
      { name: 'The Gallery Paint & Chardonnay',      url: 'https://www.paintandchardonnay.com',                                                                 image: `${BASE}/2022/05/Untitled-design-18.png` },
      { name: 'The Cave Virtual Reality',            url: 'https://www.thecavevr.com/',                                                                         image: '/images/things-to-do/cave-vr.png' },
      { name: 'The Maze of Hochatown',               url: 'https://www.facebook.com/TheMazeofHochatown/',                                                       image: `${BASE}/2022/05/Untitled-design-15-1.png` },
      { name: "Thomahawk's Axe Throwing",            url: 'https://throwthataxe.com',                                                                           image: `${BASE}/2022/05/Untitled-design-16-2.png` },
    ],
  },
  {
    id: 'atv',
    label: 'ATV Trails',
    icon: Car,
    heroImage: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-9.19.51-AM.jpeg`,
    description: `The Ouachita National Forest contains hundreds of miles of designated off-highway vehicle routes so you can cover more ground. Discover the wildlife and wonders of the deep forest.\n\nDirections: From Hochatown, go north on HWY 259 about 6–7 miles. Turn left at Road 53000 (look for the "53,000" sign). A large circle area is available for parking. Pay close attention to posted signs — some areas are restricted.\n\nTip: Download the Avenza Offline Maps App to navigate even without cell service.`,
    items: [
      { name: 'ATV Maps & Information (USDA Forest Service)', url: 'https://www.fs.usda.gov/detailfull/ouachita/home/?cid=STELPRDB5156448&width=full#OHV', image: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-9.19.51-AM.jpeg` },
      { name: 'Printable ATV Map', url: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-09-at-12.29.08-PM.png', image: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-9.19.51-AM.jpeg` },
      { name: 'Download Avenza Offline Maps App', url: 'https://www.avenzamaps.com/mobile-maps', image: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-9.19.51-AM.jpeg` },
    ],
  },
  {
    id: 'beavers-bend',
    label: 'Beavers Bend State Park',
    icon: TreePine,
    heroImage: `${BASE}/2022/05/Untitled-design-2.png`,
    description: `Beavers Bend State Park spans a vast 1,300 acres along Broken Bow Lake and the Mountain Fork River. Activities include hiking, biking, fishing, tennis, volleyball, golf, mini-golf, swimming, paddle boarding, canoeing, kayaking, horseback riding, nature center activities, and picnicking. The park is nestled in the Kiamichi Mountains with jaw-dropping views and stunning wildlife.`,
    items: [
      { name: 'Beavers Bend State Park', url: 'https://www.travelok.com/state-parks/beavers-bend-resort-park', image: `${BASE}/2022/05/Untitled-design-2.png` },
    ],
  },
  {
    id: 'broken-bow-lake',
    label: 'Broken Bow Lake',
    icon: Waves,
    heroImage: `${BASE}/2022/05/Untitled-design-1.png`,
    description: `Broken Bow Lake covers 14,000 acres with 180 miles of scenic shoreline. Enjoy stunning views from rock cliffs, go for a swim in the clear deep water, pack a picnic, or go fishing for bass, catfish, crappie, sunfish, and walleye. Bring your own boat or rent from Beavers Bend Marina — speed boats, pontoons, houseboats, and jet skis available.`,
    items: [
      { name: 'Beavers Bend Marina', url: 'https://beaversbendmarina.com', image: `${BASE}/2022/05/Untitled-design-21-2.png` },
      { name: 'Broken Bow Watersports', url: 'https://brokenbowwatersports.com', image: `${BASE}/2022/07/Untitled-design-41.png` },
    ],
  },
  {
    id: 'boat-canoe',
    label: 'Boat & Canoe Rentals',
    icon: Anchor,
    heroImage: `${BASE}/2022/05/Untitled-design-18-2.png`,
    items: [
      { name: 'Ambush Adventures Kayak Rentals', url: 'http://ambushcanoerental.com', image: `${BASE}/2022/05/Untitled-design-18-2.png` },
      { name: 'Bandits ATV and Boat Rentals', url: 'https://banditsatvboatrentals.com', image: `${BASE}/2022/05/Untitled-design-19-2.png` },
      { name: 'Beavers Bend Land & Water Park', url: 'https://visitmccurtaincounty.com/directory/beavers-bend-land-water-park/', image: `${BASE}/2022/05/Untitled-design-20-2.png` },
      { name: 'Beavers Bend Marina', url: 'https://beaversbendmarina.com', image: `${BASE}/2022/05/Untitled-design-1.png` },
      { name: 'Beavers Bend River Floats', url: 'https://www.travelok.com/listings/view.profile/id.432', image: `${BASE}/2022/07/Untitled-design-41.png` },
      { name: 'Lucky Dog River Floats', url: 'https://www.facebook.com/LuckyDogRiverFloats/', image: `${BASE}/2022/05/Untitled-design-22-1.png` },
      { name: 'PaddleSUP Paddle Board & Kayak', url: 'https://paddlesupoklahoma.wixsite.com/paddlesupok', image: `${BASE}/2022/05/Untitled-design-23-1.png` },
      { name: 'Wild Goose Canoe & Kayak', url: 'http://www.wildgoosecanoe.com', image: `${BASE}/2022/05/Untitled-design-25-1.png` },
      { name: 'Remote Floats', url: 'https://www.facebook.com/Remote-Floats-105970068702450/', image: `${BASE}/2022/05/Untitled-design-7-2.png` },
    ],
  },
  {
    id: 'casinos',
    label: 'Casinos',
    icon: Sparkles,
    heroImage: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.37.12 AM.png`,
    items: [
      { name: 'Choctaw Casino Broken Bow', url: 'https://www.choctawcasinos.com/broken-bow/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.37.12 AM.png` },
      { name: 'Choctaw Landing Hochatown', url: 'https://choctawlanding.com/', image: `${BASE}/2022/05/Untitled-design-10-2.png` },
    ],
  },
  {
    id: 'fishing-guides',
    label: 'Fishing Guides',
    icon: Fish,
    heroImage: `${BASE}/2022/05/Untitled-design-2.png`,
    items: [
      { name: '4 Seasons Fishing Guide Service', url: 'https://www.4seasonsguideservice.com', image: `${BASE}/2022/05/Untitled-design-2.png` },
      { name: 'Beavers Bend Fly Shop & Guide Service', url: 'https://www.beaversbendflyshop.com', image: `${BASE}/2022/05/Untitled-design-11-2.png` },
      { name: "Bob's Guide Service", url: 'https://www.bobsguideservices.com', image: `${BASE}/2022/05/Untitled-design-12-2.png` },
      { name: 'Broken Bow Lake Family Crappie Guide', url: 'https://brokenbowlakefamilycrappieguideservice.com', image: `${BASE}/2022/05/Untitled-design-13-2.png` },
      { name: 'Broken Bow Lake Guide Service', url: 'http://www.brokenbowlakeguide.com', image: `${BASE}/2022/05/Untitled-design-3.png` },
      { name: 'Broken Bow Lake Crappie Guide', url: 'https://brokenbowlakecrappie.com', image: `${BASE}/2022/05/Untitled-design-14-2.png` },
      { name: 'Steve Branson – Trout Guide', url: 'http://www.brokenbowlakeguide.com/TroutGuide.html', image: `${BASE}/2022/05/Untitled-design-15-2.png` },
      { name: 'Wright Guide Service', url: 'https://www.facebook.com/The-Wright-Guide-Service-845973598818998/', image: `${BASE}/2022/05/Untitled-design-2.png` },
    ],
  },
  {
    id: 'food-drink',
    label: 'Food & Drink',
    icon: Utensils,
    heroImage: `${BASE}/2022/05/Untitled-design-7.png`,
    items: [
      { name: "Abendigo's Grill & Patio", url: 'https://abendigos.com/', image: `${BASE}/2022/05/Untitled-design-7.png` },
      { name: "Amy's Macarons and Bakery", url: 'https://brokenbowmacarons.com/', image: `${BASE}/2022/05/Untitled-design-8.png` },
      { name: 'Beavers Bend Brewery', url: 'https://www.beaversbendbrewery.com/', image: `${BASE}/2022/05/Untitled-design-9.png` },
      { name: 'Beavers Bend Restaurant', url: 'https://www.facebook.com/pages/category/American-Restaurant/Beavers-Bend-Restaurant-227189594369420/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.57.14 AM.png` },
      { name: 'Brick & Bread', url: 'http://brickandbread.com/', image: `${BASE}/2022/05/Untitled-design-10.png` },
      { name: 'Buffalo Grill', url: 'https://www.facebook.com/buffalogrillht/', image: `${BASE}/2022/05/Untitled-design-17.png` },
      { name: 'Grateful Head Pizza & Tap Room', url: 'https://gratefulheadpizza.com/', image: `${BASE}/2022/05/Untitled-design-18.png` },
      { name: 'Hochatown Saloon', url: 'https://hochatownsaloon.com/', image: `${BASE}/2022/05/Untitled-design-11.png` },
      { name: "Jake's Brickhouse Grill", url: 'https://www.facebook.com/jakesbrickhousegrill', image: `${BASE}/2022/05/Untitled-design-14.png` },
      { name: 'Mexico Lindo', url: 'https://www.mexicolindobrokenbow.com/', image: `${BASE}/2022/05/Untitled-design-13.png` },
      { name: 'Mi Ranchito', url: 'https://www.miranchitotexmexok.com/', image: `${BASE}/2022/05/Untitled-design-7-6.png` },
      { name: 'Monica Wimbley – Personal Chef', url: 'https://offthegridincabincatering.com/', image: `${BASE}/2022/05/Untitled-design-15.png` },
      { name: 'Mountain Fork Brewery & Restaurant', url: 'https://www.mtforkbrewery.com/home', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.59.14 AM.png` },
      { name: "Naaman's BBQ", url: 'https://www.naamansbbq.com/', image: `${BASE}/2022/05/Untitled-design-17-1.png` },
      { name: 'Okie Girls Coffee and Ice Cream', url: 'https://www.travelok.com/listings/view.profile/id.25846', image: `${BASE}/2022/05/Untitled-design-18-1.png` },
      { name: "Papa Poblano's Mexican Restaurant", url: 'http://papapoblanos.net/', image: `${BASE}/2022/05/Untitled-design-19-1.png` },
      { name: "Phat Tabb's BBQ", url: 'https://phattabbsbbq.com/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.58.29 AM.png` },
      { name: 'Pressa', url: 'https://www.pressaitalia.com/', image: `${BASE}/2022/05/Untitled-design-20-1.png` },
      { name: 'Rock Bottom Boyz BBQ', url: 'https://www.facebook.com/Rock-Bottom-Boyz-BBQ-660351367451143/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.55.48 AM.png` },
      { name: 'Rogue Local', url: 'https://roguelocalgrill.com/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-9.59.55 AM.png` },
      { name: "Roma's Italian Restaurant", url: 'https://www.romaitalianrestaurantok.com/', image: `${BASE}/2022/05/Untitled-design-21-1.png` },
      { name: 'Shady Oaks Restaurant', url: 'http://www.beavers-bend.com/shadyoaks.htm', image: `${BASE}/2022/05/Untitled-design-22.png` },
      { name: 'Shuck Me Seafood', url: 'https://www.shuckme.net/', image: `${BASE}/2022/05/Untitled-design-23.png` },
      { name: "Smith's Good Eats", url: 'https://www.facebook.com/pages/category/American-Restaurant/Smiths-Good-Eats-284145881785093/', image: `${BASE}/2022/05/Untitled-design-24.png` },
      { name: 'Stevens Gap Restaurant', url: 'https://www.facebook.com/pages/category/American-Restaurant/Stevens-Gap-Restaurant-346700422077605/', image: `${BASE}/2022/05/Untitled-design-26.png` },
      { name: 'The Blue Rooster', url: 'https://www.facebook.com/blueroosterok/', image: `${BASE}/2025/04/352755975_6141952635905956_8392697209219238263_n.jpg` },
      { name: 'The Lookout Kitchen', url: 'https://www.facebook.com/TheLookoutKitchen', image: `${BASE}/2022/05/Untitled-design-16-1.png` },
      { name: 'The Oaks Steakhouse', url: 'https://theoakssteakhouse.com/', image: `${BASE}/2025/04/Screenshot-2025-04-25-at-10.01.00 AM.png` },
      { name: 'Tuklo Grill at Choctaw Landing', url: 'https://choctawlanding.com/eat-drink', image: `${BASE}/2022/05/Untitled-design-28.png` },
      { name: 'Whip.Poor.Will Fudge & Candy', url: 'https://www.facebook.com/whippoorwillresort', image: `${BASE}/2022/05/Untitled-design-8-2.png` },
    ],
  },
  {
    id: 'golf',
    label: 'Golf Courses',
    icon: MapPin,
    heroImage: `${BASE}/2022/05/Untitled-design-9-2.png`,
    items: [
      { name: 'Cedar Creek Golf Course & Shop', url: 'https://www.travelok.com/listings/view.profile/id.1168', image: `${BASE}/2022/05/Untitled-design-9-2.png` },
      { name: 'Idabel Country Club', url: 'https://idabelcountryclub.org', image: `${BASE}/2022/05/Untitled-design-10-3.png` },
    ],
  },
  {
    id: 'hiking',
    label: 'Hiking',
    icon: Bike,
    heroImage: `${BASE}/2022/05/Untitled-design-7-3.png`,
    items: [
      { name: '2 Lost Girls Trails', url: 'https://www.facebook.com/2lostgirls/', image: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-12.16.11-PM.png` },
      { name: 'Hiking Trails on AllTrails', url: 'https://www.alltrails.com/us/oklahoma/broken-bow/views', image: `${BASE}/2022/05/Untitled-design-7-3.png` },
    ],
  },
  {
    id: 'horseback',
    label: 'Horseback Riding',
    icon: MapPin,
    heroImage: `${BASE}/2022/05/Untitled-design-8-3.png`,
    items: [
      { name: 'A to Z Guest Ranch – Smithville', url: 'https://www.atozguestranch.com', image: `${BASE}/2022/05/Untitled-design-8-3.png` },
      { name: 'Glover River Trail Rides', url: 'http://gloverrivertrailrides.com', image: `${BASE}/2022/05/Untitled-design-9-3.png` },
      { name: 'Riverman Trail Rides & Stables', url: 'https://rivermantrailrides.com', image: `${BASE}/2022/05/Untitled-design-19-2.png` },
    ],
  },
  {
    id: 'jeep-atv',
    label: 'Jeep & ATV Rentals',
    icon: Car,
    heroImage: `${BASE}/2022/05/Untitled-design-4.png`,
    items: [
      { name: 'Bandits ATV and Boat Rentals', url: 'https://banditsatvboatrentals.com', image: `${BASE}/2022/05/Untitled-design-19-2.png` },
      { name: 'Broken Bow Slingshot Adventures', url: 'https://brokenbowslingshots.com', image: `${BASE}/2022/05/Untitled-design-4.png` },
      { name: "Captain's Hideaway Powersports Rentals", url: 'https://captainshideawayrentals.com', image: `${BASE}/2022/05/Untitled-design-12-3.png` },
      { name: 'Hochatown Outfitters', url: 'https://hochatownoutfitters.wixsite.com/home', image: `${BASE}/2022/05/IMG_6078-e1562700695469.jpeg` },
    ],
  },
  {
    id: 'massages',
    label: 'Massages & Spa',
    icon: Sparkles,
    heroImage: `${BASE}/2022/05/bigstock_Young_Handsome_Man_Enjoying_A_285662233-980x654-1.jpeg`,
    items: [
      {
        name: 'A Servants Hands Massage Therapy',
        url: 'https://aservantshandsmassages.com/',
        image: `${BASE}/2022/05/bigstock_Young_Handsome_Man_Enjoying_A_285662233-980x654-1.jpeg`,
        description: 'In-cabin massages, couples, prenatal, hot stone, therapeutic & Swedish. Call/text (580) 703-3209.',
      },
      {
        name: 'Flawless Wellness SPA',
        url: 'https://flawlesswellnessspa.com/',
        image: `${BASE}/2022/05/Screen-Shot-2016-06-13-at-6.58.12-PM.png`,
        description: 'Facials, massages, waxing, medical spa, tea & oxygen bar, outdoor patio with fire pits.',
      },
      { name: 'Body Harmony Day Spa', url: 'http://www.bodyharmonydayspa.com/', image: `${BASE}/2022/05/Screen-Shot-2022-05-10-at-9.21.27-AM.jpeg` },
    ],
  },
  {
    id: 'nightlife',
    label: 'Nightlife',
    icon: Moon,
    heroImage: `${BASE}/2022/05/Untitled-design-11.png`,
    items: [
      { name: 'Hochatown Saloon', url: 'https://hochatownsaloon.com/', image: `${BASE}/2022/05/Untitled-design-11.png` },
      { name: "Scotty Dog's Hideout", url: 'https://www.facebook.com/scottydoggshideout/', image: `${BASE}/2022/05/Untitled-design-7-4.png` },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: ShoppingBag,
    heroImage: `${BASE}/2022/05/Untitled-design-6.png`,
    items: [
      { name: 'Broknbo Vintage Market', url: 'https://www.facebook.com/broknbovintagemarket', image: `${BASE}/2022/05/Untitled-design-8-4.png` },
      { name: "Bruton's Outdoors", url: 'https://www.facebook.com/brutonsonline/', image: `${BASE}/2025/04/462712284_10231527568267679_9150783642326608305_n.jpg` },
      { name: 'Campe Diem', url: 'https://www.facebook.com/people/Campe-Diem/61567111647914/', image: `${BASE}/2022/05/Untitled-design-9-4.png` },
      { name: 'Country Antiques & Gifts', url: 'https://www.facebook.com/Country-Antiques-Gifts-168141037193501/', image: `${BASE}/2022/05/Untitled-design-6.png` },
      { name: 'Hochatime', url: 'https://hochatime.com', image: `${BASE}/2022/05/Untitled-design-10-4.png` },
      { name: "Janet's Treasure Chest", url: 'https://www.facebook.com/janetstreasurechest/', image: `${BASE}/2022/05/Untitled-design-11-4.png` },
      { name: 'Once Upon A Time Antiques', url: 'https://www.facebook.com/OUATantiques/', image: `${BASE}/2022/05/Untitled-design-12-4.png` },
      { name: 'Perfectly Imperfect Flea Market', url: 'https://www.facebook.com/perfectlyimperfectmarket/', image: `${BASE}/2022/05/Untitled-design-13-4.png` },
      { name: 'Savvy Chix', url: 'https://www.facebook.com/Savvy.Chix.Boutique/', image: `${BASE}/2022/05/Untitled-design-14-3.png` },
      { name: 'Shabby Shack', url: 'https://www.facebook.com/shabbyshackbrokenbow', image: `${BASE}/2022/05/Untitled-design-15-3.png` },
      { name: 'Youngbloods Gifts', url: 'https://www.facebook.com/YoungbloodsGifts/', image: `${BASE}/2022/05/Untitled-design-16-3.png` },
    ],
  },
  {
    id: 'train',
    label: 'Train Rides',
    icon: Train,
    heroImage: `${BASE}/2022/05/Untitled-design-8.png`,
    items: [
      { name: 'Beavers Bend Depot & Stables', url: 'https://www.facebook.com/trainandstables', image: `${BASE}/2022/05/Untitled-design-8.png` },
    ],
  },
  {
    id: 'wineries',
    label: 'Wineries, Distilleries & Breweries',
    icon: Wine,
    heroImage: `${BASE}/2022/05/Untitled-design-10-5.png`,
    items: [
      { name: 'Beavers Bend Brewery', url: 'https://www.beaversbendbrewery.com', image: `${BASE}/2022/05/Untitled-design-10-5.png` },
      { name: 'Fish Tales Winery & Vineyards', url: 'https://www.fishtaleswine.com', image: `${BASE}/2022/05/Untitled-design-18-3.png` },
      { name: 'Girls Gone Wine', url: 'https://www.thegirlsgonewine.com', image: `${BASE}/2022/05/Artwork21.png` },
      { name: 'Hochatown Distilling Company', url: 'https://www.hochatowndistilling.com', image: `${BASE}/2022/05/Untitled-design-7-5.png` },
      { name: 'Knotted Rope Winery', url: 'https://www.facebook.com/knottedropewinery/', image: `${BASE}/2022/05/Untitled-design-15.png` },
      { name: 'Mountain Fork Brewery', url: 'https://www.mtforkbrewery.com', image: `${BASE}/2022/05/Untitled-design-8-5.png` },
      { name: 'The Tasting Room', url: 'https://www.facebook.com/thetastingroominhochatown', image: `${BASE}/2022/05/Untitled-design-9-5.png` },
      { name: 'Vojas Winery', url: 'https://vojaiswinery.com', image: `${BASE}/2022/04/Bear-MountainLogo02.png` },
    ],
  },
];

export default function ThingsToDo() {
  const [activeTab, setActiveTab] = useState('adventure');
  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-cream">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center space-y-4">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold uppercase tracking-[0.3em] text-xs font-bold">
          Adventure Awaits
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif font-bold text-espresso">
          Things to Do
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-espresso/60 max-w-2xl mx-auto text-lg italic">
          Enjoy the many activities of the surrounding areas! Whether you're looking for a relaxing restaurant or a great outdoor adventure, Broken Bow, Oklahoma is the place to be.
        </motion.p>
      </div>

      {/* Sticky Tab Bar */}
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
                    activeTab === cat.id ? 'bg-forest text-gold shadow-md' : 'text-espresso/60 hover:text-espresso hover:bg-gold/10'
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
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-10">

          {/* Hero Image */}
          <div className="relative h-56 md:h-80 rounded-[40px] overflow-hidden shadow-2xl">
            <img src={active.heroImage} alt={active.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{active.label}</h2>
            </div>
          </div>

          {/* Description */}
          {active.description && (
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <p className="text-espresso/70 leading-relaxed whitespace-pre-line text-lg">{active.description}</p>
            </div>
          )}

          {/* Business Cards with real OG images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {active.items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-gold/5 hover:border-gold/20 flex flex-col"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-serif font-bold text-espresso group-hover:text-gold transition-colors leading-snug">
                    {item.name}
                  </h3>
                  {item.description && <p className="text-espresso/60 text-xs leading-relaxed">{item.description}</p>}
                  <div className="flex items-center gap-1 text-gold text-[10px] font-bold uppercase tracking-widest mt-auto pt-2">
                    Learn More <ExternalLink size={10} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-espresso rounded-[40px] p-12 md:p-16 text-center text-cream space-y-6">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Ready to Plan?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Make Broken Bow Your Basecamp</h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            All of these amazing activities are just minutes from our luxury cabins. Book your stay and make it a trip to remember.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="tel:5802124746" className="bg-gold hover:bg-gold-hover text-forest font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300">
              Call (580) 212-4746
            </a>
            <a href="mailto:bearmountainlodging@gmail.com" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full border border-white/20 uppercase text-xs tracking-widest transition-all duration-300">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
