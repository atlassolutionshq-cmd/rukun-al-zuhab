export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory?: string;
  description?: string;
  image?: string;
}

export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'copper-system', name: 'Copper System' },
  { id: 'fiber-system', name: 'Fiber System' },
  { id: 'rack-system', name: 'Rack System' },
  { id: 'data-center-system', name: 'Data Center System' },
  { id: 'fiber', name: 'Fiber Optics' },
  { id: 'copper', name: 'Copper Networking' },
  { id: 'cabinets', name: 'Cabinets & Enclosures' },
  { id: 'tools', name: 'Tools & Testing' },
  { id: 'accessories', name: 'Fittings & Accessories' },
];

export const products: Product[] = [
  {
    "id": "cs1",
    "code": "AV-C3-UTP-IN",
    "name": "Category 3 Unshielded Twisted Pair (UTP) cable - Indoor",
    "category": "copper-system",
    "description": "AVAYO unshielded 2 to 200 insulated, color coded, copper wires twisted in to pairs, cabled together and over all jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-3-Unshielded-Twisted-Pair-(UTP)-cable-Indoor.png"
  },
  {
    "id": "cs2",
    "code": "AV-C3-UTP-OUT",
    "name": "Category 3 Unshielded Twisted Pair (UTP) cable - Outdoor",
    "category": "copper-system",
    "description": "AVAYO unshielded 2 to 400 insulated, color coded, copper wires twisted in to pairs, cabled together and tape wrapped, jelly filling and over all jacketed with PE compound.",
    "image": "/products/Category-3-Unshielded-Twisted-Pair-(UTP)-cable-Outdoor.png"
  },
  {
    "id": "cs3",
    "code": "AV-C5-UTP-IN",
    "name": "Category 5 Unshielded Twisted Pair (UTP) cable - Indoor",
    "category": "copper-system",
    "description": "AVAYO unshielded 2 to 200 insulated, color coded, copper wires twisted in to pairs, cabled together and over all jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-5-Unshielded-Twisted-Pair-(UTP)-cable-Indoor.png"
  },
  {
    "id": "cs4",
    "code": "AV-C5-UTP-OUT",
    "name": "Category 5 Unshielded Twisted Pair (UTP) cable - Out Door",
    "category": "copper-system",
    "description": "Unshielded 2 to 400 insulated, color coded, copper wires twisted in to pairs, cabled together and tape wrapped, jelly filling and over all jacketed with PE compound.",
    "image": "/products/Category-5-Unshielded-Twisted-Pair-(UTP)-cable-Out-Door.png"
  },
  {
    "id": "cs5",
    "code": "AV-C5E-UTP-CB",
    "name": "Category 5e Unshielded Twisted Pair (UTP) cable",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together around center filler and over all jacketed with PVC or with halogen free compound.",
    "image": ""
  },
  {
    "id": "cs6",
    "code": "AV-C5E-FTP-CB",
    "name": "Category 5e Foiled Twisted Pair (FTP) cable",
    "category": "copper-system",
    "description": "8 insulated 4 color coded, copper wires twisted in pairs cabled together around a center filler over all wrapped with an aluminum foil and then jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-5e-Foiled-Twisted-Pair-(FTP)-cable.png"
  },
  {
    "id": "cs7",
    "code": "AV-C6-UTP-CB",
    "name": "Category 6 Unshielded Twisted Pair (UTP) cable",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together around center filler and over all jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6-Unshielded-Twisted-Pair-(UTP)-cable.png"
  },
  {
    "id": "cs8",
    "code": "AV-C6-FTP-CB",
    "name": "Category 6 Foiled Twisted Pair (FTP) Cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs cabled together around a center filler over all wrapped with an aluminum foil and then jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6-Foiled-Twisted-Pair-(FTP)-Cable.png"
  },
  {
    "id": "cs9",
    "code": "AV-C6-FFTP-CB",
    "name": "Category 6 F/ Foiled Twisted Pair (FFTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together with a tin coated drain wire and over all wrapped with an aluminum foil and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6-F-Foiled-Twisted-Pair-(FFTP)-cable.png"
  },
  {
    "id": "cs10",
    "code": "AV-C6-SFTP-CB",
    "name": "Category 6 S/ Foiled Twisted Pair (S/FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together, over all wrapped with an aluminum foil and then covered with a tinned copper braid and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6A-S-Foiled-Twisted-Pair-(S-FTP)-cable.png"
  },
  {
    "id": "cs11",
    "code": "AV-C6A-UTP-CB",
    "name": "Category 6A Unshielded Twisted Pair (UTP) cable",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together around center filler and over all jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6A-Unshielded-Twisted-Pair-(UTP)-cable.png"
  },
  {
    "id": "cs12",
    "code": "AV-C6A-FFTP-CB",
    "name": "Category 6A F/Foiled Twisted Pair (F/FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together with a tin coated drain wire and over all wrapped with an aluminum foil and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6A-F-Foiled-Twisted-Pair-(F-FTP)-cable.png"
  },
  {
    "id": "cs13",
    "code": "AV-C6A-SFTP-CB",
    "name": "Category 6A S/Foiled Twisted Pair (S/FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together, over all wrapped with an aluminum foil and then covered with a tinned copper braid and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-6A-S-Foiled-Twisted-Pair-(S-FTP)-cable.png"
  },
  {
    "id": "cs14",
    "code": "AV-EC6A-FTP-CB",
    "name": "Enhanced Category 6A Foiled Twisted Pair (FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs cabled together with a rip cord, over all wrapped with an aluminum foil and jacketed with PVC or with halogen free compound.",
    "image": "/products/Enhanced-Category-6A-Foiled-Twisted-Pair-(FTP)-cable.png"
  },
  {
    "id": "cs15",
    "code": "AV-C7-SFTP-CB",
    "name": "Category 7 S/Foiled Twisted Pair (S/FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together, over all wrapped with an aluminum foil and then covered with a tinned copper braid and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-7-S-Foiled-Twisted-Pair-(S-FTP)-cable.png"
  },
  {
    "id": "cs16",
    "code": "AV-C7A-SFTP-CB",
    "name": "Category 7A S/Foiled Twisted Pair (S/FTP) cable",
    "category": "copper-system",
    "description": "AVAYO 8 insulated 4 color coded, copper wires twisted in pairs and individually foil shield for each pair, cabled together, over all wrapped with an aluminum foil and then covered with a tinned copper braid and jacketed with PVC or with halogen free compound.",
    "image": "/products/Category-7A-S-Foiled-Twisted-Pair-(S-FTP)-cable.png"
  },
  {
    "id": "cs17",
    "code": "AV-FP-KWL",
    "name": "Face Plates / Keystone Wall plates",
    "category": "copper-system",
    "description": "AVAYO face plates or keystone wall plates are made with rigid high quality plastic and have one to four ports. A keystone port is a standard hole used to mount various kinds of low voltage electrical jacks or optical connectors.",
    "image": "/products/Face-Plates-Keystone-Wall-plates.png"
  },
  {
    "id": "cs18",
    "code": "AV-C5E-UTP-KS",
    "name": "Category 5e UTP RJ 45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Category-5e-UTP-RJ-45-Key-Stone-Jack.png"
  },
  {
    "id": "cs19",
    "code": "AV-C5E-STP-KS",
    "name": "Category 5e STP RJ 45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO Fully shielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Category-5e-STP-RJ-45-Key-Stone-Jack.png"
  },
  {
    "id": "cs20",
    "code": "AV-C6-UTP-KS",
    "name": "Category 6 UTP RJ 45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates , patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/category-6-UTP-RJ-45-Key-Stone-Jack.png"
  },
  {
    "id": "cs21",
    "code": "AV-C6-UTP-MOD",
    "name": "Category 6 UTP Modular Insert",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 8P8C modular insert designed for fast and easy snap-in and out of face plates. These modules are designed in 180° formation to provide easier termination.",
    "image": "/products/Category-6-UTP-Modular-Insert.png"
  },
  {
    "id": "cs22",
    "code": "AV-C6-STP-KS",
    "name": "Category 6 STP RJ 45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO fully shielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Category-6-STP-RJ-45-Key-Stone-Jack.png"
  },
  {
    "id": "cs23",
    "code": "AV-C6A-UTP-KS",
    "name": "Category 6A UTP RJ 45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Category-6A-UTP-RJ-45-Key-Stone-Jack.png"
  },
  {
    "id": "cs24",
    "code": "AV-C6A-STP-KS",
    "name": "Category 6A STP key stone jack",
    "category": "copper-system",
    "description": "AVAYO fully shielded RJ 45 8P8C Key Stone Jack, designed for fast and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Category-6A-STP-key-stone-jack.png"
  },
  {
    "id": "cs25",
    "code": "AV-S-TL-KS",
    "name": "Shielded Tool Less RJ45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO fully shielded RJ 45 tool – less 8P8C Key Stone Jack, designed for fast termination of cables and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Shielded-Tool-Less-RJ45-Key-Stone-Jack.png"
  },
  {
    "id": "cs26",
    "code": "AV-U-TL-KS",
    "name": "Unshielded Tool Less RJ45 Key Stone Jack",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 tool – less 8P8C Key Stone Jack, designed for fast termination of cables and easy snap-in and out of face plates, patch panels and floor box outlets. These jacks are designed in 180° formation.",
    "image": "/products/Unshielded-Tool-Less-RJ45-Key-Stone-Jack.png"
  },
  {
    "id": "cs27",
    "code": "AV-C5E-UTP-PC",
    "name": "Category 5e UTP Modular Patch Cords",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together and over all jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-5e-UTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs28",
    "code": "AV-C5E-FTP-PC",
    "name": "Category 5e FTP Modular Patch Cords",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together over all foil shielded and jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-5e-FTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs29",
    "code": "AV-C6-UTP-PC",
    "name": "Category 6 UTP Modular Patch Cords",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together and over all jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-6-UTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs30",
    "code": "AV-C6-FTP-PC",
    "name": "Category 6 FTP Modular Patch Cords",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together over all foil shielded and jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-6-FTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs31",
    "code": "AV-C6A-UTP-PC",
    "name": "Category 6A UTP Modular Patch Cords",
    "category": "copper-system",
    "description": "AVAYO unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together and over all jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-6A-UTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs32",
    "code": "AV-C6A-FTP-PC",
    "name": "Category 6A FTP Modular Patch Cords",
    "category": "copper-system",
    "description": "Unshielded 8 insulated 4 color coded, copper wires twisted in pairs cabled together over all foiled shielded and over all jacketed with PVC or with halogen free compound. These patch cords are available in various lengths with RJ 45 terminations at both ends.",
    "image": "/products/Category-6A-FTP-Modular-Patch-Cords.png"
  },
  {
    "id": "cs33",
    "code": "AV-C5E-UTP-PP",
    "name": "Category 5e UTP Loaded Patch Panel",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 copper patch panel, used for equipment termination in telecommunication rooms, loaded with connecting modules for the entire ports and back interconnection by 110 type or krone type IDC.",
    "image": "/products/Category-5e-UTP-Loaded-Patch-Panel.png"
  },
  {
    "id": "cs34",
    "code": "AV-C5E-STP-PP",
    "name": "Category 5E STP Loaded Patch Panel",
    "category": "copper-system",
    "description": "AVAYO shielded RJ 45 copper patch panel, used for equipment termination in telecommunication rooms, loaded with connecting modules for the entire ports and back interconnection by 110 type or krone type IDC.",
    "image": "/products/Category-5E-STP-Loaded-Patch-Panel.png"
  },
  {
    "id": "cs35",
    "code": "AV-C6-UTP-PP",
    "name": "Category 6 UTP Loaded Patch Panel",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 copper patch panel, used for equipment termination in tele- communication rooms, loaded with connecting modules for the entire ports and back interconnection by 110 type or krone type IDC.",
    "image": "/products/Category-6-UTP-Loaded-Patch-Panel.png"
  },
  {
    "id": "cs36",
    "code": "AV-C6-STP-PP",
    "name": "Category 6 STP Modular Patch Panel",
    "category": "copper-system",
    "description": "AVAYO shielded RJ 45 copper patch panel, used for equipment termination in telecommunication rooms, loaded with connecting modules for the entire ports and back interconnection by 110 type or krone type IDC.",
    "image": "/products/Category-6-STP-Modular-Patch-Panel.png"
  },
  {
    "id": "cs37",
    "code": "AV-C6A-UTP-PP",
    "name": "Category 6A UTP Loaded Patch Panel",
    "category": "copper-system",
    "description": "AVAYO unshielded RJ 45 copper patch panel, used for equipment termination in telecommunication rooms, loaded with connecting modules for the entire ports and back interconnection by 110 type or krone type IDC.",
    "image": "/products/Category-6A-UTP-Loaded-Patch-Panel.png"
  },
  {
    "id": "cs38",
    "code": "AV-UL-PP",
    "name": "Unloaded Patch Panel",
    "category": "copper-system",
    "description": "AVAYO unloaded patch panel, used for equipment termination in telecommunication rooms by connecting with required modules ( cat 5e, cat6, cat 6a), for the required number of ports.",
    "image": "/products/Unloaded-Patch-Panel.png"
  },
  {
    "id": "cs39",
    "code": "AV-110-WB",
    "name": "Wall Mount and Rack Mount 110 Wiring Blocks",
    "category": "copper-system",
    "description": "As an economical solution and for easy termination of voice and data cables, AVAYO 110 wiring blocks designed both wall mount and rack mount types in 50 and 100 pair's size.",
    "image": "/products/Wall-Mount-and-Rack-Mount-110-Wiring-Blocks.png"
  },
  {
    "id": "cs40",
    "code": "AV-CD-MOD",
    "name": "Connection and Disconnection Module",
    "category": "copper-system",
    "description": "AVAYO connection and disconnection modules designed to deliver high quality connectivity in high density telecommunication and data networking. It is suitable to use in all LSA-Plus series, 10 pairs and 8 pairs size.",
    "image": "/products/Connection-and-Disconnection-Module.png"
  },
  {
    "id": "cs41",
    "code": "AV-DIST-BOX",
    "name": "Distribution Boxes",
    "category": "copper-system",
    "description": "AVAYO wall mount type telecom distribution boxes to mount standard 10 pair modules are designed in 30, 50 and 100 pair's size with door opening for easy installation.",
    "image": "/products/Distribution-Boxes.png"
  },
  {
    "id": "cs42",
    "code": "AV-DIST-FRAME",
    "name": "Distribution Frames",
    "category": "copper-system",
    "description": "AVAYO distribution frame made of powder coated galvanized steel designed in single frame and double frame type. A single frame distribution frame can accommodate 690 pairs and a double frame can accommodate 1380 pairs.",
    "image": "/products/Distribution-Frames.png"
  },
  {
    "id": "cs43",
    "code": "AV-TEL-PC",
    "name": "Telecom Patch Cords",
    "category": "copper-system",
    "description": "AVAYO category 3 and 5 UTP patch cords available in various connecting types like 110-110 and 110-RJ 45 terminations with 1, 2 or 4 pairs and in various lengths.",
    "image": "/products/Telecom-Patch-Cords.png"
  },
  {
    "id": "cs44",
    "code": "AV-C3-VPP",
    "name": "Cat 3 Voice Patch Panel",
    "category": "copper-system",
    "description": "AVAYO cat 3 RJ 45 voice patch panel is made with 25 or 50 port PCB units fixed in 1U and back interconnections in 110 or krone type IDC.",
    "image": "/products/Cat-3-Voice-Patch-Panel.png"
  },
  {
    "id": "cs45",
    "code": "AV-RJ45-ILC",
    "name": "RJ 45 In line Coupler",
    "category": "copper-system",
    "description": "AVAYO RJ45 8P 8C female to RJ45 8P 8C female in line coupler provides fast and easy plug and play connection of 8-position RJ45 patch cables.",
    "image": "/products/RJ-45-In-line-Coupler.png"
  },
  {
    "id": "cs46",
    "code": "AV-BL-INS",
    "name": "Blank Insert",
    "category": "copper-system",
    "description": "AVAYO blank insert used in Face plates and patch panels to cover the blank areas of wall plates and unloaded patch panels used in telecommunication rooms.",
    "image": "/products/Blank-Insert.png"
  },
  {
    "id": "p1",
    "code": "AF-06PLCD-W",
    "name": "6 Port Fiber Patch Panel, LC Duplex",
    "category": "fiber"
  },
  {
    "id": "p2",
    "code": "AF-06PUN-X/S-B",
    "name": "6 Port Fiber Patch Panel, Wall",
    "category": "fiber"
  },
  {
    "id": "p3",
    "code": "af-12C50-OM3ARMD",
    "name": "Avayo 12 core Fiber OM3 Outdoor ARMODE Cable",
    "category": "fiber"
  },
  {
    "id": "p4",
    "code": "AF-12C50-OM3IDOD",
    "name": "Avayo 12 core Fiber MM OM3 Indoor/Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p5",
    "code": "AF-12C65-LTIDOD",
    "name": "Avayo 12 core Fiber SM G652D Indoor/Outdoor",
    "category": "fiber"
  },
  {
    "id": "p6",
    "code": "AF-12CSM-LTOD",
    "name": "Avayo 12 core Fiber SM G652D Outdoor Armoured cable",
    "category": "fiber"
  },
  {
    "id": "p7",
    "code": "AF-24C9-SMID",
    "name": "Avayo 24 core Fiber 9/125 Single Mode Indoor Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p8",
    "code": "AF-24CMM-LTINOD",
    "name": "Avayo 24 Core Fiber OM3 Indoor/Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p9",
    "code": "AF-24CMM-LTOD",
    "name": "Avayo 24 Core Fiber OM3 Outdoor Armored Cable",
    "category": "fiber"
  },
  {
    "id": "p10",
    "code": "AF-24CSM-LTOD",
    "name": "Avayo 24 Core Fiber SM G652D Armored Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p11",
    "code": "AF-4C9R-SMID",
    "name": "AVAYO 4 Core Fiber Optic single mode Indoor Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p12",
    "code": "AF-6COM4-LTIDOD",
    "name": "AVAYO 6 Core Fiber OM4 Indoor/Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p13",
    "code": "AF-6CMM-LTIDOD",
    "name": "AVAYO 6 Core Fiber MM OM3 Indoor/Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p14",
    "code": "AF-6CSM-LTIDOD",
    "name": "Avayo 06 Core Fiber G652D Indoor Outdoor Single Mode Cable",
    "category": "fiber"
  },
  {
    "id": "p15",
    "code": "AF-8CMM-LTIDOD",
    "name": "Avayo 8 Core Fiber OM3 Indoor/Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p16",
    "code": "AF-8CMM-LTOD",
    "name": "Avayo 8 Core Fiber OM3 Armored Outdoor Cable",
    "category": "fiber"
  },
  {
    "id": "p17",
    "code": "AF-8CSM-LTOD",
    "name": "Avayo 8 Core Fiber Single Mode G652D Outdoor Armored Cable",
    "category": "fiber"
  },
  {
    "id": "p18",
    "code": "AF-BRJ45-G-6.5A",
    "name": "AVAYO Boot RJ45 Gray 6.5",
    "category": "copper"
  },
  {
    "id": "p19",
    "code": "AF-BRJ45-G-8A",
    "name": "Avayo Boot R45 Gray 8",
    "category": "copper"
  },
  {
    "id": "p20",
    "code": "AFN-LC LCMMom3-10M",
    "name": "Avayo LC LC MM om3 Patch cord 10M",
    "category": "copper"
  },
  {
    "id": "p21",
    "code": "AFN-LC LCMMom3-1M",
    "name": "Avayo LC LC MM om3 Patch cord 1M",
    "category": "copper"
  },
  {
    "id": "p22",
    "code": "AFN-LC LCMMom3-20M",
    "name": "Avayo LC LC MM om3 Patch cord 20M",
    "category": "copper"
  },
  {
    "id": "p23",
    "code": "AFN-LC LCMMom3-3M",
    "name": "Avayo LC LC MM om3 Patch cord 3M",
    "category": "copper"
  },
  {
    "id": "p24",
    "code": "afn-LC LCMMom3-50M",
    "name": "Avayo LC LC MM om3 Patch cord 50M",
    "category": "copper"
  },
  {
    "id": "p25",
    "code": "AFN-LC LCMMom3-5M",
    "name": "Avayo LC LC MM om3 Patch cord 5M",
    "category": "copper"
  },
  {
    "id": "p26",
    "code": "AFN-LC LCSM-10M",
    "name": "Avayo LC LC SM  Patch cord 10M",
    "category": "copper"
  },
  {
    "id": "p27",
    "code": "AFN-LC LCSM-1M",
    "name": "Avayo LC LC SM  Patch Cord 1M",
    "category": "copper"
  },
  {
    "id": "p28",
    "code": "AFN-LC LCSM-20M",
    "name": "Avayo LC LC SM  Patch cord 20M",
    "category": "copper"
  },
  {
    "id": "p29",
    "code": "AFN-LC LCSM-3M",
    "name": "Avayo LC LC SM  Patch cord 3M",
    "category": "copper"
  },
  {
    "id": "p30",
    "code": "AFN-LC LCSM-50M",
    "name": "Avayo LC LC SM  Patch cord 50 M",
    "category": "copper"
  },
  {
    "id": "p31",
    "code": "AFN-LC LCSM-5M",
    "name": "Avayo LC LC SM  Patch cord 5M",
    "category": "copper"
  },
  {
    "id": "p32",
    "code": "AVB-150X150-S",
    "name": "FLOOR BOX 150x150x65 Silver",
    "category": "accessories"
  },
  {
    "id": "p33",
    "code": "AVB-220X120-G",
    "name": "FLOOR BOX 220X120x65 Golden",
    "category": "accessories"
  },
  {
    "id": "p34",
    "code": "AVB-220X130-S",
    "name": "FLOOR BOX 130x230 Silver",
    "category": "accessories"
  },
  {
    "id": "p35",
    "code": "AVB-250X130-S",
    "name": "FLOOR BOX 250x220x100 Silver Plastic",
    "category": "accessories"
  },
  {
    "id": "p36",
    "code": "AVB-250x220-S",
    "name": "FLOOR BOX 250X220X100 Silver (steel)",
    "category": "accessories"
  },
  {
    "id": "p37",
    "code": "AVB-340X240-S",
    "name": "FLOOR BOX 340x240x100 Silver(Steel)",
    "category": "accessories"
  },
  {
    "id": "p38",
    "code": "AVC-Cat3-cab",
    "name": "Avayo cat 3 cable 4 pair Cable",
    "category": "copper"
  },
  {
    "id": "p39",
    "code": "AVC-CRBGR-CIR",
    "name": "Circular  Brush Grommet.",
    "category": "accessories"
  },
  {
    "id": "p40",
    "code": "AVE-10MPCX-6",
    "name": "UTP CAT6 PATCH CORDS  Gray 10M",
    "category": "copper"
  },
  {
    "id": "p41",
    "code": "AVE-15MPCX-6",
    "name": "UTP CAT6 PATCH CORDS  Gray 15M",
    "category": "copper"
  },
  {
    "id": "p42",
    "code": "AVE-2MPCX-6",
    "name": "UTP CAT6 PATCH CORDS 2M",
    "category": "copper"
  },
  {
    "id": "p43",
    "code": "AVE-3MPCX-6",
    "name": "UTP CAT6 PATCH CORDS 3M",
    "category": "copper"
  },
  {
    "id": "p44",
    "code": "AVE-5MPCX-6",
    "name": "UTP CAT6 PATCH CORDS  Gray 5M",
    "category": "copper"
  },
  {
    "id": "p45",
    "code": "AVE-BBC6-24PP",
    "name": "UTP CAT6 Patch Panel 24 Ports loaded",
    "category": "copper"
  },
  {
    "id": "p46",
    "code": "AVE-BBC6-48PP-L",
    "name": "Avayo Cat6 48 Port Patch Panel loaded",
    "category": "copper"
  },
  {
    "id": "p47",
    "code": "AVE-BBC6A-24PP",
    "name": "UTP CAT6A Loaded Patch Panel 24 Port",
    "category": "copper"
  },
  {
    "id": "p48",
    "code": "AVE-Cat6a-O F/UTP",
    "name": "Avayo F/UTP Cat6A Indoor outdoor cable",
    "category": "copper"
  },
  {
    "id": "p49",
    "code": "AVE-Cat6A-O S/F",
    "name": "Avayo Cat6A indoor Out Door S/FTP Cable (Roll, Mtr)",
    "category": "copper"
  },
  {
    "id": "p50",
    "code": "AVE-CAT6A-PLUG",
    "name": "Avayo CAT 6A Tooless Connectors",
    "category": "copper"
  },
  {
    "id": "p51",
    "code": "AVE-CAT7-PLUG",
    "name": "Avayo CAT 7 Tooless Connectors",
    "category": "tools"
  },
  {
    "id": "p52",
    "code": "AVE-CAT7-S/FTP",
    "name": "Avayo Cat 7 Indoor/Outdoor S/FTP Cable (Roll, Mtr)",
    "category": "accessories"
  },
  {
    "id": "p53",
    "code": "AVE-CAT8-FTP TOL",
    "name": "Avayo CAT 8 FTP Tooless Connectors",
    "category": "tools"
  },
  {
    "id": "p54",
    "code": "AVE-CAT8-S/FTP",
    "name": "Avayo Cat8 Indoor/Outdoor S/FTP Cable (Roll, Mtr)",
    "category": "accessories"
  },
  {
    "id": "p55",
    "code": "AVE-CMP-1UC",
    "name": "Avayo 1U Cable Organizer Cover Type (Metal)",
    "category": "accessories"
  },
  {
    "id": "p56",
    "code": "AVE-CMP-2UC",
    "name": "Avayo 2U Cable Organizer Cover (Ring Type)",
    "category": "accessories"
  },
  {
    "id": "p57",
    "code": "AVE-CMS-1UC",
    "name": "Avayo 1U Cable Organizer Cover (Plastic Type)",
    "category": "accessories"
  },
  {
    "id": "p58",
    "code": "AVE-CMS-1UR(S)",
    "name": "Avayo 1U Cable Organizer (Metal Ring Type)",
    "category": "accessories"
  },
  {
    "id": "p59",
    "code": "AVE-CMS-2UC",
    "name": "Avayo 2U  Cable Organizer Cover (Plastic Type)",
    "category": "accessories"
  },
  {
    "id": "p60",
    "code": "AVE-F1861-09B",
    "name": "AVAYO 18U Floor Standing 600X1000X900 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p61",
    "code": "AVE-F2261-12B",
    "name": "AVAYO 22U Floor Standing 600X1000X1200 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p62",
    "code": "AVE-F2461-13B",
    "name": "AVAYO 24U Floor Standing 600X1000X1400 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p63",
    "code": "AVE-F2466-13B",
    "name": "Avayo 24U Floor Standing 600 X 600  Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p64",
    "code": "AVE-F2468-13B",
    "name": "Avayo 24U Floor Standing 600 X 800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p65",
    "code": "AVE-F2768-14B",
    "name": "AVAYO 27U Floor Standing 600X800X1400 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p66",
    "code": "AVE-F3261-18B",
    "name": "AVAYO 32U Floor Standing 600X1000X1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p67",
    "code": "AVE-F3266-18B",
    "name": "AVAYO 32U Floor Standing 600X600X1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p68",
    "code": "AVE-F3761-18B",
    "name": "AVAYO 37U Floor Standing 600X1000X1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p69",
    "code": "AVE-F3766-18B",
    "name": "AVAYO 37U Floor Standing 600X600X1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p70",
    "code": "AVE-F3781-18B",
    "name": "AVAYO 37U Floor Standing 800X1000X1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p71",
    "code": "AVE-F4261-20B-GP",
    "name": "AVAYO 42U Floor Standing 600X1000X2000 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p72",
    "code": "Ave-Face Plate -Dual",
    "name": "Avayo  Face plate Dual port",
    "category": "accessories"
  },
  {
    "id": "p73",
    "code": "Ave-Face Plate -sing",
    "name": "Avayo  Face plate Single port",
    "category": "accessories"
  },
  {
    "id": "p74",
    "code": "AVE-FC6AP-1MPCX",
    "name": "Avayo UTP CAT6A Patch Cord  Blue 1M",
    "category": "copper"
  },
  {
    "id": "p75",
    "code": "AVE-FC6AP-2MPCX",
    "name": "UTP CAT6A Patch Cord Blue 2M",
    "category": "copper"
  },
  {
    "id": "p76",
    "code": "AVE-FC6AP-3MPCX",
    "name": "UTP CAT6A Patch Cord Blue 3M",
    "category": "copper"
  },
  {
    "id": "p77",
    "code": "AVE-FC6AP-5MPCX",
    "name": "UTP CAT6A Patch Cord  Blue 5M",
    "category": "copper"
  },
  {
    "id": "p78",
    "code": "AVE-RG59-100M",
    "name": "Avayo RG59 Coaxial 75 OH Cable",
    "category": "accessories"
  },
  {
    "id": "p79",
    "code": "AVE-RG6-100M",
    "name": "Avayo RG6 Coaxial 75 OH Cable",
    "category": "accessories"
  },
  {
    "id": "p80",
    "code": "AVE-RJ45-c6",
    "name": "Avayo Rj45 cat6 Connector",
    "category": "copper"
  },
  {
    "id": "p81",
    "code": "AVE-RJ45-6A",
    "name": "Avayo Rj45 cat6A Connector Shielded",
    "category": "copper"
  },
  {
    "id": "p82",
    "code": "AVE-SC6KJ-01PF",
    "name": "AVAYO Cat6 Keystone jack 90 Degree",
    "category": "copper"
  },
  {
    "id": "p83",
    "code": "AVE-SC6KJ-01WP",
    "name": "UTP Cat 6 key stone jack 180\u00b0 Degree",
    "category": "copper"
  },
  {
    "id": "p84",
    "code": "AVE-SHELF -6010",
    "name": "Avayo Cabinet Shelve 600x1000",
    "category": "cabinets"
  },
  {
    "id": "p85",
    "code": "AVE-SHELF -6080",
    "name": "Cabinet Shelve 600x800",
    "category": "cabinets"
  },
  {
    "id": "p86",
    "code": "AVE-SHELF -6035",
    "name": "Avayo Cabinet Shelve 600x350 WM",
    "category": "cabinets"
  },
  {
    "id": "p87",
    "code": "AVE-SHELF -6060",
    "name": "Avayo Cabinet Shelve 600x600",
    "category": "cabinets"
  },
  {
    "id": "p88",
    "code": "AVE-W04S-6035B",
    "name": "AVAYO 4U SS 600X350X300 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p89",
    "code": "AVE-W06D-6056B",
    "name": "AVAYO 6U SS 600X560X400 DS Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p90",
    "code": "AVE-W06S-6035B",
    "name": "AVAYO 6U SS 600X350X400 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p91",
    "code": "AVE-W06S-6045B",
    "name": "AVAYO 6U SS 600X450X400 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p92",
    "code": "AVE-W06S-6055B",
    "name": "AVAYO 6U SS 600X550X400 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p93",
    "code": "AVE-W06S-6060B",
    "name": "AVAYO 6U SS 600X600X400 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p94",
    "code": "AVE-W12S-6055B",
    "name": "AVAYO 12U SS 600X550X650 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p95",
    "code": "AVE-W12S-6060B",
    "name": "AVAYO 12U SS 600X600X650 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p96",
    "code": "AVR-Panel_Lifter",
    "name": "Avayo Panel Lifter (Raised Floor)",
    "category": "accessories"
  },
  {
    "id": "p97",
    "code": "AVS-SQBGR-SQU",
    "name": "Avayo Squire Brush Grommet.",
    "category": "accessories"
  },
  {
    "id": "p98",
    "code": "AVE-BNC-CONN",
    "name": "Avayo BNC Connectors",
    "category": "accessories"
  },
  {
    "id": "p99",
    "code": "AVE-KJC6A-STP",
    "name": "Avayo CAT6A STP Keystone Jack 180 Degree",
    "category": "copper"
  },
  {
    "id": "p100",
    "code": "AVE-RJ11-CONN",
    "name": "Avayo RJ11 Connectors",
    "category": "accessories"
  },
  {
    "id": "p101",
    "code": "AVE-C6AUKJ180",
    "name": "Avayo UTP Cat 6A Key Stone Jack 180\u00b0",
    "category": "copper"
  },
  {
    "id": "p102",
    "code": "AVE-F2781-14B",
    "name": "AVAYO 27U Floor Standing 800X1000X1400 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p103",
    "code": "AVE-W09S-6055B",
    "name": "AVAYO 9U SS 600X550X500 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p104",
    "code": "AF-06PLCD-W",
    "name": "Avayo 6 Port Fiber Patch Panel LC Duplex",
    "category": "fiber"
  },
  {
    "id": "p105",
    "code": "AF-12PLCD-W",
    "name": "Avayo 12 Port Fiber Patch Panel LC Duplex",
    "category": "fiber"
  },
  {
    "id": "p106",
    "code": "AF-24PLCD-W",
    "name": "24 Port Fiber Patch Panel, LC Duplex",
    "category": "fiber"
  },
  {
    "id": "p107",
    "code": "AVE-F2281-12B",
    "name": "AVAYO 22U Floor Standing 800X1000X1200 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p108",
    "code": "AVE-F3768-18B",
    "name": "Avayo 37U Floor Standing 600x800x1800 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p109",
    "code": "AVE-F4288-20XB-GS",
    "name": "Avayo 42U Floor Standing 800x800x2000 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p110",
    "code": "AVE-RG6-305M",
    "name": "Avayo RG6 Coaxial Cable 75 OHM PVC 305M",
    "category": "accessories"
  },
  {
    "id": "p111",
    "code": "AVE-F1868-09B",
    "name": "AVAYO 18U Floor Standing 600X800X900 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p112",
    "code": "AVE-03MPCX-6",
    "name": "Avayo UTP CAT6 Patch Cord Grey 0.3M",
    "category": "copper"
  },
  {
    "id": "p113",
    "code": "AVE-05MPCX-6",
    "name": "Avayo UTP CAT6 Patch Cord Grey 0.5M",
    "category": "copper"
  },
  {
    "id": "p114",
    "code": "AVE-1MPCX-6-Gray",
    "name": "Avayo UTP CAT6 Patch Cord Grey 1M",
    "category": "copper"
  },
  {
    "id": "p115",
    "code": "AF-LCD/AMM",
    "name": "Avayo LC Duplex Adapter MM Grey",
    "category": "accessories"
  },
  {
    "id": "p116",
    "code": "AF-8C9-SMID",
    "name": "Avayo 8 Core Fiber G652D Single Mode Indoor Outdoor Cable  (Roll, Mtr)",
    "category": "fiber"
  },
  {
    "id": "p117",
    "code": "AF-SCD/S-ASM",
    "name": "Avayo LC Duplex Plastic Adapter Blue",
    "category": "accessories"
  },
  {
    "id": "p118",
    "code": "AF-SCS-ASM-G",
    "name": "Avayo SC/APC SM simplex AdaptarGreen",
    "category": "accessories"
  },
  {
    "id": "p119",
    "code": "AF-SCS-ASM",
    "name": "Avayo SC Simplex Adapter MM",
    "category": "accessories"
  },
  {
    "id": "p120",
    "code": "AVE-U/UTP-C6-305M",
    "name": "AVAYO (AVELCCO) UTP CAT6 305M Grey Roll",
    "category": "copper"
  },
  {
    "id": "p121",
    "code": "AVE-FEMALECOUPLER-RJ45",
    "name": "Avayo Female Coupler for RJ45",
    "category": "copper"
  },
  {
    "id": "p122",
    "code": "AFN-LCSM-Pigtail",
    "name": "Avayo LC SM Pigtail",
    "category": "accessories"
  },
  {
    "id": "p123",
    "code": "AFN-PIGTAIL MM 1M",
    "name": "Avayo LC MM Pigtail",
    "category": "accessories"
  },
  {
    "id": "p124",
    "code": "AVE-W04S-6045B",
    "name": "AVAYO 4U SS 600X450X300 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p125",
    "code": "AVE-W09S-6060B",
    "name": "AVAYO 9U SS 600X600X500 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p126",
    "code": "AVE-W12S-6080B",
    "name": "AVAYO 12U SS 600X800X750 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p127",
    "code": "AVE-W15S-6060B",
    "name": "AVAYO 15U SS 600X600X750 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p128",
    "code": "AVE-W18S-6060B",
    "name": "AVAYO 18U SS 600X600X900 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p129",
    "code": "AVE-W15S-6055B",
    "name": "AVAYO 15U SS 600X550X750 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p130",
    "code": "AVE-W12S-6060DS",
    "name": "AVAYO 12U SS Double Sect 600X600X650 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p131",
    "code": "ave-w09s 600x800",
    "name": "AVAYO 9U SS 600X800X500 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p132",
    "code": "AVE-W15D-6080B",
    "name": "AVAYO 15U SS 600X800X750 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p133",
    "code": "AVE-F1866-09B",
    "name": "AVAYO 18U SS Floor Standing 600X600X900 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p134",
    "code": "AVE-F2268-12B",
    "name": "AVAYO 22U Floor Standing 600X800X1200 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p135",
    "code": "AVE-F2761-14B",
    "name": "AVAYO 27U Floor Standing 600X1000X1400 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p136",
    "code": "AVE-F2766-14B",
    "name": "AVAYO 27U Floor Standing 600X600X1400 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p137",
    "code": "AVE-F4266-20B",
    "name": "AVAYO 42U Floor Standing 600X600X2000 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p138",
    "code": "AVE-F4268-20B",
    "name": "AVAYO 42U Floor Standing 600X800X2000 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p139",
    "code": "AVE-F4281-20B",
    "name": "AVAYO 42U Floor Standing 800X1000X2000 Glass Door Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p140",
    "code": "AVE-F2266-12B",
    "name": "AVAYO 22U Floor Standing 600X600X1200 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p141",
    "code": "AVE-F4281-20B-2P",
    "name": "Avayo 42U Floor Standing 800X1000X2000 Pftd Door Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p142",
    "code": "AVE-F3268-18B",
    "name": "Avayo 32U Floor Standing 600X800X1600 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p143",
    "code": "AVE-F3281-18B",
    "name": "AVAYO 32U Floor Standing 800X1000X1600 Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p144",
    "code": "AVE-BCS6-24BP",
    "name": "Avayo 24 port patch panel blank with Strip Empty (New)",
    "category": "accessories"
  },
  {
    "id": "p145",
    "code": "AVE-BCS6-48BP",
    "name": "Avayo 48 port patch panel blank with Strip Empty (New)",
    "category": "accessories"
  },
  {
    "id": "p146",
    "code": "AVE-W15D-6060B DS",
    "name": "AVAYO 15U SS 600X600X750 DS Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p147",
    "code": "KSS-SPIRAL-12",
    "name": "KSS Spiral -12",
    "category": "accessories"
  },
  {
    "id": "p148",
    "code": "KSS-SPIRAL-8",
    "name": "SPIRAL KSS-8",
    "category": "accessories"
  },
  {
    "id": "p149",
    "code": "KSS-SPIRAL-19",
    "name": "SPIRAL KSS-19",
    "category": "accessories"
  },
  {
    "id": "p150",
    "code": "AVE-DUALCRIMPING-TOOL",
    "name": "Dual Modular Crimping Tool",
    "category": "tools"
  },
  {
    "id": "p151",
    "code": "RJ45-BOOT-6.5",
    "name": "RJ 45 Boot Grey 6.5",
    "category": "copper"
  },
  {
    "id": "p152",
    "code": "3M-RJ45-C6",
    "name": "RJ 45 CAT6 3M",
    "category": "copper"
  },
  {
    "id": "p153",
    "code": "KSS-NUMBERBOOK",
    "name": "KSS Number Book",
    "category": "accessories"
  },
  {
    "id": "p154",
    "code": "AVE-W09DS-6060-B",
    "name": "Avayo 9U DS 600x560x500 Wall Mount Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p155",
    "code": "AVE-CRIMPING-TOOL",
    "name": "Crimping Tool",
    "category": "tools"
  },
  {
    "id": "p156",
    "code": "AVE-F/UTP-C6A-305M",
    "name": "Avayo Cat 6A F/UTP 305 M (BLACK)",
    "category": "copper"
  },
  {
    "id": "p157",
    "code": "AVE-U/UTP-C6A-305M",
    "name": "Avayo Cat 6A U/UTP 305 M (BLUE)",
    "category": "copper"
  },
  {
    "id": "p158",
    "code": "AVE-F4781-20B",
    "name": "AVAYO 47U Floor Standing 800X1000X2200 Glass Door Cabinet",
    "category": "cabinets"
  },
  {
    "id": "p159",
    "code": "Legrand-Powerplug",
    "name": "Legrand Power Plug",
    "category": "accessories"
  },
  {
    "id": "p160",
    "code": "AVE-Cable-Peeler",
    "name": "AVAYO Cable peeler",
    "category": "tools"
  },
  {
    "id": "p161",
    "code": "VOL-OCK6-UB",
    "name": "Corning Module Cat 6",
    "category": "copper"
  },
  {
    "id": "p162",
    "code": "VOL-OCK6A-UB",
    "name": "Corning Module Cat 6A",
    "category": "copper"
  },
  {
    "id": "p163",
    "code": "VOL-FPUK-1K",
    "name": "Corning Faceplate 01 Port",
    "category": "accessories"
  },
  {
    "id": "p164",
    "code": "VOL-FPUK-2K",
    "name": "Corning Faceplate 02 Port",
    "category": "accessories"
  },
  {
    "id": "p165",
    "code": "VOL-19-MM-1U",
    "name": "Corning Cable Organizer 1U",
    "category": "accessories"
  },
  {
    "id": "p166",
    "code": "VOL-19-MM-2U",
    "name": "Corning Cable Organizer 2U",
    "category": "accessories"
  },
  {
    "id": "p167",
    "code": "VOL-PPCB-F24K",
    "name": "Corning UTP Patch Panel 24 Port",
    "category": "copper"
  },
  {
    "id": "p168",
    "code": "VOL-PPCB-F48K",
    "name": "Corning UTP Patch Panel 48 Port",
    "category": "copper"
  },
  {
    "id": "p169",
    "code": "VOL-6UP-L0.5",
    "name": "Corning Cat 6 Patch Cord UTP 0.5 Mtr",
    "category": "copper"
  },
  {
    "id": "p170",
    "code": "VOL-6UP-L1",
    "name": "Corning  Cat 6 Patch Cord UTP 1 Mtr",
    "category": "copper"
  },
  {
    "id": "p171",
    "code": "VOL-6UP-L3",
    "name": "Corning  Cat 6 Patch Cord UTP 3 Mtr",
    "category": "copper"
  },
  {
    "id": "p172",
    "code": "VOL-6AUP-L1",
    "name": "Corning Cat 6A  Patch Cord UTP1 Mtr",
    "category": "copper"
  },
  {
    "id": "p173",
    "code": "VOL-6AUP-L3",
    "name": "Corning Cat 6A Patch Cord UTP 3 Mtr",
    "category": "copper"
  },
  {
    "id": "p174",
    "code": "VOL-6AUP4-500M",
    "name": "Corning Cat 6A U/UTP Cable 500 Mtr",
    "category": "copper"
  },
  {
    "id": "p175",
    "code": "VOL-6UP4-305",
    "name": "Corning U/UTP Cable 305 Mtr",
    "category": "copper"
  },
  {
    "id": "p176",
    "code": "LOCAL",
    "name": "Voltage Tester",
    "category": "tools"
  },
  {
    "id": "p177",
    "code": "LOCAL",
    "name": "Plyer",
    "category": "tools"
  },
  {
    "id": "p178",
    "code": "LOCAL",
    "name": "Nose Plyer",
    "category": "tools"
  },
  {
    "id": "p179",
    "code": "LOCAL",
    "name": "Cutter",
    "category": "tools"
  },
  {
    "id": "p180",
    "code": "LOCAL",
    "name": "Cable Cutter",
    "category": "tools"
  },
  {
    "id": "p181",
    "code": "LOCAL",
    "name": "Screw Driver Set",
    "category": "tools"
  },
  {
    "id": "p182",
    "code": "LOCAL",
    "name": "Measuring tape",
    "category": "accessories"
  },
  {
    "id": "p183",
    "code": "LOCAL",
    "name": "Wrench Set",
    "category": "tools"
  },
  {
    "id": "p184",
    "code": "LOCAL",
    "name": "Blade Cutter",
    "category": "tools"
  },
  {
    "id": "p185",
    "code": "LOCAL",
    "name": "Digital Multimeter",
    "category": "tools"
  },
  {
    "id": "p186",
    "code": "LOCAL",
    "name": "Big Cutter",
    "category": "tools"
  },
  {
    "id": "p187",
    "code": "LOCAL",
    "name": "Screw Driver (Big Red)",
    "category": "tools"
  },
  {
    "id": "p188",
    "code": "LOCAL",
    "name": "Screw Driver (Big Green)",
    "category": "tools"
  },
  {
    "id": "p189",
    "code": "LOCAL",
    "name": "Screw Driver Tester (Big)",
    "category": "tools"
  },
  {
    "id": "p190",
    "code": "LOCAL",
    "name": "Screw Driver Tester (Small)",
    "category": "tools"
  },
  {
    "id": "p191",
    "code": "LOCAL",
    "name": "Blades",
    "category": "accessories"
  },
  {
    "id": "p192",
    "code": "LOCAL",
    "name": "Brush Panels 1U",
    "category": "accessories"
  },
  {
    "id": "p193",
    "code": "LOCAL",
    "name": "Wire Tracker (NF-801)",
    "category": "cabinets"
  },
  {
    "id": "p194",
    "code": "LOCAL",
    "name": "Wire Tracker (TM-09)",
    "category": "cabinets"
  },
  {
    "id": "p195",
    "code": "LOCAL",
    "name": "Remote Utp Cable Tester",
    "category": "copper"
  },
  {
    "id": "p196",
    "code": "LOCAL",
    "name": "FTTH BOX 24 Port Duplex",
    "category": "accessories"
  },
  {
    "id": "p197",
    "code": "LOCAL",
    "name": "FTTH BOX 48 Port Duplex",
    "category": "accessories"
  },
  {
    "id": "p198",
    "code": "LOCAL",
    "name": "15x15 Plastic Box  Water proof",
    "category": "accessories"
  },
  {
    "id": "p199",
    "code": "LOCAL",
    "name": "10x10 Plastic Box  Water proof",
    "category": "accessories"
  },
  {
    "id": "p200",
    "code": "LOCAL",
    "name": "7X7 Outlet Box",
    "category": "accessories"
  },
  {
    "id": "p201",
    "code": "Local-C6PC-3M-B",
    "name": "Cat 6 Patch Cord UTP 3 Mtr BLACK",
    "category": "copper"
  },
  {
    "id": "p202",
    "code": "Local-C6PC-0.3M-RED",
    "name": "TECHLINE  Cat 6 Patch Cord UTP 0.3 Mtr RED",
    "category": "copper"
  },
  {
    "id": "fs1",
    "code": "AV-SZ-CBL",
    "name": "Simplex and Zip Cable",
    "category": "fiber-system",
    "description": "AVAYO simplex cables are constructed with one tight-buffered fiber core with aramid strength members and jacketed for indoor use. Zip cord cable is two of…",
    "image": "/products/fiber-system/Simplex-and-Zip-Cable.png"
  },
  {
    "id": "fs2",
    "code": "AV-ID-TBC",
    "name": "Indoor Distribution Tight Buffered Cable",
    "category": "fiber-system",
    "description": "AVAYO distribution cables are for indoor applications with several tight-buffered fibers bundled under the same jacket with aramid strength members and sometimes fiberglass rod reinforcement.…",
    "image": "/products/fiber-system/Indoor-Distribution-Tight-Buffered-Cable.png"
  },
  {
    "id": "fs3",
    "code": "AV-IOD-TBC",
    "name": "Indoor and Out Door Distribution Tight Buffered Cable",
    "category": "fiber-system",
    "description": "Indoor/ Outdoor Distribution cables with several tight-buffered fibers bundled under the same jacket served with water-blocking swell able aramid yarns and jacketed with black, PVC…",
    "image": "/products/fiber-system/Indoor-and-Out-Door-Distribution-Tight-Buffered-Cable.png"
  },
  {
    "id": "fs4",
    "code": "AV-OA-TBC",
    "name": "Outdoor Armored Distribution Tight Buffered Cable",
    "category": "fiber-system",
    "description": "AVAYO out door Armored Distribution cables are constructed with several tight-buffered fibers bundled under the same jacket served with aramid yarns and jacketed with black…",
    "image": "/products/fiber-system/Outdoor-Armored-Distribution-Tight-Buffered-Cable.png"
  },
  {
    "id": "fs5",
    "code": "AV-IO-LTC",
    "name": "Indoor/Outdoor Loose Tube Cable",
    "category": "fiber-system",
    "description": "AVAYO cables are composed of several non buffered fibers together under the same jacket served with aramid yarns and jacketed with black, UV resistant PVC…",
    "image": "/products/fiber-system/Indoor-Outdoor-Loose-Tube-Cable.png"
  },
  {
    "id": "fs6",
    "code": "AV-OA-LTC",
    "name": "Outdoor Armored Loose Tube Cable",
    "category": "fiber-system",
    "description": "AVAYO cables are composed of several non buffered fibers together under the same jacket served with aramid yarns and jacketed with black, UV resistant PVC…",
    "image": "/products/fiber-system/Outdoor-Armored-Loose-Tube-Cable.png"
  },
  {
    "id": "fs7",
    "code": "AV-IO-SLTC",
    "name": "Indoor/Outdoor Stranded Loose Tube Cable",
    "category": "fiber-system",
    "description": "AVAYO cables are composed of several non buffered fibers sub grouped into multi PE Jackets served with aramid yarns and then jacketed together with black,…",
    "image": "/products/fiber-system/Indoor-Outdoor-Stranded-Loose-Tube-Cable.png"
  },
  {
    "id": "fs8",
    "code": "AV-OA-SLTC",
    "name": "Outdoor Armored Stranded Loose Tube Cable",
    "category": "fiber-system",
    "description": "AVAYO cables are composed of several non buffered fibers sub grouped into multi PE Jackets served with aramid yarns and then jacketed together with black,…",
    "image": "/products/fiber-system/Outdoor-Armored-Stranded-Loose-Tube-Cable.png"
  },
  {
    "id": "fs9",
    "code": "AV-I-FTTH",
    "name": "Indoor FTTH Drop Cable",
    "category": "fiber-system",
    "description": "AVAYO FTTH drop cable for connecting Network Access Point to the subscriber premises is designed with attributes such as flexibility, less weight, smaller diameter, ease…",
    "image": "/products/fiber-system/Indoor-FTTH-Drop-Cable.png"
  },
  {
    "id": "fs10",
    "code": "AV-FO-ADP",
    "name": "Fiber Optic Adapters",
    "category": "fiber-system",
    "description": "AVAYO fiber optic adapters are available in different types such as LC, SC, SC/APC, ST, FC, FC/APC, MTRJ and E2000 in simplex and duplex forms.…",
    "image": "/products/fiber-system/Fiber-Optic-Adapters.png"
  },
  {
    "id": "fs11",
    "code": "AV-FO-PT",
    "name": "Fiber Optic Pigtails",
    "category": "fiber-system",
    "description": "AVAYO fiber optic pigtails consists of a single mode or multimode fiber cord, one end with connector and other end open for direct joining. The…",
    "image": "/products/fiber-system/Fiber-Optic-Pigtails.png"
  },
  {
    "id": "fs12",
    "code": "AV-FO-CON",
    "name": "Fiber Optic Connector",
    "category": "fiber-system",
    "description": "AVAYO fiber optic Connectors are available in different types such as LC, SC, SC/APC, ST, FC, FC/APC, MTRJ and E2000. The connectors are either epoxy…",
    "image": "/products/fiber-system/Fiber-Optic-Connector.png"
  },
  {
    "id": "fs13",
    "code": "AV-FO-PC",
    "name": "Fiber Optic Patch Cords",
    "category": "fiber-system",
    "description": "AVAYO fiber optic patch cord consists of a single mode or multi mode fiber cord with two connectors at each end. The connector types are…",
    "image": "/products/fiber-system/Fiber-Optic-Patch-Cords.png"
  },
  {
    "id": "fs14",
    "code": "AV-FO-TP",
    "name": "Fiber Optic Termination Panels",
    "category": "fiber-system",
    "description": "AVAYO fiber termination panel or optic patch used to terminate, protect and organize the fiber optic cables and optical fibers in the fiber optic communciation…",
    "image": "/products/fiber-system/Fiber-Optic-Termination-Panels.png"
  },
  {
    "id": "fs15",
    "code": "AV-FO-SPL",
    "name": "Fiber Optic Splitter",
    "category": "fiber-system",
    "description": "Fiber optic splitter which splits fiber optic light in to several parts is an important passive component used in fiber networking. AVAYO planar light wave…",
    "image": "/products/fiber-system/Fiber-Optic-Splitter.png"
  },
  {
    "id": "rs1",
    "code": "AV-S-FS",
    "name": "S Series - Floor Standing Cabinets",
    "category": "rack-system",
    "description": "AVAYO Supreme Series Floor Standing cabinets designed with heavy duty frame and customer friendly facility for data communication and telecommunication network solutions. Size ranges from…",
    "image": "/products/rack-system/Floor-Standing-Cabinets.png"
  },
  {
    "id": "rs2",
    "code": "AV-WM-DS",
    "name": "Wall Mount Double Section Network Cabinets",
    "category": "rack-system",
    "description": "Double section cabinets are designed for easy access of the rear side of a wall mount cabinet. The rear section of the cabinet mount to…",
    "image": "/products/rack-system/Wall-Mount-Double-Section-Network-Cabinets.png"
  },
  {
    "id": "rs3",
    "code": "AV-WM-SS",
    "name": "Wall Mount Single Section Cabinets",
    "category": "rack-system",
    "description": "AVAYO wall mount cabinets designed to accommodate multiple 19\" equipment modules for data communication and telecommunication network solutions. Size ranges from 4U till 18U. These…",
    "image": "/products/rack-system/Wall-Mount-Single-Section-Cabinets.png"
  },
  {
    "id": "rs4",
    "code": "AV-FTTH-CAB",
    "name": "FTTH Cabinets",
    "category": "rack-system",
    "description": "FTTH cabinets for customer premise designed in different models and sizes to suit customer requirement. These cabinets are available in single section or double section…",
    "image": "/products/rack-system/FTTH-Cabinets.png"
  },
  {
    "id": "rs5",
    "code": "AV-FS-CAB",
    "name": "Floor Standing Cabinet",
    "category": "rack-system",
    "description": "AVAYO floor standing cabinets designed to accommodate multiple 19” equipment modules for data communication and telecommunication network solutions. Size ranges from 22U till 47U, these…",
    "image": "/products/rack-system/Floor-Standing-Cabinet.png"
  },
  {
    "id": "rs6",
    "code": "AV-OD-CAB",
    "name": "Outdoor Cabinets",
    "category": "rack-system",
    "description": "AVAYO Outdoor cabinets made with heavy duty cold rolled steel or stainless steel or aluminum frame for our door applications. These cabinets are either with…",
    "image": "/products/rack-system/Outdoor-Cabinets.png"
  },
  {
    "id": "rs7",
    "code": "AV-OPEN-RCK",
    "name": "Open Racks",
    "category": "rack-system",
    "description": "AVAYO floor standing open racks designed to accommodate multiple 19” equipment modules for data communication and telecommunication network solutions. Size ranges from 27U till 47U,…",
    "image": "/products/rack-system/Open-Racks.png"
  },
  {
    "id": "rs8",
    "code": "AV-19-WB",
    "name": "19” Wall Bracket",
    "category": "rack-system",
    "description": "AVAYO wall bracket is an ideal alternative to full size racks for accommodating 19” patch panels. Size ranges from 2U, 4U, 6U, 9U and 12U…",
    "image": "/products/rack-system/19-Wall-Bracket.png"
  },
  {
    "id": "rs9",
    "code": "AV-10-WMSS",
    "name": "10” Wall Mount Single Section Cabinets",
    "category": "rack-system",
    "description": "AVAYO wall mount single section 10” cabinets ( SOHO) designed to accommodate multiple 10” equipment modules for data communication and telecommunication network solutions. Size ranges…",
    "image": "/products/rack-system/10-Wall-Mount-Single-Section-Cabinets.png"
  },
  {
    "id": "rs10",
    "code": "AV-CBL-ORG",
    "name": "Cable Organizer",
    "category": "rack-system",
    "description": "AVAYO for proper cable management at racks, AVAYO designed cable organizer both horizontal and vertical types to provide neat and easy cable organizing solutions. The…",
    "image": "/products/rack-system/Cable-Organizer.png"
  },
  {
    "id": "rs11",
    "code": "AV-FAN-UNT",
    "name": "Fan Unit",
    "category": "rack-system",
    "description": "Standard with most of AVAYO wall mount and floor standing cabinets, fan unit available as single fan, set of 2 fans and set of 4…",
    "image": "/products/rack-system/Fan-Unit.png"
  },
  {
    "id": "rs12",
    "code": "AV-FXD-SHLF",
    "name": "Fixed Shelf",
    "category": "rack-system",
    "description": "AVAYO four post heavy duty fixed shelf with a loading capacity of 50-100 kgs, available in different size to suit the required cabinets.",
    "image": "/products/rack-system/Fixed-Shelf.png"
  },
  {
    "id": "rs13",
    "code": "AV-SLD-SHLF",
    "name": "Sliding Shelf",
    "category": "rack-system",
    "description": "Sliding shelf enables to pull out equipment placed inside the cabinet. These shelves are available in different sizes as per the depth the cabinets.",
    "image": "/products/rack-system/Sliding-Shelf.png"
  },
  {
    "id": "rs14",
    "code": "AV-BLNK-PNL",
    "name": "Blank Panel",
    "category": "rack-system",
    "description": "19” rack mount blank panels help to cover the free/ blank spaces of the rack profile. Blank panel normally available in 1U, 2U and 4U…",
    "image": "/products/rack-system/Blank-Panel.png"
  },
  {
    "id": "rs15",
    "code": "AV-PDU",
    "name": "PDU",
    "category": "rack-system",
    "description": "AVAYO rack mount Power Distribution Units designed in different types like normal power strips, PDU with master switch PDU with circuit breaker and surge protection…",
    "image": "/products/rack-system/PDU.png"
  },
  {
    "id": "rs16",
    "code": "AV-S-WMDS",
    "name": "S Series - Wall Mount Double Section Cabinets",
    "category": "rack-system",
    "description": "AVAYO Supreme Series wall mount cabinets designed with heavy duty frame and customer friendly facility for data communication and telecommunication network solutions. Size ranges from…",
    "image": "/products/rack-system/news_event_1467007142.png"
  },
  {
    "id": "dcs1",
    "code": "AV-D-SERIES",
    "name": "D-Series Rack",
    "category": "data-center-system",
    "description": "AVAYO D-series racks designed to accommodate multiple 19” equipment and servers. These are heavy duty racks with ample cable routing provisions and are designed for…",
    "image": "/products/data-center-system/D-Series-Rack.png"
  },
  {
    "id": "dcs2",
    "code": "AV-COLD-CNT",
    "name": "Cold Air Containment System",
    "category": "data-center-system",
    "description": "In this system, containment is designed to separate cold airflow with the hot air emitted from IT equipment’s by making the entire work area as…",
    "image": "/products/data-center-system/Cold-Air-Containment-System.png"
  },
  {
    "id": "dcs3",
    "code": "AV-HOT-CNT",
    "name": "Hot air Containment System",
    "category": "data-center-system",
    "description": "Here work area becomes a cold aisle and the hot exhaust air from IT equipment’s separated from cold air stream in the hot air containment.…",
    "image": "/products/data-center-system/Hot-air-Containment-System.png"
  },
  {
    "id": "dcs4",
    "code": "AV-ROOF-PNL",
    "name": "Roof Panel for containment",
    "category": "data-center-system",
    "description": "Modular roof panels with adjustment feature from 914mm to 1200mm (36 to 47.2 inches) length and 600mm or 800mm (23.62 or 31.5 inches) width made…",
    "image": "/products/data-center-system/Roof-Panel-for-containment.png"
  },
  {
    "id": "dcs5",
    "code": "AV-SLD-DOOR",
    "name": "Sliding Door",
    "category": "data-center-system",
    "description": "Sliding door mounted on the top of the end cabinet opening two sides with key or biometric lock system. A small sliding track fixed on…",
    "image": "/products/data-center-system/Sliding-Door.png"
  },
  {
    "id": "dcs6",
    "code": "AV-HNG-DOOR",
    "name": "Hing Door",
    "category": "data-center-system",
    "description": "Hinge door mounted to the sides of the end cabinet, opening outwards with keylock system or biometric locking system. The bottom of the doors are…",
    "image": "/products/data-center-system/Hing-Door.png"
  }
];
