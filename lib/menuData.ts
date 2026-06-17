export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  priceNum: number;
  tag?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    name: "Burgers",
    emoji: "🍔",
    gradient: "linear-gradient(135deg, #3a1200 0%, #6b2800 100%)",
    items: [
      {
        name: "Zinger Burger",
        description: "Crispy zinger fillet, lettuce, mayo, sesame bun.",
        price: "Rs. 320",
        priceNum: 320,
      },
      {
        name: "Zinger Cheese Burger",
        description: "Crispy zinger fillet, cheddar cheese, lettuce, mayo.",
        price: "Rs. 380",
        priceNum: 380,
        tag: "BESTSELLER",
      },
      {
        name: "Chicken Burger",
        description: "Juicy chicken patty, lettuce, tomato, house sauce.",
        price: "Rs. 300",
        priceNum: 300,
      },
      {
        name: "Chicken Cheese Burger",
        description: "Juicy chicken patty, cheese slice, lettuce, creamy mayo.",
        price: "Rs. 360",
        priceNum: 360,
      },
    ],
  },
  {
    id: "shawarma",
    name: "Shawarma",
    emoji: "🌯",
    gradient: "linear-gradient(135deg, #2d1800 0%, #5c3200 100%)",
    items: [
      {
        name: "Chicken Shawarma",
        description: "Grilled chicken, garlic sauce, fresh veggies, soft wrap.",
        price: "Rs. 300",
        priceNum: 300,
      },
      {
        name: "Chicken Cheese Shawarma",
        description: "Grilled chicken, melted cheese, garlic sauce, veggies.",
        price: "Rs. 360",
        priceNum: 360,
      },
      {
        name: "Zinger Shawarma",
        description: "Crispy zinger fillet, garlic sauce, fresh veggies.",
        price: "Rs. 320",
        priceNum: 320,
      },
      {
        name: "Zinger Cheese Shawarma",
        description: "Crispy zinger, cheese, garlic sauce, wrapped fresh.",
        price: "Rs. 380",
        priceNum: 380,
        tag: "MUST TRY",
      },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    emoji: "🍗",
    gradient: "linear-gradient(135deg, #3d1a00 0%, #7a3800 100%)",
    items: [
      {
        name: "1 Pcs Chicken",
        description: "Golden crispy fried chicken, juicy on the inside.",
        price: "Rs. 220",
        priceNum: 220,
      },
      { name: "2 Pcs Chicken", price: "Rs. 440", priceNum: 440 },
      { name: "5 Pcs Chicken", price: "Rs. 1,100", priceNum: 1100, tag: "FAMILY" },
      { name: "9 Pcs Chicken", price: "Rs. 1,980", priceNum: 1980, tag: "PARTY PACK" },
    ],
  },
  {
    id: "wings",
    name: "Wings",
    emoji: "🍖",
    gradient: "linear-gradient(135deg, #3d0800 0%, #7a1800 100%)",
    items: [
      {
        name: "5 Pcs Hot Wings",
        description: "Crispy hot wings tossed in signature spicy sauce.",
        price: "Rs. 300",
        priceNum: 300,
      },
      { name: "10 Pcs Hot Wings", price: "Rs. 600", priceNum: 600 },
      { name: "15 Pcs Hot Wings", price: "Rs. 900", priceNum: 900, tag: "POPULAR" },
      { name: "20 Pcs Hot Wings", price: "Rs. 1,200", priceNum: 1200, tag: "PARTY PACK" },
    ],
  },
  {
    id: "hot-shots",
    name: "Hot Shots",
    emoji: "🌶️",
    gradient: "linear-gradient(135deg, #4d0000 0%, #8a1000 100%)",
    items: [
      {
        name: "5 Pcs Hot Shots",
        description: "Bite-sized spicy hot shots, crispy and addictive.",
        price: "Rs. 300",
        priceNum: 300,
      },
      { name: "10 Pcs Hot Shots", price: "Rs. 600", priceNum: 600 },
      { name: "15 Pcs Hot Shots", price: "Rs. 900", priceNum: 900 },
      { name: "20 Pcs Hot Shots", price: "Rs. 1,200", priceNum: 1200 },
    ],
  },
  {
    id: "nuggets",
    name: "Nuggets",
    emoji: "🐔",
    gradient: "linear-gradient(135deg, #3a2800 0%, #7a5200 100%)",
    items: [
      {
        name: "5 Pcs Nuggets",
        description: "Golden chicken nuggets, crispy outside, tender inside.",
        price: "Rs. 300",
        priceNum: 300,
      },
      { name: "10 Pcs Nuggets", price: "Rs. 600", priceNum: 600 },
      { name: "15 Pcs Nuggets", price: "Rs. 900", priceNum: 900 },
      { name: "20 Pcs Nuggets", price: "Rs. 1,200", priceNum: 1200 },
    ],
  },
  {
    id: "fries",
    name: "Fries",
    emoji: "🍟",
    gradient: "linear-gradient(135deg, #3d2800 0%, #7a5000 100%)",
    items: [
      {
        name: "Regular Fries",
        description: "Golden crispy fries, perfectly salted.",
        price: "Rs. 280",
        priceNum: 280,
      },
      { name: "Medium Fries", price: "Rs. 320", priceNum: 320 },
      { name: "Large Fries", price: "Rs. 380", priceNum: 380 },
      { name: "Family Fries", price: "Rs. 420", priceNum: 420, tag: "FAMILY" },
      {
        name: "Loaded Fries Regular",
        description: "Crispy fries loaded with toppings and house sauce.",
        price: "Rs. 350",
        priceNum: 350,
      },
      {
        name: "Loaded Fries Large",
        description: "Extra-large loaded fries — the ultimate sharing platter.",
        price: "Rs. 650",
        priceNum: 650,
        tag: "GO BIG",
      },
    ],
  },
  {
    id: "pratha-roll",
    name: "Pratha Roll",
    emoji: "🫔",
    gradient: "linear-gradient(135deg, #2d1800 0%, #5c3000 100%)",
    items: [
      {
        name: "Chicken Pratha",
        description: "Soft pratha roll filled with spiced chicken and sauce.",
        price: "Rs. 340",
        priceNum: 340,
      },
      { name: "Chicken Cheese Pratha", price: "Rs. 380", priceNum: 380 },
      {
        name: "Zinger Pratha",
        description: "Crispy zinger fillet wrapped in a fresh soft pratha.",
        price: "Rs. 400",
        priceNum: 400,
      },
      {
        name: "Zinger Cheese Pratha",
        description: "Crispy zinger + melted cheese wrapped in soft pratha.",
        price: "Rs. 460",
        priceNum: 460,
        tag: "MUST TRY",
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    emoji: "🍝",
    gradient: "linear-gradient(135deg, #2d1c00 0%, #5a3800 100%)",
    items: [
      {
        name: "7 Days Special Pasta",
        description: "Our signature pasta recipe — rich, creamy, and exclusive to Seven Days.",
        price: "Rs. 650",
        priceNum: 650,
        tag: "SIGNATURE",
      },
    ],
  },
  {
    id: "deals",
    name: "Deals",
    emoji: "🎯",
    gradient: "linear-gradient(135deg, #001a00 0%, #004400 100%)",
    items: [
      {
        name: "Bumper Deal",
        description: "1 Zinger Burger + 5 Hot Wings + Half Litre Drink.",
        price: "Rs. 760",
        priceNum: 760,
      },
      {
        name: "Saving Deal",
        description: "2 Zinger Burgers + Half Litre Drink.",
        price: "Rs. 800",
        priceNum: 800,
        tag: "SAVE BIG",
      },
      {
        name: "Special Deal",
        description: "3 Zinger Burgers + 1 Litre Drink.",
        price: "Rs. 1,200",
        priceNum: 1200,
      },
      {
        name: "Drum Stick Deal",
        description: "5 Pcs Drum Stick + 1 Regular Fries + 1 Litre Drink.",
        price: "Rs. 1,150",
        priceNum: 1150,
      },
      {
        name: "Friends Deal",
        description: "5 Zinger Burgers + 1.5 Litre Drink.",
        price: "Rs. 1,920",
        priceNum: 1920,
        tag: "BESTSELLER",
      },
      {
        name: "Super Deal",
        description: "2 Small Pizza + 2 Zinger Burgers + 1.5 Litre Drink.",
        price: "Rs. 2,750",
        priceNum: 2750,
        tag: "MEGA VALUE",
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    gradient: "linear-gradient(135deg, #4d0800 0%, #8a1800 100%)",
    items: [
      {
        name: "PD 1 — 2 Small Pizza",
        description: "2 Small Pizzas + 1 Litre Drink.",
        price: "Rs. 1,300",
        priceNum: 1300,
      },
      {
        name: "PD 2 — 2 Medium Pizza",
        description: "2 Medium Pizzas + 1 Litre Drink.",
        price: "Rs. 2,300",
        priceNum: 2300,
      },
      {
        name: "PD 3 — 2 Large Pizza",
        description: "2 Large Pizzas + 1.5 Litre Drink.",
        price: "Rs. 3,000",
        priceNum: 3000,
      },
      {
        name: "PD 4 — 2 XL Pizza",
        description: "2 XL Pizzas + 1.5 Litre Drink.",
        price: "Rs. 3,600",
        priceNum: 3600,
        tag: "FAMILY",
      },
      {
        name: "PD 5 — 2 Medium Doner",
        description: "2 Medium Doner Pizzas + 1 Litre Drink.",
        price: "Rs. 3,000",
        priceNum: 3000,
      },
      {
        name: "PD 6 — 2 Large Doner",
        description: "2 Large Doner Pizzas + 1.5 Litre Drink.",
        price: "Rs. 3,600",
        priceNum: 3600,
      },
      {
        name: "PD 7 — 2 XL Doner",
        description: "2 XL Doner Pizzas + 1.5 Litre Drink.",
        price: "Rs. 4,800",
        priceNum: 4800,
        tag: "PARTY PACK",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    emoji: "🥤",
    gradient: "linear-gradient(135deg, #001a2d 0%, #003a5c 100%)",
    items: [
      { name: "Regular Drink", price: "Rs. 70", priceNum: 70 },
      { name: "Half Litre Drink", price: "Rs. 120", priceNum: 120 },
      { name: "1 Litre Drink", price: "Rs. 150", priceNum: 150 },
      { name: "Mineral Water Small", price: "Rs. 70", priceNum: 70 },
      { name: "Mineral Water Large", price: "Rs. 150", priceNum: 150 },
    ],
  },
];

export const menuItems: MenuItem[] = menuCategories.flatMap((c) => c.items);
