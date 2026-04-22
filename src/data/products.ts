export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  subCategory?: string;
}

export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "fiber", name: "Fiber Optics" },
  { id: "copper", name: "Copper Networking" },
  { id: "cabinets", name: "Cabinets & Enclosures" },
  { id: "tools", name: "Tools & Testing" },
  { id: "accessories", name: "Fittings & Accessories" },
];

export const products: Product[] = [
  // Fiber Optics
  { id: "f1", code: "AF-06PUN-X/S-B", name: "6 Port Fiber Patch Panel, Wall", category: "fiber" },
  { id: "f2", code: "AF-24PLCD-W", name: "24 Port Fiber Patch Panel, LC Duplex", category: "fiber" },
  { id: "f3", code: "AFN-LC LCMMom3-10M", name: "Avayo LC LC MM om3 Patch cord 10M", category: "fiber" },
  { id: "f4", code: "AFN-LCSM-Pigtail", name: "Avayo LC SM Pigtail", category: "fiber" },
  { id: "f5", code: "AF-12C50-OM3ARMD", name: "Avayo 12 core Fiber OM3 Outdoor ARMODE Cable", category: "fiber" },
  { id: "f6", code: "AF-24C9-SMID", name: "Avayo 24 core Fiber 9/125 Single Mode Indoor Cable", category: "fiber" },

  // Copper Networking
  { id: "c1", code: "AVE-U/UTP-C6-305M", name: "AVAYO (AVELCCO) UTP CAT6 305M Grey Roll", category: "copper" },
  { id: "c2", code: "AVE-BBC6-24PP", name: "UTP CAT6 Patch Panel 24 Ports loaded", category: "copper" },
  { id: "c3", code: "AVE-RJ45-c6", name: "Avayo Rj45 cat6 Connector", category: "copper" },
  { id: "c4", code: "AVE-KJC6A-STP", name: "Avayo CAT6A STP Keystone Jack 180 Degree", category: "copper" },
  { id: "c5", code: "AVE-3MPCX-6", name: "UTP CAT6 PATCH CORDS 3M", category: "copper" },
  { id: "c6", code: "VOL-OCK6-UB", name: "Corning Module Cat 6", category: "copper" },

  // Cabinets & Enclosures
  { id: "cab1", code: "AVE-W06S-6045B", name: "AVAYO 6U SS 600X450X400 Wall Mount Cabinet", category: "cabinets" },
  { id: "cab2", code: "AVE-F4261-20B-GP", name: "AVAYO 42U Floor Standing 600X1000X2000 Cabinet", category: "cabinets" },
  { id: "cab3", code: "AVE-W12S-6060B", name: "AVAYO 12U SS 600X600X650 Wall Mount Cabinet", category: "cabinets" },
  { id: "cab4", code: "AVE-F2468-13B", name: "AVAYO 24U Floor Standing 600 X 800 Cabinet", category: "cabinets" },
  { id: "cab5", code: "AVE-W15D-6060B DS", name: "AVAYO 15U SS 600X600X750 DS Wall Mount Cabinet", category: "cabinets" },

  // Floor Boxes & Fittings
  { id: "fb1", code: "AVB-150X150-S", name: "FLOOR BOX 150x150x65 Silver", category: "accessories" },
  { id: "fb2", code: "AVB-220X120-G", name: "FLOOR BOX 220X120x65 Golden", category: "accessories" },
  { id: "fb3", code: "AVE-FC6AP-1MPCX", name: "Avayo Face Plate Dual port", category: "accessories" },
  { id: "fb4", code: "AVC-CRBGR-CIR", name: "Circular Brush Grommet", category: "accessories" },

  // Tools & Testing
  { id: "t1", code: "AVE-DUALCRIMPING-TOOL", name: "Dual Modular Crimping Tool", category: "tools" },
  { id: "t2", code: "AVE-CRIMPING-TOOL", name: "Crimping Tool", category: "tools" },
  { id: "t3", code: "WIRE-TRACKER-NF801", name: "Wire Tracker (NF-801)", category: "tools" },
  { id: "t4", code: "AVE-Cable-Peeler", name: "AVAYO Cable peeler", category: "tools" },
  { id: "t5", code: "DIGITAL-MULTIMETER", name: "Digital Multimeter", category: "tools" },
  { id: "t6", code: "VOLTAGE-TESTER", name: "Voltage Tester", category: "tools" },
];
