import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/db/db.js';
import connectCloudinary from './src/services/cloudinary.js';

const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

app.get('/', (req, res) => {
    res.send(`API is working on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
