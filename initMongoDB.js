import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST } = process.env;

export const initMongoDB = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    throw error;
  }
};