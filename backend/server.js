import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/products.js';  // ✅ this must be correct
import orderRoutes from './routes/orders.js';      // ✅ optional for later

const app = express();
app.use(cors());
app.use(express.json());
app.get('/test-server', (req, res) => {
  res.send('✅ Server is working!');
});

app.use('/api/products', productRoutes);  // ✅ this must exist
app.use('/api/orders', orderRoutes);      // ✅ this must exist if needed

mongoose.connect('mongodb://localhost:27017/lumiere')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5050, () => console.log('Server running on port 5050'));
  })
  .catch(err => console.error(err));
