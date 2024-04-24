import p1_img from "./kohlimrffinal.jpg";
import p2_img from "./sharmaceat.jpg";
import p3_img from "./kohlikit.png";
import p4_img from "./academytee.png";
import p5_img from "./sgwhiteleather.png";
import p6_img from "./kookabura.png";
import p7_img from "./dukes.png";
import p8_img from "./shoes.jpeg";
import p9_img from "./thighpads.png";
import p10_img from "./pads.png";
import p11_img from "./elguard.png";
import p12_img from "./tennis_bat.jpg";
import p13_img from "./helmet.png";
import p14_img from "./product_14.png";
import p15_img from "./kashmirwillow.png";
import p16_img from "./englishwillow.png";
import p17_img from "./womentee.png";
import p18_img from "./childKit.png";
import p19_img from "./product_19.png";
import p20_img from "./cap.png";
import p21_img from "./vinatgejersey.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./sneaker.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "THE KING'S WEAPON",
    category: "batandball",
    image: p1_img,
    new_price: 15000.00,
    old_price: 17000.00,
  },
  {
    id: 2,
    name: "HITMAN'S HAMMER",
    category: "batandball",
    image: p2_img,
    new_price: 14000.00,
    old_price: 15000.00,
  },
  {
    id: 3,
    name: "Speacial Edition Kohli's Kit",
    category: "assesories",
    image: p3_img,
    new_price: 9300.00,
    old_price: 10000.00,
  },
  {
    id: 4,
    name: "Puma Cricket Academy Training Kit",
    category: "clothe",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "SG 4  Piece White Leather Ball",
    category: "batandball",
    image: p5_img,
    new_price: 2700.00,
    old_price: 3300.00,
  },
  {
    id: 6,
    name: "Kookabura Red Leather Ball",
    category: "batandball",
    image: p6_img,
    new_price: 3000.00,
    old_price: 3500.00,
  },
  {
    id: 7,
    name: "Dukes Red Leather Ball",
    category: "batandball",
    image: p7_img,
    new_price: 4000.00,
    old_price: 4500.00,
  },
  {
    id: 8,
    name: "Puma Cricket Shoes",
    category: "assesories",
    image: p8_img,
    new_price: 3700.00,
    old_price: 4500.00,
  },
  {
    id: 9,
    name: "Thigh Pads",
    category: "assesories",
    image: p9_img,
    new_price: 750.00,
    old_price: 1000.00,
  },
  {
    id: 10,
    name: "Pads",
    category: "assesories",
    image: p10_img,
    new_price: 1500.00,
    old_price: 2000.00,
  },
  {
    id: 11,
    name: "Elguard",
    category: "assesories",
    image: p11_img,
    new_price: 550.00,
    old_price: 900.00,
  },
  {
    id: 12,
    name: "Tennis Cricket Bat",
    category: "batandball",
    image: p12_img,
    new_price: 1200.00,
    old_price: 1500.00,
  },
  {
    id: 13,
    name: "Cricket Helmet",
    category: "assesories",
    image: p13_img,
    new_price: 1500.00,
    old_price: 2000.00,
  },
  {
    id: 14,
    name: "Men  Slim Fit Bomber Jacket",
    category: "clothe",
    image: p14_img,
    new_price: 1500.00,
    old_price: 190.00,
  },
  {
    id: 15,
    name: "Kashmir Willow Cricket Bat",
    category: "batandball",
    image: p15_img,
    new_price: 2700.00,
    old_price: 3000.00,
  },
  {
    id: 16,
    name: "English Willow Cricket Bat",
    category: "batandball",
    image: p16_img,
    new_price: 7100.00,
    old_price: 8000.00,
  },
  {
    id: 17,
    name: "Women Indian Team Training Jersey",
    category: "clothe",
    image: p17_img,
    new_price: 2000.00,
    old_price: 4000.00,
  },
  {
    id: 18,
    name: "Kid's starter kit",
    category: "assesories",
    image: p18_img,
    new_price: 4900.00,
    old_price: 60000.00,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "clothe",
    image: p19_img,
    new_price: 1400.00,
    old_price: 1800.00,
  },
  {
    id: 20,
    name: "India Men Cap",
    category: "clothe",
    image: p20_img,
    new_price: 1200.00,
    old_price: 1500.00,
  },
  {
    id: 21,
    name: "India Vintage Cricket Jersey",
    category: "clothe",
    image: p21_img,
    new_price: 3500.00,
    old_price: 3900.00,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Puma Hooded Sweatshirt",
    category: "clothe",
    image: p26_img,
    new_price: 1100.00,
    old_price: 1500.00,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "WC-Special Sneaker",
    category: "assesories",
    image: p28_img,
    new_price: 6700.00,
    old_price: 8000.00,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Puma Boys Jacket",
    category: "clothe",
    image: p35_img,
    new_price: 1200.00,
    old_price: 1700.00,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
