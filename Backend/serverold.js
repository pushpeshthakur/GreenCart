import 'dotenv/config';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './src/db/db.js';
import userRouter from './src/routes/userRoute.js';
import sellerRouter from './src/routes/sellerRoute.js';
import connectCloudinary from './src/services/cloudinary.js';
import productRouter from './src/routes/productRoute.js';
import cartRouter from './src/routes/cartRoute.js';
import addressRouter from './src/routes/addressRouter.js';
import orderRouter from './src/routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

const allowedOrigins = ['http://localhost:5173', 'https://greencart-henna.vercel.'];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));


app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => res.send("API IS WORKING"));
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;