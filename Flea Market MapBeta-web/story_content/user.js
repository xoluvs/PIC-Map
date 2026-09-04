window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // Initialize the global directory on the window object once
window.vendorDirectory = {
  1: {
    stateVar: "stateBooth1",
    boothNumber: 1,
    businessName: "Backwoods Design Wrx",
    ownerName: "Korrina Murray",
    bio: "",
    phone: "253-227-9046",
    email: "cjwe0702@yahoo.com",
    website: "http://Backwoodsdesignwrx.com",
    socialLink1: "https://www.facebook.com/backwoodsvinylandcrafts",
    socialLink2: "",
    socialLink3: "",
    categories: ["clothing", "political", "other"]
  },
  2: {
    stateVar: "stateBooth2", //
    boothNumber: 2, //
    businessName: "Tony's Ynot Italian Ice",
    ownerName: "Tony Christen",
    bio: "",
    phone: "(360) 880-2748",
    email: "ynot_tony_785@msn.com",
    website: "",
    socialLink1: "https://www.facebook.com/TonysYnotItalianIce",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  3: {
    stateVar: "stateBooth3", //
    boothNumber: 3, //
    businessName: "Timber River Connections Older Adult Centers",
    ownerName: "",
    bio: "Looking for cheap eats at the Packwood Flea Market? Load up on Loaded Baked Potatoes, Loaded Nachos or Hot Dogs at the Packwood Sr Center Flea Market Booth, 11a-6p, Fri-Sun Labor Day Weekend, 9/4-9/6. We will also be selling handmade baked goods, pie a la mode, shopping bags and much more. Vendors inside as well. Eat in our air conditioned dining room. Our booth entrance will be on the South side of the building this year, next to Tony's YNot Italian Ice. All proceeds from our booth support the Packwood Sr Center, helping us bring nutritious meals to seniors M-Th, 9a-3p. ",
    phone: "360-494-6331",
    email: "victoria@timberriverconnections.org",
    website: "https://timberriverconnections.org/",
    socialLink1: "https://www.facebook.com/lewiscountyseniors.org",
    socialLink2: "",
    socialLink3: "",
    categories: ["food", "other",]
  },
  4: {
    stateVar: "stateBooth4", //
    boothNumber: 4, //
    businessName: "Mimi’s Ice cream",
    ownerName: "Duane and Liza Stephens",
    bio: "We are a pre-packaged ice cream truck with around 45 pre-packaged ice cream , Slush Puppies, Dippin Dots , Candy, Chips and Drinks ",
    phone: "206-459-3968",
    email: "Liza.stephens@gmail.com",
    website: "",
    socialLink1: "https://www.facebook.com/mimisicecreamtruck",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  5: {
    stateVar: "stateBooth5", //
    boothNumber: 5, //
    businessName: "Rogue & Rye",
    ownerName: "Mandy and Thomas Battles",
    bio: "Rogue & Rye is a Portland-based shop filled with goods for curious people and everyday adventures. We bring together tabletop games and RPGs, art and paper goods, jewelry, outdoor-inspired finds, specialty foods, and wonderfully unexpected treasures from independent makers and artists. Come find something to play, make, give, wear, or take along for the ride. ",
    phone: "",
    email: "info@roguerye.com",
    website: "https://roguerye.com",
    socialLink1: "https://www.instagram.com/rogue_and_rye/?hl=en",
    socialLink2: "",
    socialLink3: "",
    categories: ["outdoors", "games", "antiques", "jewelry"]
  },
  6: {
    stateVar: "stateBooth6", //
    boothNumber: 6, //
    businessName: "",
    ownerName: "Ron Blankenship",
    bio: "7.5 lbs bags of ice. ",
    phone: "360-508-0470",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  7: {
    stateVar: "stateBooth7", //
    boothNumber: 7, //
    businessName: "Kreative Kettle Corn",
    ownerName: "",
    bio: "",
    phone: "360-349-7130",
    email: "kreativekettlecorn2024@gmail.com",
    website: "",
    socialLink1: "https://www.facebook.com/profile.php?id=61559580398193",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  8: {
    stateVar: "stateBooth8", //
    boothNumber: 8, //
    businessName: "Spirit Guide Wellness",
    ownerName: "Charlene Sagiao",
    bio: "Spirit Guide Wellness is a woman-owned and operated company proudly serving our community since 2019. We manufacture high-quality, hemp-derived cannabinoid wellness products thoughtfully crafted to work naturally with the body and support overall well-being. Our mission is simple: to make trusted, quality wellness products more accessible while helping our customers discover natural options that fit their individual needs. Every product is made with care and a commitment to quality you can feel good about. But we’re more than wellness products! Our shop also offers a unique selection of metaphysical treasures, including crystals, one-of-a-kind journals, sage, Palo Santo, herbs, spiritual tools, gifts, and fun novelties. Whether you’re looking to support your wellness journey, add to your crystal collection, or simply find something a little different, there’s always something new to discover. Come visit us and experience the welcoming, down-to-earth atmosphere of Spirit Guide Wellness.",
    phone: "360-916-1332",
    email: "info@spiritguidewellness.com",
    website: "spiritguidewellness.com",
    socialLink1: "https://www.facebook.com/spiritguidewellness",
    socialLink2: "",
    socialLink3: "",
    categories: ["health"]
  },
  9: {
    stateVar: "stateBooth9", //
    boothNumber: 9, //
    businessName: "",
    ownerName: "", //knowles
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  10: {
    stateVar: "stateBooth10", //
    boothNumber: 10, //
    businessName: "",
    ownerName: "", //aber
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "games"]
  },
  11: {
    stateVar: "stateBooth11", //
    boothNumber: 11, //
    businessName: "Vintage Rescue",
    ownerName: "Ray Barker / Jack Reese",
    bio: "Were a picker team with 60 years of combined experience. Collectors and resellers of cast iron, sports cards and everything else we can't live without. Please check out our high end collectables and always stocked $1 dollar tables",
    phone: "(509)901-1415",
    email: "raybarker2008@comcast.net",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["antiques", "clothing", "toys", "games"]
  },
  12: {
    stateVar: "stateBooth12", //
    boothNumber: 12, //
    businessName: "",
    ownerName: "", //Seth Meyers
    bio: "licorice",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  13: {
    stateVar: "stateBooth13", //
    boothNumber: 13, //
    businessName: "Js Novelties and The Emerald Whimsy",
    ownerName: "Janice Smith and Monika Linn",
    bio: " Handmade, original stained glass.",
    phone: "(253)468-9916",
    email: "Njcowgirl62@gmail.com / TheEmeraldWhimsy@aol.com",
    website: "",
    socialLink1: "https://www.instagram.com/akinomneelie?igsi=MWMzNzRyejd3dW5iZg==",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "glass", "metal" ]
  },
  14: {
    stateVar: "stateBooth14", //
    boothNumber: 14, //
    businessName: "",
    ownerName: "Mike Martinez",
    bio: "",
    phone: "(360)280-7362",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["automotive", "outdoor", "books", "household"]
  },
  15: {
    stateVar: "stateBooth15", //
    boothNumber: 15, 
    businessName: "",
    ownerName: "", //Reyes
    bio: "plants",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["outdoor"]
  },
  16: {
    stateVar: "stateBooth16", //
    boothNumber: 16, //
    businessName: "",
    ownerName: "", //Adams, J
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "outdoor"]
  },
  17: {
    stateVar: "stateBooth17", //
    boothNumber: 17, //
    businessName: "",
    ownerName: "", //Doyle
    bio: "Dan, Denise and Loretta will be bringing loads of vintage, antiques, collectibles, clothing and whatever else we can scour up to find new homes. We're long-time vendors roughly 20 years in this location. The Packwood fleamarket is the highlight of the year and we look forward to seeing everyone!",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "household"]
  },
  18: {
    stateVar: "stateBooth18", //
    boothNumber: 18, //
    businessName: "",
    ownerName: "", //Halterman, c
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "household"]
  },
  19: {
    stateVar: "stateBooth19", //
    boothNumber: 19, //
    businessName: "",
    ownerName: "", //guzman
    bio: "Mexican foods",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  20: {
    stateVar: "stateBooth20", //
    boothNumber: 20, //
    businessName: "",
    ownerName: "", //Lund
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  21: {
    stateVar: "stateBooth21", //
    boothNumber: 21, //
    businessName: "Bob's Freaking Nuts",
    ownerName: "", //Lenninger
    bio: "Jerky",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  22: {
    stateVar: "stateBooth22", //
    boothNumber: 22, //
    businessName: "",
    ownerName: "", //Halterman, J
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  23: {
    stateVar: "stateBooth23", //
    boothNumber: 23, //
    businessName: "",
    ownerName: "", //Sumner
    bio: "Soap and Flavored Nuts",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food", "household"]
  },
  24: {
    stateVar: "stateBooth24", //
    boothNumber: 24, //
    businessName: "",
    ownerName: "", //walker, D
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  25: {
    stateVar: "stateBooth25", //
    boothNumber: 25, //
    businessName: "OOKKEEs",
    ownerName: "David & Carol Schlottmann", //schlottsmann
    bio: "We have been setting up for the Memorial Day and the Labor Day flea markets for over 20 years, enjoying talking to customers and providing reasonably priced pop and water.  It’s always a fun weekend.",
    phone: "(360)352-8622",
    email: "ookkees@comcast.net",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "books", "antiques", "household"]
  },
  26: {
    stateVar: "stateBooth26", //
    boothNumber: 26, //
    businessName: "Sparked Metal Works",
    ownerName: "Josh & Amber Bingisser", //bingisser
    bio: "Sparked Metal Works creates handcrafted plasma‑cut metal art built for people who value durability, craftsmanship, and American‑made quality. From custom signs to fire rings, every piece is designed and fabricated in the Pacific Northwest with precision, pride, and a whole lot of sparks.",
    phone: "",
    email: "josh@sparkedmetalworks.com",
    website: "https://www.sparkedmetalworks.com ",
    socialLink1: "www.instagram.com/sparkedmetalworks",
    socialLink2: "www.facebook.com/sparkedmetalworks",
    socialLink3: "www.youTube.com/@sparkedmetalworks",
    categories: ["other", "metal", "household", "outdoors"]
  },
  27: {
    stateVar: "stateBooth27", //
    boothNumber: 27, //
    businessName: "",
    ownerName: "", //smith, L
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food", "household"]
  },
  28: {
    stateVar: "stateBooth28", //
    boothNumber: 28, //
    businessName: "",
    ownerName: "", //sullivan, b
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["wood"]
  },
  29: {
    stateVar: "stateBooth29", //
    boothNumber: 29, //
    businessName: "",
    ownerName: "", //wiszhiewski
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "toys"]
  },
  30: {
    stateVar: "stateBooth30", //
    boothNumber: 30, //
    businessName: "",
    ownerName: "", //zeutchel
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["wood"]
  },
  31: {
    stateVar: "stateBooth31", //
    boothNumber: 31, //
    businessName: "",
    ownerName: "", //young, jerome
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  32: {
    stateVar: "stateBooth32", //
    boothNumber: 32, //
    businessName: "",
    ownerName: "", //undang
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  33: {
    stateVar: "stateBooth33", //
    boothNumber: 33, //
    businessName: "Cleveland Merchantile",
    ownerName: "", //holderman
    bio: "Antique, vintage and name brand thrift",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "antiques", "clothing"]
  },
  34: {
    stateVar: "stateBooth34", //
    boothNumber: 34, //
    businessName: "",
    ownerName: "", //walters
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "antiques"]
  },
  35: {
    stateVar: "stateBooth35", //
    boothNumber: 35, //
    businessName: "",
    ownerName: "", //parker, c
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "household"]
  },
  36: {
    stateVar: "stateBooth36", //
    boothNumber: 36, //
    businessName: "Mobile Mermaid Espresso LLC",
    ownerName: "Stephanie Rouse", //Rouse
    bio: "Experience the magical enchantment of Mobile Mermaid Espresso, a captivating coffee stand that travels across Lewis and Cowlitz Counties, with a focus on providing bewitching beverages with a vibrant mermaid theme. From festivals to events to private gatherings and markets, Mobile Mermaid has you covered, offering a unique and immersive coffee experience that will transport you to a dazzling realm.",
    phone: "360-520-9127",
    email: "",
    website: "https://www.mobilemermaid.biz/",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  37: {
    stateVar: "stateBooth37", //
    boothNumber: 37, //
    businessName: "",
    ownerName: "", //severson
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "tools"]
  },
  38: {
    stateVar: "stateBooth38", //
    boothNumber: 38, //
    businessName: "",
    ownerName: "", //pogue
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "wood"]
  },
  39: {
    stateVar: "stateBooth39", //
    boothNumber: 39, //
    businessName: "",
    ownerName: "", //price
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  40: {
    stateVar: "stateBooth40", //
    boothNumber: 40, //
    businessName: "",
    ownerName: "Robert Livington", //livingston
    bio: "Large quantity of coins and Jewelry silver and gold.",
    phone: "(360)742-4160",
    email: "robertlivingstoncinema@gmail.com",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "antiques", "jewelry"]
  },
  41: {
    stateVar: "stateBooth41", //
    boothNumber: 41, //
    businessName: "",
    ownerName: "", //bennett- 4 square 
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["religion"]
  },
  42: {
    stateVar: "stateBooth42", //
    boothNumber: 42, //
    businessName: "",
    ownerName: "", //Bogynska
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "antiques"]
  },
  43: {
    stateVar: "stateBooth43", //
    boothNumber: 43, //
    businessName: "Tupperware",
    ownerName: "Trena Grote", //grote 
    bio: "There's Only One! Tupperware",
    phone: "425-269-3654",
    email: "tuppertrena@gmail.com",
    website: "https://my.tupperware.com/TGrote",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["household"]
  },
  44: {
    stateVar: "stateBooth44", //
    boothNumber: 44, //
    businessName: "",
    ownerName: "", //hamlen
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  45: {
    stateVar: "stateBooth45", //
    boothNumber: 45, //
    businessName: "",
    ownerName: "", //manso
    bio: "Press on nails",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  46: {
    stateVar: "stateBooth46", //
    boothNumber: 46, //
    businessName: "",
    ownerName: "", //berger
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["political"]
  },
  47: {
    stateVar: "stateBooth47", //
    boothNumber: 47, //
    businessName: "",
    ownerName: "", //cantrell
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  48: {
    stateVar: "stateBooth48", //
    boothNumber: 48, //
    businessName: "",
    ownerName: "", //Millette/Hurley
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["jewelry"]
  },
  49: {
    stateVar: "stateBooth49", //
    boothNumber: 49, //
    businessName: "",
    ownerName: "", //brislin
    bio: "Plants, suncatchers and other glass work.",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["outdoors", "glass"]
  },
  50: {
    stateVar: "stateBooth50", //
    boothNumber: 50, //
    businessName: "",
    ownerName: "", //english, p
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["antiques"]
  },
  51: {
    stateVar: "stateBooth51", //
    boothNumber: 51, //
    businessName: "Tacoma Treasures ",
    ownerName: "Marcella Hamilton", //hamilton
    bio: "Just a collector who is driven by a passion to treasure hunt!",
    phone: "(253)-363-0543",
    email: "",
    website: "https://ebay.us/m/sfqgW6",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["antiques", "tools", "outdoor", "other"]
  },
  52: {
    stateVar: "stateBooth52", //
    boothNumber: 52, //
    businessName: "Wired for Sun",
    ownerName: "Debra Coop", //coop
    bio: "Sun Catchers",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "glass"]
  },
  53: {
    stateVar: "stateBooth53", //
    boothNumber: 53, //
    businessName: "",
    ownerName: "", //lebold
    bio: "We are avid collectors of all kinds of things. At this sale we will have loads of costume jewelry, collectibles, glass, household items and more. We have some brand new Charles Viancin Silicon kitchen products such as lids, ice cube trays and sip sets. We need to clear out our house and storage so we are motivated sellers. We will be pricing things to sell and we will accept reasonable offers for bundle deals. ",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "jewelry", "glass"]
  },
54: {
    stateVar: "stateBooth54", //
    boothNumber: 54, //
    businessName: "",
    ownerName: "", //patrick
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "household"]
  },
55: {
    stateVar: "stateBooth55", //
    boothNumber: 55, //
    businessName: "The Hippie Chick",
    ownerName: "Carla Palpalatok", //palpalatok
    bio: "Curating and rehoming preloved garments and forgotten treasures. I believe every piece has a past life and a future story. Explore my collection of handpicked vintage, retro style, and unique boho finds waiting for their next adventure.",
    phone: "",
    email: "palpal69pc@yahoo.com",
    website: "",
    socialLink1: "https://www.instagram.com/thehippiechick_spokane?igsi=MTBmNHl2Mjd4OGQwcw%3D%3D&utm_source=qr",
    socialLink2: "",
    socialLink3: "",
    categories: ["clothing"]
  },
  56: {
    stateVar: "stateBooth56", //
    boothNumber: 56, //
    businessName: "Sunnie's Treasures",
    ownerName: "Sunie and Brad Sanchez", //sanchez
    bio: "We are a husband-and-wife team of passionate collectors and treasure scavengers who do the hunting so you can find the rewards. Our booth is a carefully curated haven full of unique, nostalgic, and rare pieces. Stop by to explore our handpicked collection of vintage goods, retro collectibles, and rare flat bill hats. We also feature high-end handbags from Coach, Michael Kors, and Patricia Nash, alongside quality footwear from Freebird, Ugg, and more. When we aren't chasing down incredible finds, we work full-time as a healthcare IT training manager and a union pipefitter. We love turning our passion into your next favorite find. Come browse our collection and discover a treasure today.",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["antiques", "clothing", "other"]
  },
  57: {
    stateVar: "stateBooth57", //
    boothNumber: 57, //
    businessName: "",
    ownerName: "", //sheets
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  58: {
    stateVar: "stateBooth58", //
    boothNumber: 58, //
    businessName: "",
    ownerName: "", //vanbroklin
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  59: {
    stateVar: "stateBooth59", //
    boothNumber: 59, //
    businessName: "",
    ownerName: "", //winder
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  60: {
    stateVar: "stateBooth60", //
    boothNumber: 60, //
    businessName: "Envy women’s clothing boutique",
    ownerName: "Shannon Thompson", //S. Thompson
    bio: "",
    phone: "(253)-226-1332",
    email: "envytacoma@gmail.com",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["clothing"]
  },
  61: {
    stateVar: "stateBooth61", //
    boothNumber: 61, //
    businessName: "",
    ownerName: "", //pettit
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "automotive", "glass", "jewelry"]
  },
  62: {
    stateVar: "stateBooth62", //
    boothNumber: 62, //
    businessName: "",
    ownerName: "", //T. Thompson
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["metal"]
  },
  63: {
    stateVar: "stateBooth63", //
    boothNumber: 63, //
    businessName: "Happy Piggy",
    ownerName: "", //Pyeatt
    bio: "",
    phone: "(360) 832-6483",
    email: "",
    website: "",
    socialLink1: "https://www.facebook.com/profile.php?id=61576682463369",
    socialLink2: "https://www.instagram.com/happy_piggy_eatonville/?hl=en",
    socialLink3: "",
    categories: ["food"]
  },
  64: {
    stateVar: "stateBooth64", //
    boothNumber: 64, //
    businessName: "El Gallo Catering",
    ownerName: "", //Y Martinez
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["food"]
  },
  65: {
    stateVar: "stateBooth65", //
    boothNumber: 65, //
    businessName: "Valley and Vine Co.",
    ownerName: "Casey Huard & Meagan Pena", //Valley and Vine
    bio: "We are an event rental and experience business. It’s our mission to make your next event absolutely memorable. We offer a variety of rentals and services to make your social gathering unique and unforgettable. At this event we will be offering our bloom bar, as well as a patch bar for customizing tote bags and other items. These are a glimpse of what we can offer for events/parties. ",
    phone: "509-494-9924",
    email: "events@valleyandvineco.com",
    website: "",
    socialLink1: "https://www.instagram.com/yakimavalleyandvineco/",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  66: {
    stateVar: "stateBooth66", //
    boothNumber: 66, //
    businessName: "",
    ownerName: "", //Friedman
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["clothing"]
  },
  67: {
    stateVar: "stateBooth67", //
    boothNumber: 67, //
    businessName: "",
    ownerName: "", //McIntosh
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["Jewelry"]
  },
  68: {
    stateVar: "stateBooth68", //
    boothNumber: 68, //
    businessName: "",
    ownerName: "", //Amgulo
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "toys"]
  },
  69: {
    stateVar: "stateBooth69", //
    boothNumber: 69, //
    businessName: "",
    ownerName: "", //lacaste
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other", "antiques"]
  },
  70: {
    stateVar: "stateBooth70", //
    boothNumber: 70, //
    businessName: "",
    ownerName: "", //
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  71: {
    stateVar: "stateBooth71", //
    boothNumber: 71, //
    businessName: "",
    ownerName: "", //
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },
  72: {
    stateVar: "stateBooth72", //
    boothNumber: 72, //
    businessName: "",
    ownerName: "", //
    bio: "",
    phone: "",
    email: "",
    website: "",
    socialLink1: "",
    socialLink2: "",
    socialLink3: "",
    categories: ["other"]
  },

  100: {
    stateVar: "stateBooth100",
    boothNumber: 100,
    businessName: "Restrooms",
    ownerName: "Trackside Sanitation LLC",
    bio: "Trackside Sanitation is a local, family-owned portable sanitation and septic company known for clean, fresh, well-maintained portable restrooms and dependable service. When you gotta go, go Trackside!",
    phone: "360-523-8579",
    email: "info@tracksidesanitation.com",
    website: "https://tracksidesanitation.com/",
    socialLink1: "https://www.facebook.com/profile.php?id=61564857803518",
    socialLink2: "https://g.page/r/CTpjK3Z7s0MOEB0/review",
    socialLink3: "",
    categories: ["restrooms"]
  },
  101: {
    stateVar: "stateBooth101",
    boothNumber: 101,
    businessName: "Packwood Improvement Club",
    ownerName: "",
    bio: "Non-profit and home to KVRY Packwood 89.1FM",
    phone: "360-747-7740",
    email: "packwoodimprovementclub@gmail.com",
    website: "https://packwoodimprovementclub.com",
    socialLink1: "https://www.facebook.com/PackwoodImprovement",
    socialLink2: "",
    socialLink3: "",
    categories: ["staff", "medical"]
  },
 
  // Add remaining booths as they register: 5: { ... }, 6: { ... }, up to 120
};

}

window.Script2 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script3 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script4 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script5 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script6 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script7 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script8 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script9 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script10 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script11 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script12 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script13 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script14 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script15 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script16 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script17 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script18 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script19 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script20 = function()
{
  const player = GetPlayer();
const directory = window.vendorDirectory || (window.parent && window.parent.vendorDirectory) || {};

// 1. Reset all 21 category variables so previous category filters do not persist
const categoryList = [
  "antiques", "automotive", "books", "clothing", "food", 
  "games", "glass", "health", "household", "jewelry", 
  "medical", "metal", "other", "outdoors", "political", 
  "religion", "restrooms", "staff", "tools", "toys", "wood"
];
categoryList.forEach(cat => player.SetVar(cat, false));

// 2. Read name search input
const rawQuery = player.GetVar("businessOrOwnerName") || player.GetVar("searchQuery") || "";
const searchQuery = rawQuery.toLowerCase().trim();
const isFiltering = searchQuery.length > 0;

// 3. Update booth states (1 to 120)
for (let i = 1; i <= 120; i++) {
  const vendor = directory[i];
  const stateVar = (vendor && vendor.stateVar) ? vendor.stateVar : `stateBooth${i}`;

  if (!isFiltering) {
    player.SetVar(stateVar, "Normal");
    continue;
  }

  if (!vendor) {
    player.SetVar(stateVar, "Not Searched");
    continue;
  }

  const business = (vendor.businessName || "").toLowerCase();
  const owner = (vendor.ownerName || "").toLowerCase();
  const bio = (vendor.bio || "").toLowerCase();

  const isMatch = (business && business.includes(searchQuery)) ||
                  (owner && owner.includes(searchQuery)) ||
                  (bio && bio.includes(searchQuery));

  player.SetVar(stateVar, isMatch ? "Searched" : "Not Searched");
}
}

window.Script21 = function()
{
  const player = GetPlayer();
const directory = window.vendorDirectory || (window.parent && window.parent.vendorDirectory) || {};

// 1. Reset text search inputs so previous name searches do not persist
player.SetVar("businessOrOwnerName", "");
player.SetVar("searchQuery", "");

// 2. Evaluate active category checkboxes
const categoryList = [
  "antiques", "automotive", "books", "clothing", "food", 
  "games", "glass", "health", "household", "jewelry", 
  "medical", "metal", "other", "outdoors", "political", 
  "religion", "restrooms", "staff", "tools", "toys", "wood"
];

const activeCategories = categoryList.filter(cat => player.GetVar(cat) === true);
const isFiltering = activeCategories.length > 0;

// 3. Update booth states (1 to 120)
for (let i = 1; i <= 120; i++) {
  const vendor = directory[i];
  const stateVar = (vendor && vendor.stateVar) ? vendor.stateVar : `stateBooth${i}`;

  if (!isFiltering) {
    player.SetVar(stateVar, "Normal");
    continue;
  }

  if (!vendor) {
    player.SetVar(stateVar, "Not Searched");
    continue;
  }

  const vendorCategories = (vendor.categories || []).map(c => c.toLowerCase());
  const matchesCategory = activeCategories.some(cat => vendorCategories.includes(cat));

  player.SetVar(stateVar, matchesCategory ? "Searched" : "Not Searched");
}
}

window.Script22 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script23 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script24 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script25 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script26 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script27 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script28 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script29 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script30 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script31 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script32 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script33 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script34 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script35 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script36 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script37 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script38 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script39 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script40 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script41 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script42 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script43 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script44 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script45 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script46 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script47 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script48 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script49 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script50 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script51 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script52 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script53 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script54 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script55 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script56 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script57 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script58 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script59 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script60 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script61 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script62 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script63 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script64 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script65 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script66 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script67 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script68 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script69 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script70 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script71 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script72 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script73 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script74 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script75 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script76 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script77 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script78 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script79 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script80 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script81 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script82 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script83 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script84 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script85 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script86 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script87 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script88 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script89 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script90 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script91 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script92 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script93 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script94 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script95 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script96 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script97 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script98 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script99 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script100 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script101 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script102 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script103 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script104 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script105 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script106 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script107 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script108 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script109 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script110 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script111 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script112 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script113 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script114 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script115 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script116 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script117 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script118 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script119 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script120 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script121 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script122 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script123 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script124 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script125 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script126 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script127 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script128 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script129 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script130 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script131 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script132 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script133 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script134 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script135 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script136 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script137 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script138 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script139 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script140 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script141 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script142 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script143 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script144 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script145 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script146 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script147 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script148 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script149 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script150 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script151 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script152 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script153 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script154 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script155 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script156 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script157 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script158 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script159 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script160 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script161 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script162 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script163 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script164 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script165 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script166 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script167 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script168 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script169 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script170 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script171 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script172 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script173 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script174 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script175 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script176 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script177 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script178 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script179 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script180 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script181 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script182 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script183 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script184 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script185 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script186 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script187 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script188 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script189 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script190 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script191 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script192 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script193 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script194 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script195 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script196 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script197 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script198 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script199 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script200 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script201 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script202 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script203 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script204 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script205 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script206 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script207 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script208 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script209 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script210 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script211 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script212 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script213 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script214 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script215 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script216 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script217 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script218 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script219 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script220 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script221 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script222 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script223 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script224 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script225 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script226 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script227 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script228 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script229 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script230 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script231 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script232 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script233 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script234 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script235 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script236 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script237 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script238 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script239 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script240 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script241 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script242 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script243 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script244 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script245 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script246 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script247 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script248 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script249 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script250 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script251 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script252 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script253 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script254 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script255 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script256 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script257 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script258 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script259 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script260 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script261 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script262 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script263 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script264 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script265 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script266 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script267 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script268 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script269 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script270 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script271 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script272 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script273 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script274 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script275 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script276 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script277 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script278 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script279 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script280 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script281 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script282 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script283 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script284 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script285 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script286 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script287 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script288 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script289 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script290 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script291 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script292 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script293 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script294 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script295 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script296 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script297 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script298 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script299 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script300 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script301 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script302 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script303 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script304 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script305 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script306 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script307 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script308 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script309 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script310 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script311 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script312 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script313 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script314 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script315 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script316 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script317 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script318 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script319 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script320 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script321 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script322 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script323 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script324 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script325 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script326 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script327 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script328 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script329 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script330 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script331 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script332 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script333 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script334 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script335 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script336 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script337 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script338 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script339 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script340 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script341 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script342 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script343 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script344 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script345 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script346 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script347 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script348 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script349 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script350 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script351 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script352 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script353 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script354 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script355 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script356 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script357 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script358 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script359 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script360 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script361 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script362 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script363 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script364 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script365 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script366 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script367 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script368 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script369 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script370 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script371 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script372 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script373 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script374 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script375 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script376 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script377 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script378 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script379 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script380 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script381 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script382 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script383 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script384 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script385 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script386 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script387 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script388 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script389 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script390 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script391 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script392 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script393 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script394 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script395 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script396 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script397 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script398 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script399 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script400 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script401 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script402 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script403 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script404 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script405 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script406 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script407 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script408 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script409 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script410 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script411 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script412 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script413 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script414 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script415 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script416 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script417 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script418 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script419 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script420 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script421 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script422 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script423 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script424 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script425 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script426 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script427 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script428 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script429 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script430 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script431 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script432 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script433 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script434 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script435 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script436 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script437 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script438 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script439 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script440 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script441 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script442 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script443 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script444 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script445 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script446 = function()
{
  const player = GetPlayer();
const activeBoothNum = player.GetVar("activeBoothNumber");
const directory = window.vendorDirectory || {};

// Retrieve vendor record or provide fallback
const vendor = directory[activeBoothNum] || {
  stateVar: `stateBooth${activeBoothNum}`,
  boothNumber: activeBoothNum,
  businessName: `Vendor Space #${activeBoothNum}`,
  ownerName: "Available / TBA",
  bio: "Vendor details will be announced soon.",
  phone: "",
  email: "",
  website: "",
  socialLink1: "",
  socialLink2: "",
  socialLink3: "",
  categories: []
};

// Set Storyline active variables
player.SetVar("activeBoothNumber", vendor.boothNumber || activeBoothNum);
player.SetVar("activeBusinessName", vendor.businessName || "");
player.SetVar("activeOwnerName", vendor.ownerName || "");
player.SetVar("activeBio", vendor.bio || "");
player.SetVar("activePhone", vendor.phone || "");
player.SetVar("activeEmail", vendor.email || "");
player.SetVar("activeWebsite", vendor.website || "");
player.SetVar("activeSocialLink1", vendor.socialLink1 || "");
player.SetVar("activeSocialLink2", vendor.socialLink2 || "");
player.SetVar("activeSocialLink3", vendor.socialLink3 || "");
player.SetVar("activeCategories", (vendor.categories || []).join(", "));
}

window.Script447 = function()
{
  const player = GetPlayer();

const linkVariables = [
  "activeWebsite",
  "activeSocialLink1",
  "activeSocialLink2",
  "activeSocialLink3"
];

linkVariables.forEach(varName => {
  const url = (player.GetVar(varName) || "").trim();

  if (url !== "") {
    const formattedUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : "https://" + url;

    player.SetVar(varName, formattedUrl);
  }
});
}

window.Script448 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeWebsite");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script449 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink1");


if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script450 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink2");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

window.Script451 = function()
{
  const player = GetPlayer();
const url = player.GetVar("activeSocialLink3");

if (url && url.trim() !== "") {
  window.open(url, "_blank");
}
}

};
