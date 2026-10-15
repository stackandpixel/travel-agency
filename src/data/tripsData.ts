import { Trip } from '../types';

export const sampleTrips: Trip[] = [
  {
    id: 'trip-1',
    slug: 'kasol-kheerganga',
    title: 'Kasol & Kheerganga Adventure',
    tagline: 'Hot springs, Parvati pine forests & starry nights at 9,700 ft',
    destination: 'Kasol & Kheerganga, Parvati Valley',
    region: 'Himachal',
    category: 'Mountains & Treks',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    startingPrice: 9499,
    originalPrice: 11499,
    startingCity: ['Delhi', 'Chandigarh'],
    departureDate: '2026-10-24',
    departureDateFormatted: '24 Oct 2026',
    nextBatches: ['24 Oct 2026', '31 Oct 2026', '07 Nov 2026', '14 Nov 2026'],
    totalSeats: 16,
    availableSeats: 4,
    fitnessLevel: 'Moderate',
    heroImage: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Immerse yourself in the magical rhythm of Parvati Valley. We will wander through Israeli bakeries in Old Kasol, hike alongside the roaring Parvati River to Chalal village, and embark on the scenic 12km pine-scented trek to Kheerganga. At the top, soak in the natural hot sulphur springs surrounded by panoramic Himalayan summits.',
    highlights: [
      'Trek through dense deodar forests and thunderous waterfalls to Kheerganga',
      'Take a rejuvenating dip in the sacred natural hot sulphur springs at 9,700 ft',
      'Campfire, acoustic jams, and stargazing at alpine mountaintop tents',
      'Cafe hopping in Kasol — savor authentic shakshuka, schnitzels, and fresh apple cider',
      'Explore hidden riverside trails in Chalal and Manikaran Gurudwara'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Overnight Journey from Delhi/Chandigarh',
        description: 'Meet your Roam Tribe captain and fellow travellers at Majnu Ka Tilla, Delhi by 6:30 PM. Board our sanitized AC Volvo semi-sleeper bus. Ice-breaker games, travel playlists, and an overnight scenic drive through the Himalayan foothills.',
        highlights: ['Tribe meet & greet', 'Overnight Volvo journey', 'Midnight pitstop for chai & parathas'],
        mealsIncluded: 'Snack box',
        stayType: 'Overnight Volvo AC Coach'
      },
      {
        day: 2,
        title: 'Arrival in Kasol & Riverside Village Walk',
        description: 'Wake up to crisp mountain air and turquoise waters of Parvati River. Check in to our cozy riverside wooden boutique stay in Kasol. Rest, then head out on an easy woodland trail to Chalal village. Evening cafe session with acoustic indie music.',
        highlights: ['Kasol check-in & hot breakfast', 'Chalal pine forest trek', 'Local cafe exploration'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Cozy Riverside Cottages (Kasol)'
      },
      {
        day: 3,
        title: 'Trek to Kheerganga Top & Hot Spring Dip',
        description: 'Early breakfast before driving to Barshaini, the base camp. Start the 12km picturesque ascent through Rudra Nag waterfall, cedar forests, and quaint wooden hamlet stops. Reach Kheerganga by late afternoon, change into swimwear, and soak in the soothing hot sulphur springs under snow-dusted peaks.',
        highlights: ['Barshaini to Kheerganga ascent', 'Rudra Nag waterfall stop', 'Natural hot water spring dip', 'Bonfire and community dinner'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Alpine Dome Tents at Kheerganga Top'
      },
      {
        day: 4,
        title: 'Sunrise Descent & Manikaran Sahib',
        description: 'Catch a glorious golden-hour sunrise over the Himalayan ridgeline. After a hot breakfast, trek back down to Barshaini. Visit the historic Manikaran Gurudwara and langar hall, and shop for local woollens and silver trinkets in Kasol market before evening departure.',
        highlights: ['Mountaintop sunrise', 'Manikaran Sahib visit', 'Local craft shopping', 'Board return Volvo'],
        mealsIncluded: 'Breakfast',
        stayType: 'Overnight Volvo Bus'
      },
      {
        day: 5,
        title: 'Morning Arrival back in Delhi',
        description: 'Arrive back in Delhi by 8:30 AM with a camera roll full of memories, new best friends, and stories to share for months.',
        highlights: ['Final tribe farewell hugs', 'Shared group album link'],
        mealsIncluded: 'None',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      'AC Semi-Sleeper Volvo transit from Delhi/Chandigarh to Kasol & return',
      'Local transfers between Kasol, Barshaini, and Manikaran in private cabs',
      '1 Night stay in boutique riverside cottages in Kasol (twin/triple sharing)',
      '1 Night alpine camping experience at Kheerganga top with sleeping bags & mats',
      '4 Meals: 3 hot breakfasts & 2 hearty mountain dinners (Veg & Non-Veg options)',
      'Certified Himalayan trek leader & friendly Roam Tribe community captain',
      'Guided trek permits, camping fees & forest department clearances',
      'First aid kit with portable oxygen canister & emergency mountain support'
    ],
    exclusions: [
      'Meals during road transit or personal cafe hopping in Kasol',
      'Personal expenses, laundry, tipping, or porterage charges',
      'Travel insurance or medical evacuation costs',
      'Any cost arising due to unforeseen weather road-blocks or flight delays'
    ],
    accommodation: 'Riverside wooden cottages with attached washrooms in Kasol (Night 1) & High-altitude all-weather dome tents with dry pit facilities at Kheerganga (Night 2).',
    transportation: 'Luxury AC Volvo Semi-Sleeper Coach (Delhi-Kasol-Delhi) & private Tempo Traveller/Sumo for local trailheads.',
    meetingPoint: 'Majnu Ka Tilla Metro Station Gate 1, New Delhi (Pickup also available at Tribune Chowk, Chandigarh).',
    packingList: [
      'Sturdy trekking shoes with good grip (broken in)',
      'Warm fleece jacket, down jacket & thermal innerwear',
      'Comfortable hiking trousers & quick-dry t-shirts',
      'Rain poncho or waterproof windcheater',
      'Swimwear/quick-dry shorts for Kheerganga hot spring',
      'Headlamp or flashlight with extra batteries',
      'Refillable 1-litre water bottle & personal energy snacks',
      'Power bank (power is limited at Kheerganga summit)'
    ],
    faqs: [
      {
        question: 'Can I join this trip as a solo traveller?',
        answer: 'Yes! Over 65% of our tribe joins solo. You will be paired with same-gender roommates or can opt for twin sharing. By Day 2, everyone feels like old friends.'
      },
      {
        question: 'How difficult is the Kheerganga trek?',
        answer: 'It is rated Moderate. The total distance is about 12 km with a gradual incline and well-defined trail. Beginners with reasonable everyday fitness can comfortably complete it.'
      },
      {
        question: 'Are washrooms available at Kheerganga summit camp?',
        answer: 'Yes, we provide clean high-altitude tent washrooms and dry pit setups as standard for eco-camping in the Himalayas.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-2',
    slug: 'goa-beach-escape',
    title: 'Goa Beach Escape & Secret Coves',
    tagline: 'Sun-drenched cliffs, hidden lagoons, coastal hikes & sunset acoustic jams',
    destination: 'South & North Goa',
    region: 'Goa',
    category: 'Beaches & Islands',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    startingPrice: 7999,
    originalPrice: 9999,
    startingCity: ['Pune', 'Mumbai'],
    departureDate: '2026-10-23',
    departureDateFormatted: '23 Oct 2026',
    nextBatches: ['23 Oct 2026', '30 Oct 2026', '06 Nov 2026', '13 Nov 2026'],
    totalSeats: 14,
    availableSeats: 3,
    fitnessLevel: 'Relaxed',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b271?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Skip the crowded commercial spots and see the raw, soulful side of Goa with Roam Tribe. We will kayak through calm mangrove backwaters, discover secluded cliffside beaches in South Goa (Kakolem and Butterfly beach), explore historic Portuguese villas in Fontainhas, and unwind with sunset acoustics by the Arabian Sea.',
    highlights: [
      'Explore secret cliff-locked beaches and hidden coastal trails',
      'Sunrise mangrove kayaking through backwaters in Sal river',
      'Heritage photowalk through pastel Latin Quarter lanes of Fontainhas',
      'Beachside BBQ, sundowners & live acoustic sessions',
      'Handpicked beachfront boutique hostel/resort with swimming pool'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Check-in, Fontainhas Photowalk & Sunset Cliff',
        description: 'Arrive at our lush boutique property in South Goa. Meet your tribe captain and settle in. In the afternoon, head into Fontainhas (Panjim) for an architectural photowalk through colourful Portuguese quarters, grabbing fresh poee and bebinca. Cap the evening on Cabo de Rama cliff watching a fiery crimson sunset.',
        highlights: ['Tribe check-in & pool unwind', 'Fontainhas heritage lanes', 'Cabo de Rama sunset view'],
        mealsIncluded: 'Welcome Drink & Dinner',
        stayType: 'Boutique Beach Resort / Villa with Pool'
      },
      {
        day: 2,
        title: 'Secret Island Boating, Butterfly Beach & Beach BBQ',
        description: 'Wake up to the sound of ocean waves. Board our private boat to secluded Butterfly Beach and spot playful dolphins along the way. Enjoy beach volleyball, sea swimming, and fresh coconut water. Evening beachside barbecue, tribe games, and stargazing.',
        highlights: ['Private dolphin boat cruise', 'Butterfly Beach swim & sunbathe', 'Sunset beach BBQ & acoustic music'],
        mealsIncluded: 'Breakfast & Barbecue Dinner',
        stayType: 'Boutique Beach Resort / Villa with Pool'
      },
      {
        day: 3,
        title: 'Morning Mangrove Kayaking & Farewell Brunch',
        description: 'Paddle through serene backwater channels shaded by mangroves with our certified guide. Enjoy a lazy bohemian beach shack brunch, shop for cashew feni and spices, and say your goodbyes as we head to Madgaon / Vasco airport.',
        highlights: ['Backwater kayaking session', 'Goan seafood/vegetarian feast', 'Farewell circle'],
        mealsIncluded: 'Breakfast',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      '2 Nights accommodation in a boutique resort with swimming pool (twin/triple sharing)',
      '2 Delicious buffet breakfasts & 2 curated dinners (including 1 Beach BBQ)',
      'Private AC vehicle for all planned sightseeing and airport/railway transfers in Goa',
      'Private boat cruise to Butterfly Beach & dolphin spotting',
      'Guided backwater kayaking experience with life jackets and equipment',
      'Roam Tribe captain to curate music, group vibes, and photography'
    ],
    exclusions: [
      'Flights or train tickets to/from Goa (we assist with flight timings from Mumbai/Pune)',
      'Lunches and alcohol beverages',
      'Personal water sports or motorized rides'
    ],
    accommodation: 'Handpicked coastal boutique resort with pool, AC rooms, and tropical gardens in South Goa.',
    transportation: 'AC Tempo Traveller for internal group travel throughout Goa.',
    meetingPoint: 'Madgaon Railway Station or Dabolim Airport (GOI) / Mopa (GOX) airport terminal pickup available.',
    packingList: [
      'Light cotton beachwear, sundresses, linen shirts & shorts',
      'Swimwear and quick-dry microfibre towel',
      'UV sunglasses and reef-safe sunscreen (SPF 50+)',
      'Slip-on sandals and comfortable walking sneakers for cliff trails',
      'Waterproof phone pouch for boat & kayak trips'
    ],
    faqs: [
      {
        question: 'Are travellers from Pune and Mumbai travelling together?',
        answer: 'Yes! We coordinate sleeper buses and flight batches so members from Pune and Mumbai arrive around the same time.'
      },
      {
        question: 'Is this a partying trip or a nature trip?',
        answer: 'It is a balanced mix: relaxed nature, secret coves, cozy cafes, and chilled-out evening music vibes rather than deafening crowded clubs.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-3',
    slug: 'meghalaya-explorer',
    title: 'Meghalaya Explorer: Living Roots & Waterfalls',
    tagline: 'Crystalline Umngot river, ancient living root bridges & mist-shrouded canyons',
    destination: 'Cherrapunji, Mawlynnong & Dawki, Meghalaya',
    region: 'Meghalaya',
    category: 'Backpacking',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPrice: 18999,
    originalPrice: 22499,
    startingCity: ['Guwahati'],
    departureDate: '2026-11-01',
    departureDateFormatted: '01 Nov 2026',
    nextBatches: ['01 Nov 2026', '12 Nov 2026', '24 Nov 2026', '05 Dec 2026'],
    totalSeats: 12,
    availableSeats: 2,
    fitnessLevel: 'Challenging',
    heroImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Known as the Abode of Clouds, Meghalaya is an ethereal realm of rainforests, living root architecture, and turquoise rivers. On this 6-day expedition, we descend the 3,500 stairs of Nongriat to stand on the Double Decker Living Root Bridge, boat on the crystal-clear glass waters of Dawki, cliff jump at Krang Shuri, and camp under millions of stars.',
    highlights: [
      'Trek to the iconic Double Decker Living Root Bridge & Rainbow Falls',
      'Boat on the glass-transparent waters of Umngot River in Dawki',
      'Swim in the emerald blue natural pool below Krang Shuri Waterfall',
      'Explore subterranean limestone passages in Mawsmai & Arwah Caves',
      'Taste Khasi delicacies and experience local tribal hospitality in homestays'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Shillong via Umiam Lake',
        description: 'Assemble at Guwahati Airport/Railway Station by 11:00 AM. Board our vehicle and drive up into the cool Khasi hills. Stop at the breathtaking Umiam Lake (Barapani). Reach Shillong, explore Police Bazaar and the vibrant indie music cafes.',
        highlights: ['Umiam Lake viewpoint', 'Shillong rock cafe culture', 'Tribe briefing'],
        mealsIncluded: 'Dinner',
        stayType: 'Boutique Shillong Hotel'
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji (Sohra) & Canyon Waterfalls',
        description: 'Drive along dramatic gorge roads into Cherrapunji. Visit Nohkalikai Falls (India’s tallest plunge waterfall), explore the prehistoric fossils in Arwah Cave, and watch mist roll across the valleys at Wei Sawdong tiered falls.',
        highlights: ['Nohkalikai Falls', 'Wei Sawdong waterfall', 'Arwah limestone cave'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Cozy Valley Resort in Sohra'
      },
      {
        day: 3,
        title: 'The Great Descent: Double Decker Living Root Bridge',
        description: 'The signature day: descend 3,500 stone stairs into the rainforest of Nongriat. Marvel at bio-engineering centuries in the making: living ficus roots twined across thundering rivers. Hike further to Rainbow Falls for a swim.',
        highlights: ['Double Decker Root Bridge', 'Rainbow Falls hike', 'Natural blue lagoon swim'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Nongriat Community Homestay'
      },
      {
        day: 4,
        title: 'Ascent to Tyrna & Riverside Camping in Shnongpdeng',
        description: 'Ascend back to Tyrna village and drive towards the border town of Dawki and Shnongpdeng village. Settle into riverside tents along the clear Umngot River. Bonfire and barbecue under the night sky.',
        highlights: ['Shnongpdeng riverside camps', 'Bonfire and stargazing', 'Fresh Khasi meal'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Riverside Tents at Shnongpdeng'
      },
      {
        day: 5,
        title: 'Dawki Boating & Krang Shuri Waterfall Cliff Jump',
        description: 'Experience boats floating as if on air across crystalline waters. Try kayaking and cliff jumping with safety gear. In the afternoon, visit Krang Shuri waterfalls in Jaintia hills for a swim in the turquoise pool.',
        highlights: ['Dawki glass boating', 'Krang Shuri swimming', 'Drive to Jowai/Shillong'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Heritage Stay in Shillong'
      },
      {
        day: 6,
        title: 'Return to Guwahati & Departure',
        description: 'Hearty breakfast before dropping travellers at Guwahati Airport by 2:00 PM for onward flights to Mumbai, Pune, or Delhi.',
        highlights: ['Souvenir shopping for Khasi honey & tea', 'Airport drops'],
        mealsIncluded: 'Breakfast',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      '5 Nights accommodation (Hotels in Shillong & Sohra, Homestay in Nongriat, Riverside Tents in Dawki)',
      '5 Breakfasts and 5 Dinners with local and North Indian options',
      'All internal transfers in comfortable Force Tempo Traveller / SUV from Guwahati',
      'Experienced Roam Tribe tour captain and certified local Khasi guides',
      'All entry permits, cave fees, and bridge tolls',
      'Dawki boating & life jackets for water activities'
    ],
    exclusions: [
      'Airfare to/from Guwahati (GAU)',
      'Personal water activities like scuba diving or zip-lining at Dawki',
      'Any lunches or personal shopping'
    ],
    accommodation: 'Mix of scenic mountain resorts, an authentic tribal village homestay in Nongriat, and riverside camping.',
    transportation: 'Dedicated AC Tempo Traveller or SUV for hill terrain throughout the 6 days.',
    meetingPoint: 'Guwahati Airport (GAU) Arrival Terminal at 11:30 AM.',
    packingList: [
      'Trekking shoes with aggressive tread for wet stone steps',
      'Knee support/bands (very helpful for 3,500 stairs)',
      'Quick-dry trekking clothes and swim gear',
      'Waterproof backpack cover & rain gear',
      'Leech socks / salt (standard for monsoon/autumn rainforests)',
      'Headlamp and dry bags for electronics'
    ],
    faqs: [
      {
        question: 'How tough is the Double Decker Root Bridge stairs hike?',
        answer: 'There are approximately 3,500 steps down and 3,500 back up. We take plenty of breaks, stay overnight in Nongriat to avoid doing both in one day, and provide trekking poles.'
      },
      {
        question: 'When is the Umngot River at its clearest?',
        answer: 'From mid-October to April, the river is world-famous for its glass-like crystal transparency.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-4',
    slug: 'manali-snow-escape',
    title: 'Manali Snow Escape & Solang Adventure',
    tagline: 'Snow-capped peaks, alpine pine forests, riverside cafes & Atal Tunnel drive',
    destination: 'Manali, Old Manali & Sissu, Himachal Pradesh',
    region: 'Himachal',
    category: 'Weekend Getaway',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    startingPrice: 12999,
    originalPrice: 15499,
    startingCity: ['Delhi', 'Chandigarh'],
    departureDate: '2026-11-06',
    departureDateFormatted: '06 Nov 2026',
    nextBatches: ['06 Nov 2026', '13 Nov 2026', '20 Nov 2026', '27 Nov 2026'],
    totalSeats: 16,
    availableSeats: 5,
    fitnessLevel: 'Easy',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Escape to the snow-covered wonderland of Manali. We will cross the world’s longest highway tunnel (Atal Tunnel) into the lunar snowscape of Lahaul Valley and Sissu waterfall, stroll through apple orchards in Old Manali, hang out at riverside cafes with wood-fired pizzas, and enjoy cozy evening bonfires with fellow travellers.',
    highlights: [
      'Drive through Atal Tunnel into Sissu waterfall and the snowfields of Lahaul',
      'Stay in wooden apple orchard cottages overlooking snowclad Pir Panjal ranges',
      'Hike to Jogini Waterfall through pine forests and ancient cedar groves',
      'Old Manali cafe hopping: live indie jam sessions, cider and trouts',
      'Snow play, tube sledding, and optional ATV rides in Solang Valley'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Overnight Volvo Coach from Delhi to Manali',
        description: 'Depart Delhi by 6:00 PM in a Volvo Semi-Sleeper. Connect with your Roam Tribe squad over travel playlists and roadside dinner stop.',
        highlights: ['Depart Delhi/Chandigarh', 'Overnight Volvo drive'],
        mealsIncluded: 'Snack box',
        stayType: 'Overnight Volvo AC Coach'
      },
      {
        day: 2,
        title: 'Manali Arrival & Old Manali Stroll',
        description: 'Arrive in Manali, check in to our wooden chalet resort. After freshening up, head out to Old Manali, visit the 500-year-old wooden Hadimba Temple, and chill at riverside cafes.',
        highlights: ['Check in & mountain breakfast', 'Hadimba Temple walk', 'Cafe hopping in Old Manali'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Wooden Chalet Resort in Old Manali'
      },
      {
        day: 3,
        title: 'Atal Tunnel, Sissu Waterfall & Lahaul Snowscapes',
        description: 'Cross the monumental Atal Tunnel beneath Rohtang Pass to enter the rugged, snow-blanketed Lahaul Valley. Explore the icy Sissu Waterfall and frozen lake. Snowball fights, photography, and hot Maggi with mountain tea.',
        highlights: ['Atal Tunnel drive', 'Sissu frozen waterfall', 'Snow sports & photography'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Wooden Chalet Resort in Old Manali'
      },
      {
        day: 4,
        title: 'Jogini Waterfall Hike & Evening Departure',
        description: 'Morning hike through Vashisht village to Jogini Waterfall. Soak in natural hot water springs at Vashisht. Shop at Mall Road for handwoven Kullu shawls, then board return Volvo bus.',
        highlights: ['Jogini Waterfall trek', 'Vashisht hot sulphur spring', 'Evening Volvo departure'],
        mealsIncluded: 'Breakfast',
        stayType: 'Overnight Volvo Bus'
      },
      {
        day: 5,
        title: 'Morning Arrival in Delhi/Chandigarh',
        description: 'Reach Delhi Kashmere Gate / Majnu Ka Tilla by 8:00 AM with happy hearts and new lifelong friends.',
        highlights: ['Return home refreshed'],
        mealsIncluded: 'None',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      'Delhi-Manali-Delhi Volvo Semi-Sleeper tickets',
      '2 Nights stay in handpicked Old Manali wooden cottages (twin/triple sharing)',
      'All local transfers to Atal Tunnel, Sissu & Solang in private 4x4 / Tempo Traveller',
      'Daily breakfast and dinner at the cottage',
      'Guided Jogini waterfall hike & trip captain'
    ],
    exclusions: ['Lunch, personal snow sports or ATV rides in Solang', 'Personal shopping'],
    accommodation: 'Boutique wooden cottages amidst apple orchards with heating facilities.',
    transportation: 'AC Volvo from Delhi + private local mountain vehicle.',
    meetingPoint: 'Majnu Ka Tilla, Delhi at 5:30 PM.',
    packingList: ['Heavy winter down jacket', 'Gloves, woolen beanie & thermal layers', 'Waterproof snow shoes or boots', 'Sunscreen and sunglasses'],
    faqs: [
      {
        question: 'Will there be snow during this trip?',
        answer: 'Yes! Sissu and Solang have snow, and high-altitude areas are blanketed in white.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-5',
    slug: 'gokarna-coastal-getaway',
    title: 'Gokarna Beach Trek & Coastal Camp',
    tagline: '5-beach cliff trek, secluded coves, bioluminescence & coastal campfire',
    destination: 'Gokarna, Karnataka',
    region: 'Karnataka',
    category: 'Weekend Getaway',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    startingPrice: 6999,
    originalPrice: 8499,
    startingCity: ['Pune', 'Mumbai', 'Bangalore'],
    departureDate: '2026-10-30',
    departureDateFormatted: '30 Oct 2026',
    nextBatches: ['30 Oct 2026', '06 Nov 2026', '13 Nov 2026', '20 Nov 2026'],
    totalSeats: 16,
    availableSeats: 6,
    fitnessLevel: 'Moderate',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b271?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Gokarna is the bohemian haven of the Arabian coast. We hike across five dramatic rocky sea cliffs connecting Belekan, Paradise, Half Moon, Om, and Kudle beaches. Watch the Arabian Sea crash against red laterite rocks, swim in secluded lagoons, and sleep in beachside tents with the soothing sound of surf.',
    highlights: [
      'Famous 5-beach cliff trek connecting Paradise, Half Moon, and Om Beach',
      'Beachside camping under coconut palms with bonfire & acoustic music',
      'Visit Mirjan Fort — a fairytale 16th-century mossy laterite fortress',
      'Witness phosphorescent plankton (bioluminescence) on dark new-moon shores',
      'Explore temple street bazaar and savor coastal banana leaf thalis'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Gokarna & Mirjan Fort Exploration',
        description: 'Reach Gokarna by early morning. Check into our beachside tents / cottages on Kudle Beach. Freshen up and take a short scenic drive to the atmospheric Mirjan Fort. Sunset over Om Beach with rock cafe dinner.',
        highlights: ['Check in to Kudle beach camp', 'Mirjan Fort photowalk', 'Om Beach sunset'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Beachside Tents / Cottages at Kudle'
      },
      {
        day: 2,
        title: 'The Legendary 5-Beach Cliff Trek & Campfire',
        description: 'Fuel up with a coastal breakfast. Start our guided trek from Belekan Beach over rugged headlands into Paradise Beach, accessible only on foot or boat. Continue past Half Moon and Dolphin Point to Om Beach. Night campfire with music.',
        highlights: ['5-beach coastal hike', 'Swimming at Paradise Beach', 'Beachside bonfire & tribe games'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Beachside Tents / Cottages at Kudle'
      },
      {
        day: 3,
        title: 'Vibhooti Falls & Return Journey',
        description: 'Morning swim in the sea. Drive into the lush Western Ghats forest to Vibhooti Falls for a refreshing dip in limestone cascades. Depart for Pune/Mumbai/Bangalore in the evening.',
        highlights: ['Vibhooti Falls natural pool dip', 'Western Ghats forest drive', 'Depart for home'],
        mealsIncluded: 'Breakfast',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      '2 Nights accommodation in beachside cottages / camp (twin/triple sharing)',
      'All local transport between beaches, Mirjan Fort, and Vibhooti Falls',
      '2 Breakfasts and 2 Dinners (fresh coastal preparations)',
      'Certified trek leader and Roam Tribe captain',
      'First aid & trek permits'
    ],
    exclusions: ['Bus or train travel to Gokarna (we coordinate bookings from Pune/Mumbai)', 'Lunches and personal water rides'],
    accommodation: 'Beachside campsite and cottages right on the sandy shore of Kudle Beach.',
    transportation: 'Private Tempo Traveller for local sightseeing and waterfall transfers.',
    meetingPoint: 'Gokarna Road Railway Station or Gokarna Bus Stand at 7:30 AM.',
    packingList: ['Light trekking sandals with ankle straps', 'Swimwear and sunglasses', 'Torch/headlamp', 'Small 20L daypack'],
    faqs: [
      {
        question: 'Is the 5-beach trek suitable for beginners?',
        answer: 'Yes! The cliffs have a well-trodden trail and take about 3-4 hours with numerous chill stops at each beach.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-6',
    slug: 'bali-group-escape',
    title: 'Bali Group Escape: Islands, Volcanoes & Waterfalls',
    tagline: 'Ubud emerald rice terraces, Nusa Penida cliffs & tropical beach clubs',
    destination: 'Ubud, Nusa Penida & Canggu, Bali (Indonesia)',
    region: 'International',
    category: 'International Trips',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    startingPrice: 54999,
    originalPrice: 62999,
    startingCity: ['Mumbai', 'Delhi'],
    departureDate: '2026-11-14',
    departureDateFormatted: '14 Nov 2026',
    nextBatches: ['14 Nov 2026', '28 Nov 2026', '12 Dec 2026', '26 Dec 2026'],
    totalSeats: 14,
    availableSeats: 3,
    fitnessLevel: 'Relaxed',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    overview:
      'Our flagship international group tour designed specifically for young Indian explorers. Discover the spiritual calm of Ubud, walk through the iconic Tegalalang rice terraces, chase majestic jungle waterfalls, take a high-speed speedboat to the jaw-dropping T-Rex cliffs of Nusa Penida, and celebrate sunset at Canggu beach clubs.',
    highlights: [
      'Speedboat day trip to Nusa Penida: Kelingking T-Rex cliff & Broken Beach',
      'Hike through Tegalalang emerald rice terraces & jungle swings in Ubud',
      'Swim in the hidden canyon pool of Kanto Lampo Waterfall',
      'Stay in private luxury Balinese pool villas with lush tropical gardens',
      'Sunset celebrations at iconic Canggu beach clubs with oceanfront beats'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Denpasar & Check in to Ubud Luxury Villa',
        description: 'Land at Ngurah Rai International Airport (DPS) in Denpasar. Private AC transfer to our boutique jungle villa in Ubud. Floating welcome drinks, meet your tribe mates, and enjoy a traditional Balinese dinner.',
        highlights: ['Airport VIP pickup', 'Check in to private villa with pool', 'Welcome dinner'],
        mealsIncluded: 'Dinner',
        stayType: 'Luxury Boutique Villa in Ubud with Private Pool'
      },
      {
        day: 2,
        title: 'Ubud Waterfalls, Tegalalang Terraces & Jungle Swing',
        description: 'Explore the cascading tiered curtain of Kanto Lampo waterfall. Head to the lush green terraces of Tegalalang for photos and soaring jungle swings over the valley. Evening Ubud art market exploration.',
        highlights: ['Kanto Lampo waterfall swim', 'Tegalalang rice terraces', 'Jungle swing experience'],
        mealsIncluded: 'Breakfast & Lunch',
        stayType: 'Luxury Boutique Villa in Ubud'
      },
      {
        day: 3,
        title: 'Nusa Penida Island Adventure: Kelingking Cliff',
        description: 'Board a morning high-speed catamaran to Nusa Penida island. Marvel at the dramatic dinosaur-shaped T-Rex cliff at Kelingking Beach, visit Angel’s Billabong natural infinity pool, and Broken Beach.',
        highlights: ['Speedboat to Nusa Penida', 'Kelingking T-Rex cliff', 'Angel’s Billabong & Broken Beach'],
        mealsIncluded: 'Breakfast & Island Lunch',
        stayType: 'Luxury Boutique Villa in Ubud'
      },
      {
        day: 4,
        title: 'Uluwatu Temple Sunset & Cliffside Kecak Dance',
        description: 'Move to the vibrant coastal district of Seminyak/Canggu. In the late afternoon, visit the dramatic 70-meter sea cliff temple of Uluwatu. Watch the mesmerizing fire & Kecak dance against an orange sunset over the Indian Ocean.',
        highlights: ['Uluwatu cliff temple', 'Sunset Kecak fire dance', 'Jimbaran bay seafood dinner'],
        mealsIncluded: 'Breakfast & Dinner',
        stayType: 'Design Hotel in Seminyak/Canggu'
      },
      {
        day: 5,
        title: 'Canggu Bohemian Cafes, Surfing & Beach Club Party',
        description: 'Lazy morning brunch in Canggu. Optional beginner surf lesson at Echo Beach or cafe hopping. In the evening, gather at a premium beach club for our grand farewell celebration by the ocean.',
        highlights: ['Canggu cafe culture', 'Surf session at Echo Beach', 'Sunset farewell beach club party'],
        mealsIncluded: 'Breakfast & Farewell Bites',
        stayType: 'Design Hotel in Seminyak/Canggu'
      },
      {
        day: 6,
        title: 'Balinese Spa & Airport Transfers',
        description: 'Indulge in a relaxing 60-minute Balinese massage before airport drop-off for evening flights back to India.',
        highlights: ['Relaxing spa treatment', 'Airport drops with tearful goodbyes'],
        mealsIncluded: 'Breakfast',
        stayType: 'Departure'
      }
    ],
    inclusions: [
      '5 Nights accommodation in handpicked 4-star boutique villas & design hotels (twin sharing)',
      'Daily international breakfasts + 3 curated dinners + 2 lunches',
      'Private air-conditioned van for all land transfers in Bali',
      'Return high-speed catamaran ferry tickets to Nusa Penida Island',
      'All temple entry tickets, Nusa Penida island fees, and Kecak dance passes',
      'Dedicated Indian Roam Tribe tour captain + English-speaking local Balinese guide',
      'Visa on Arrival guidance and Indonesian SIM card coordination'
    ],
    exclusions: [
      'International flights (Mumbai/Delhi to Bali DPS round-trip)',
      'Indonesia Visa on Arrival (approx IDR 500,000 / ~₹2,700 paid directly at customs)',
      'Lunches/dinners not mentioned in inclusions',
      'Personal travel insurance'
    ],
    accommodation: 'Private luxury pool villa in Ubud (3 nights) & stylish modern design hotel in Canggu (2 nights).',
    transportation: 'Private AC Toyota HiAce / Alphard throughout Bali.',
    meetingPoint: 'Ngurah Rai International Airport (DPS) Arrivals Hall.',
    packingList: [
      'Passport valid for at least 6 months with 2 blank pages',
      'Tropical resort wear, linens, swimwear & sunglasses',
      'Universal power adapter',
      'Comfortable walking shoes for Nusa Penida cliffs'
    ],
    faqs: [
      {
        question: 'Do Indian passport holders get Visa on Arrival in Bali?',
        answer: 'Yes! Indian travellers get a 30-day Visa on Arrival (VoA) at Bali airport or online e-VoA. It takes just 10 minutes.'
      },
      {
        question: 'Can vegetarian/Jain food be arranged?',
        answer: 'Absolutely! Bali is filled with incredible vegetarian, vegan, and Indian dining options, and we cater to dietary preferences throughout.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'trip-7',
    slug: 'spiti-valley-circuit',
    title: 'Spiti Valley 4x4 Overland Expedition',
    tagline: 'Highest post office, starry Dhankar monastery & Chandratal moon lake',
    destination: 'Kaza, Tabo & Chandratal, Spiti Valley',
    region: 'Himachal',
    category: 'Road Trips',
    duration: '8 Days / 7 Nights',
    durationDays: 8,
    startingPrice: 24999,
    originalPrice: 28999,
    startingCity: ['Delhi', 'Chandigarh'],
    departureDate: '2026-10-25',
    departureDateFormatted: '25 Oct 2026',
    nextBatches: ['25 Oct 2026', '08 Nov 2026'],
    totalSeats: 12,
    availableSeats: 2,
    fitnessLevel: 'Challenging',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The holy grail of Indian road trips. Journey through high-altitude passes, ancient 1,000-year-old monasteries perched on cliff edges, send a postcard from the world’s highest post office at Hikkim, and camp near the turquoise moon lake of Chandratal.',
    highlights: ['Visit Hikkim (world’s highest post office) & Komic village', '1,000-year-old Tabo & Key Monasteries', 'Chandratal Lake camping & Milky Way astrophotography'],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla/Narkanda', description: 'Scenic drive through apple country.', highlights: ['Hatu peak view'], mealsIncluded: 'Dinner', stayType: 'Hotel' },
      { day: 2, title: 'Narkanda to Kalpa & Kinnaur Kailash view', description: 'Enter Kinnaur valley.', highlights: ['Suicide point Kalpa'], mealsIncluded: 'Breakfast & Dinner', stayType: 'Hotel' },
      { day: 3, title: 'Kalpa to Kaza via Nako Lake', description: 'Enter the Middle Land.', highlights: ['Nako lake', 'Gue Mummy'], mealsIncluded: 'Breakfast & Dinner', stayType: 'Homestay' }
    ],
    inclusions: ['4x4 SUV/Tempo Traveller transport', 'All homestays & hotels', 'Breakfast & dinner', 'Oxygen cylinder support'],
    exclusions: ['Fuel for personal bikes (if riding)', 'Personal expenses'],
    accommodation: 'Authentic Spitian village homestays and alpine camps.',
    transportation: '4x4 Force Urbania / Scorpio / Tempo Traveller.',
    meetingPoint: 'Delhi Kashmiri Gate ISBT at 6:00 PM.',
    packingList: ['Thermal inners', 'Down jacket (-10C rated)', 'Lip balm & high SPF sunscreen'],
    faqs: [{ question: 'Is AMS (altitude sickness) a concern?', answer: 'We follow a gradual acclimatization route through Kinnaur so everyone adjusts safely.' }],
    isFeatured: false
  },
  {
    id: 'trip-8',
    slug: 'harishchandragad-trek',
    title: 'Harishchandragad & Konkan Kada Cliff',
    tagline: 'Sahyadri cliff edge, ancient caves, sea of clouds & night camping',
    destination: 'Ahmednagar / Junnar, Maharashtra',
    region: 'Maharashtra',
    category: 'Weekend Getaway',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    startingPrice: 2999,
    originalPrice: 3599,
    startingCity: ['Pune', 'Mumbai'],
    departureDate: '2026-10-24',
    departureDateFormatted: '24 Oct 2026',
    nextBatches: ['24 Oct 2026', '31 Oct 2026', '07 Nov 2026', '14 Nov 2026'],
    totalSeats: 20,
    availableSeats: 7,
    fitnessLevel: 'Moderate',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'],
    overview: 'The most iconic cliff in the Western Ghats. Stand on the horseshoe edge of Konkan Kada looking down 2,000 feet into Konkan plains, explore the ancient rock-cut Kedareshwar cave temple with its single standing pillar, and camp under the starry night sky.',
    highlights: ['Stand at Konkan Kada vertical cliff edge', 'Explore Kedareshwar Cave & Harishchandra temple', 'Authentic village pithla bhakri meal'],
    itinerary: [
      { day: 1, title: 'Depart Pune/Mumbai & Ascend to Fort Top', description: 'Pickup by AC bus, trek up via Khireshwar or Pachnai route. Sunset at Konkan Kada.', highlights: ['Konkan Kada sunset', 'Campsite bonfire'], mealsIncluded: 'Lunch & Dinner', stayType: 'Alpine Tents' },
      { day: 2, title: 'Sunrise, Kedareshwar Cave & Return', description: 'Early morning sunrise, visit ancient temple, and descend for evening return.', highlights: ['Kedareshwar temple', 'Descent to base village'], mealsIncluded: 'Breakfast & Lunch', stayType: 'Departure' }
    ],
    inclusions: ['AC Bus pickup and drop from Pune (FC Road / Wakad) & Mumbai (Dadar / Thane)', 'Tent stay with foam mattress', 'All 4 meals prepared by local villagers', 'Experienced trek captains & first aid'],
    exclusions: ['Personal mineral water bottles', 'Emergency porterage'],
    accommodation: 'Tents on fort plateau with clean village toilet facilities nearby.',
    transportation: 'Non-AC / AC Pushback Bus from Pune & Mumbai.',
    meetingPoint: 'Pune: Goodluck Cafe, FC Road (10:00 PM Friday) | Mumbai: Dadar Swami Narayan Temple (10:30 PM Friday).',
    packingList: ['Trekking shoes with solid grip', '2 litres water bottle', 'Torch', 'Warm jacket for night'],
    faqs: [{ question: 'Are washrooms available at the fort?', answer: 'Yes, basic village washrooms are available at Pachnai and near temple base.' }],
    isFeatured: false
  }
];
