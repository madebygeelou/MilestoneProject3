import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Welcome to the Event Management System API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
