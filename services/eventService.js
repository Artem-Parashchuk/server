import { Event } from "../models/Event.js";
import { User } from "../models/Users.js";

export const getEvents = () => Event.find();

export const getUser = async () => {
  try {
    const people = await User.find();
    return people;
  } catch (error) {
    console.error(`Error fetching registered people: ${error.message}`);
    throw error;
  }
};

export const getUserById = (_id) => User.findOne(_id);
