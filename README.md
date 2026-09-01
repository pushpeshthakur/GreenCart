# 🛒 GreenCart - Full stack web application

GreenCart is a full-stack grocery e-commerce application built with the MERN stack. The application provides customer shopping features and a separate seller dashboard for managing products, stock, and orders.

## 🌐 Live Demo

🔗 [Frontend Live Link] - 'https://green-cart-omega-ten.vercel.app'
📂 [GitHub Repository] -  'https://github.com/pushpeshthakur/GreenCart'

Linkedin - https://www.linkedin.com/in/pushpeshthakur
Email - pushpeshthakur1626@gmail.com

## ✨ Features

### Customer :-

- User registration and login
- JWT authentication with HTTP-only cookies
- Browse all products
- Browse products by category
- View product details
- Add, update, and remove cart items
- Manage delivery addresses
- Place Cash on Delivery orders
- View previous orders
- Responsive React UI

### Seller :-

- Separate seller login
- Seller authentication using cookies
- Add products with multiple images
- Upload product images through Cloudinary
- View product list
- Change product stock status
- View customer orders

## 🧰 Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cookie Parser
- CORS
- Multer
- Cloudinary

### Deployment / Services

- Vercel — frontend deployment
- Render — backend deployment
- MongoDB Atlas — database
- Cloudinary — product image storage

## ▶️ Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)

### Installation (Frontend)

```bash
git clone 
cd greencart
npm install
npm run dev
```

## 📁 Project Architecture

Greencart/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/       # Business logic for API requests
│   │   │   ├── UserController.js
│   │   │   ├── sellerController.js
│   │   │   ├── productController.js
│   │   │   ├── cartController.js
│   │   │   ├── addressController.js
│   │   │   └── orderController.js
│   │   │
│   │   ├── db/                # MongoDB connection
│   │   │   └── db.js
│   │   │
│   │   ├── middlewares/       # Authentication middleware
│   │   │   ├── authUser.js
│   │   │   └── authSeller.js
│   │   │
│   │   ├── models/            # Mongoose schemas/models
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   ├── Address.js
│   │   │   └── Order.js
│   │   │
│   │   ├── routes/            # REST API routes
│   │   │   ├── userRoute.js
│   │   │   ├── sellerRoute.js
│   │   │   ├── productRoute.js
│   │   │   ├── cartRoute.js
│   │   │   ├── addressRouter.js
│   │   │   └── orderRoute.js
│   │   │
│   │   └── services/          # External/file services
│   │       ├── cloudinary.js
│   │       └── multer.js
│   │
│   ├── app.js 
│   ├── server.js               # Backend entry point
│   ├── package.json
│   └── vercel.json
│
├── Frontend/
│   ├── public/                 # Public static files
│   ├── src/
│   │   ├── assets/             # Product images, icons and UI assets
│   │   ├── components/         # Reusable UI components
│   │   │   ├── seller/ SellerLogin.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   ├── BottomBanner.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MainBanner.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsLatter.jsx
│   │   │   └── ProductCard.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx  # Global application state
│   │   │
│   │   ├── pages/              # Customer and seller pages
│   │   │   ├── Seller/
│   │   │   │   ├── SellerLayout.jsx
│   │   │   │   ├── AddProduct.jsx
│   │   │   │   ├── ProductList.jsx
│   │   │   │   └── Orders.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── AllProducts.jsx
│   │   │   ├── ProductCategory.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── AddAddress.jsx
│   │   │   └── MyOrders.jsx
│   │   │
│   │   ├── App.jsx             # Application routes
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── .gitignore
└── README.md

## 🔄 Application Flow

### 🔌 Backend Request Flow

React Component
      ↓
Axios Request
      ↓
Express Route
      ↓
Authentication Middleware (when required)
      ↓
Controller
      ↓
Mongoose Model
      ↓
MongoDB
      ↓
JSON Response
      ↓
React State / UI

## 🔐 Authentication Architecture

- GreenCart uses JWT authentication stored in HTTP-only cookies.

### User authentication

Register / Login
      ↓
Validate credentials
      ↓
Hash / compare password with bcryptjs
      ↓
Generate JWT
      ↓
Store JWT in HTTP-only cookie
      ↓
Protected request
      ↓
authUser middleware verifies JWT
      ↓
Controller executes

### Seller authentication 

Seller authentication follows the same general pattern through the separate authSeller middleware and seller authentication controller.

## 🌐 API Structure

- All APIs are served under /api.

### User

Method          Endpoint                        Purpose

POST           /api/user/register               Register a user

POST           /api/user/login                  Login a user

GET            /api/user/is-auth                Check user authentication

GET            /api/user/logout                 Logout user

### Seller

Method         Endpoint                         Purpose

POST           /api/seller/login                Seller login

GET            /api/seller/is-auth              Check seller authentication

GET            /api/seller/logout               Logout seller

### Products

Method         Endpoint                         Purpose

POST           /api/product/add                 Add a product

GET            /api/product/list                Get all products

GET            /api/product/id                  Get product by ID

POST           /api/product/stock               Change product stock

### Cart

Method         Endpoint                         Purpose

POST           /api/cart/update                 Update user cart

### Address

Method         Endpoint                         Purpose

POST           /api/address/add                 Add delivery address

GET            /api/address/get                 Get user addresses

### Orders

Method         Endpoint                         Purpose

POST           /api/order/cod                   Place Cash on Delivery order

GET            /api/order/user                  Get user's orders

GET            /api/order/seller                Get all seller orders

## 📄 License

### ✅ How to Use:
1. Copy this entire content.
2. Go to your GitHub repo → Click `README.md` → Edit.
3. Paste it there.
4. Replace:
   - Live link
   - LinkedIn & email
   - Add screenshots (optional but recommended)


Thank You all of you...