// import "dotenv/config";
// import mongoose from "mongoose";
// import { v2 as cloudinary } from "cloudinary";
// import path from "path";
// import { fileURLToPath } from "url";
// import Product from "./src/models/Product.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // --------------------------------------------------
// // MongoDB
// // --------------------------------------------------

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//     throw new Error("MONGODB_URI is missing in .env");
// }

// // --------------------------------------------------
// // Cloudinary
// // --------------------------------------------------

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // --------------------------------------------------
// // Product data
// // --------------------------------------------------

// const products = [
//     // =========================
//     // VEGETABLES
//     // =========================

//     {
//         name: "Potato 500g",
//         category: "Vegetables",
//         price: 25,
//         offerPrice: 20,
//         images: [
//             "potato_image_1.png",
//             "potato_image_2.png",
//             "potato_image_3.png",
//             "potato_image_4.png",
//         ],
//         description: [
//             "Fresh and organic",
//             "Rich in carbohydrates",
//             "Ideal for curries and fries",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Tomato 1 kg",
//         category: "Vegetables",
//         price: 40,
//         offerPrice: 35,
//         images: ["tomato_image.png"],
//         description: [
//             "Juicy and ripe",
//             "Rich in Vitamin C",
//             "Perfect for salads and sauces",
//             "Farm fresh quality",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Carrot 500g",
//         category: "Vegetables",
//         price: 30,
//         offerPrice: 28,
//         images: ["carrot_image.png"],
//         description: [
//             "Sweet and crunchy",
//             "Good for eyesight",
//             "Ideal for juices and salads",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Spinach 500g",
//         category: "Vegetables",
//         price: 18,
//         offerPrice: 15,
//         images: ["spinach_image_1.png"],
//         description: [
//             "Rich in iron",
//             "High in vitamins",
//             "Perfect for soups and salads",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Onion 500g",
//         category: "Vegetables",
//         price: 22,
//         offerPrice: 19,
//         images: ["onion_image_1.png"],
//         description: [
//             "Fresh and pungent",
//             "Perfect for cooking",
//             "A kitchen staple",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // FRUITS
//     // =========================

//     {
//         name: "Apple 1 kg",
//         category: "Fruits",
//         price: 120,
//         offerPrice: 110,
//         images: ["apple_image.png"],
//         description: [
//             "Crisp and juicy",
//             "Rich in fiber",
//             "Boosts immunity",
//             "Perfect for snacking and desserts",
//             "Organic and farm fresh",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Orange 1 kg",
//         category: "Fruits",
//         price: 80,
//         offerPrice: 75,
//         images: ["orange_image.png"],
//         description: [
//             "Juicy and sweet",
//             "Rich in Vitamin C",
//             "Perfect for juices and salads",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Banana 1 kg",
//         category: "Fruits",
//         price: 50,
//         offerPrice: 45,
//         images: ["banana_image_1.png"],
//         description: [
//             "Sweet and ripe",
//             "High in potassium",
//             "Great for smoothies and snacking",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Mango 1 kg",
//         category: "Fruits",
//         price: 150,
//         offerPrice: 140,
//         images: ["mango_image_1.png"],
//         description: [
//             "Sweet and flavorful",
//             "Perfect for smoothies and desserts",
//             "Rich in Vitamin A",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Grapes 500g",
//         category: "Fruits",
//         price: 70,
//         offerPrice: 65,
//         images: ["grapes_image_1.png"],
//         description: [
//             "Fresh and juicy",
//             "Rich in antioxidants",
//             "Perfect for snacking and fruit salads",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // DAIRY
//     // =========================

//     {
//         name: "Amul Milk 1L",
//         category: "Dairy",
//         price: 60,
//         offerPrice: 55,
//         images: ["amul_milk_image.png"],
//         description: [
//             "Pure and fresh",
//             "Rich in calcium",
//             "Ideal for tea, coffee, and desserts",
//             "Trusted brand quality",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Paneer 200g",
//         category: "Dairy",
//         price: 90,
//         offerPrice: 85,
//         images: ["paneer_image.png"],
//         description: [
//             "Soft and fresh",
//             "Rich in protein",
//             "Ideal for curries and snacks",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Eggs 12 pcs",
//         category: "Dairy",
//         price: 90,
//         offerPrice: 85,
//         images: ["eggs_image.png"],
//         description: [
//             "Farm fresh",
//             "Rich in protein",
//             "Ideal for breakfast and baking",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Paneer 200g Premium",
//         category: "Dairy",
//         price: 90,
//         offerPrice: 85,
//         images: ["paneer_image_2.png"],
//         description: [
//             "Soft and fresh",
//             "Rich in protein",
//             "Ideal for curries and snacks",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Cheese 200g",
//         category: "Dairy",
//         price: 140,
//         offerPrice: 130,
//         images: ["cheese_image.png"],
//         description: [
//             "Creamy and delicious",
//             "Perfect for pizzas and sandwiches",
//             "Rich in calcium",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // DRINKS
//     // =========================

//     {
//         name: "Coca-Cola 1.5L",
//         category: "Drinks",
//         price: 80,
//         offerPrice: 75,
//         images: ["coca_cola_image.png"],
//         description: [
//             "Refreshing and fizzy",
//             "Perfect for parties and gatherings",
//             "Best served chilled",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Pepsi 1.5L",
//         category: "Drinks",
//         price: 78,
//         offerPrice: 73,
//         images: ["pepsi_image.png"],
//         description: [
//             "Chilled and refreshing",
//             "Perfect for celebrations",
//             "Best served cold",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Sprite 1.5L",
//         category: "Drinks",
//         price: 79,
//         offerPrice: 74,
//         images: ["sprite_image_1.png"],
//         description: [
//             "Refreshing citrus taste",
//             "Perfect for hot days",
//             "Best served chilled",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Fanta 1.5L",
//         category: "Drinks",
//         price: 77,
//         offerPrice: 72,
//         images: ["fanta_image_1.png"],
//         description: [
//             "Sweet and fizzy",
//             "Great for parties and gatherings",
//             "Best served cold",
//         ],
//         inStock: true,
//     },

//     {
//         name: "7 Up 1.5L",
//         category: "Drinks",
//         price: 76,
//         offerPrice: 71,
//         images: ["seven_up_image_1.png"],
//         description: [
//             "Refreshing lemon-lime flavor",
//             "Perfect for refreshing",
//             "Best served chilled",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // GRAINS
//     // =========================

//     {
//         name: "Basmati Rice 5kg",
//         category: "Grains",
//         price: 550,
//         offerPrice: 520,
//         images: ["basmati_rice_image.png"],
//         description: [
//             "Long grain and aromatic",
//             "Perfect for biryani and pulao",
//             "Premium quality",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Wheat Flour 5kg",
//         category: "Grains",
//         price: 250,
//         offerPrice: 230,
//         images: ["wheat_flour_image.png"],
//         description: [
//             "High-quality whole wheat",
//             "Soft and fluffy rotis",
//             "Rich in nutrients",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Organic Quinoa 500g",
//         category: "Grains",
//         price: 450,
//         offerPrice: 420,
//         images: ["quinoa_image.png"],
//         description: [
//             "High in protein and fiber",
//             "Gluten-free",
//             "Rich in vitamins and minerals",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Brown Rice 1kg",
//         category: "Grains",
//         price: 120,
//         offerPrice: 110,
//         images: ["brown_rice_image.png"],
//         description: [
//             "Whole grain and nutritious",
//             "Helps in weight management",
//             "Good source of magnesium",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Barley 1kg",
//         category: "Grains",
//         price: 150,
//         offerPrice: 140,
//         images: ["barley_image.png"],
//         description: [
//             "Rich in fiber",
//             "Helps improve digestion",
//             "Low in fat and cholesterol",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // BAKERY
//     // =========================

//     {
//         name: "Brown Bread 400g",
//         category: "Bakery",
//         price: 40,
//         offerPrice: 35,
//         images: ["brown_bread_image.png"],
//         description: [
//             "Soft and healthy",
//             "Made from whole wheat",
//             "Ideal for breakfast and sandwiches",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Butter Croissant 100g",
//         category: "Bakery",
//         price: 50,
//         offerPrice: 45,
//         images: ["butter_croissant_image.png"],
//         description: [
//             "Flaky and buttery",
//             "Freshly baked",
//             "Perfect for breakfast or snacks",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Chocolate Cake 500g",
//         category: "Bakery",
//         price: 350,
//         offerPrice: 325,
//         images: ["chocolate_cake_image.png"],
//         description: [
//             "Rich and moist",
//             "Made with premium cocoa",
//             "Ideal for celebrations and parties",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Whole Bread 400g",
//         category: "Bakery",
//         price: 45,
//         offerPrice: 40,
//         images: ["whole_wheat_bread_image.png"],
//         description: [
//             "Healthy and nutritious",
//             "Made with whole wheat flour",
//             "Ideal for sandwiches and toast",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Vanilla Muffins 6 pcs",
//         category: "Bakery",
//         price: 100,
//         offerPrice: 90,
//         images: ["vanilla_muffins_image.png"],
//         description: [
//             "Soft and fluffy",
//             "Perfect for a quick snack",
//             "Made with real vanilla",
//         ],
//         inStock: true,
//     },

//     // =========================
//     // INSTANT
//     // =========================

//     {
//         name: "Maggi Noodles 280g",
//         category: "Instant",
//         price: 55,
//         offerPrice: 50,
//         images: ["maggi_image.png"],
//         description: [
//             "Instant and easy to cook",
//             "Delicious taste",
//             "Popular among kids and adults",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Top Ramen 270g",
//         category: "Instant",
//         price: 45,
//         offerPrice: 40,
//         images: ["top_ramen_image.png"],
//         description: [
//             "Quick and easy to prepare",
//             "Spicy and flavorful",
//             "Loved by college students and families",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Knorr Cup Soup 70g",
//         category: "Instant",
//         price: 35,
//         offerPrice: 30,
//         images: ["knorr_soup_image.png"],
//         description: [
//             "Convenient for on-the-go",
//             "Healthy and nutritious",
//             "Variety of flavors",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Yippee Noodles 260g",
//         category: "Instant",
//         price: 50,
//         offerPrice: 45,
//         images: ["yippee_image.png"],
//         description: [
//             "Non-fried noodles for healthier choice",
//             "Tasty and filling",
//             "Convenient for busy schedules",
//         ],
//         inStock: true,
//     },

//     {
//         name: "Oats Noodles 72g",
//         category: "Instant",
//         price: 40,
//         offerPrice: 35,
//         images: ["maggi_oats_image.png"],
//         description: [
//             "Healthy alternative with oats",
//             "Good for digestion",
//             "Perfect for breakfast or snacks",
//         ],
//         inStock: true,
//     },
// ];

// // --------------------------------------------------
// // Upload image to Cloudinary
// // --------------------------------------------------

// const uploadImage = async (fileName) => {
//     const imagePath = path.join(
//         __dirname,
//         "../frontend/src/assets",
//         fileName
//     );

//     console.log(`Uploading: ${fileName}`);

//     const result = await cloudinary.uploader.upload(imagePath, {
//         folder: "greencart/products",
//         resource_type: "image",
//     });

//     return result.secure_url;
// };

// // --------------------------------------------------
// // Seed database
// // --------------------------------------------------

// const seedProducts = async () => {
//     try {
//         console.log("Connecting to MongoDB...");

//         await mongoose.connect(MONGODB_URI);

//         console.log("MongoDB connected.");

//         console.log(`Preparing ${products.length} products...`);

//         for (const product of products) {
//             const imageUrls = [];

//             for (const image of product.images) {
//                 const imageUrl = await uploadImage(image);
//                 imageUrls.push(imageUrl);
//             }

//             await Product.create({
//                 name: product.name,
//                 description: product.description,
//                 price: product.price,
//                 offerPrice: product.offerPrice,
//                 image: imageUrls,
//                 category: product.category,
//                 inStock: product.inStock,
//             });

//             console.log(`✓ Added: ${product.name}`);
//         }

//         console.log("\n=================================");
//         console.log("ALL PRODUCTS ADDED SUCCESSFULLY!");
//         console.log(`Total products: ${products.length}`);
//         console.log("=================================\n");

//     } catch (error) {
//         console.error("\nSEED ERROR:");
//         console.error(error);

//     } finally {
//         await mongoose.disconnect();
//         console.log("MongoDB connection closed.");
//     }
// };

// seedProducts();