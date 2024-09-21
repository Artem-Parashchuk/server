import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getEvents, getUser, getUserById } from "./services/eventService.js";

dotenv.config();

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json()); // Додаємо обробку JSON для POST/PUT запитів

  // Маршрут для отримання всіх користувачів
  app.get("/api/users", async (req, res) => {
    try {
      const data = await getUser();
      res.status(200).json({
        status: 200,
        message: "Users fetched successfully",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server Error",
        data: {
          message: error.message,
        },
      });
    }
  });

  // Маршрут для створення нового користувача
  app.post("/api/users", async (req, res) => {
    try {
      const { userName, userEmail, userBirth, event } = req.body;

      if (!userName || !userEmail || !userBirth || !event) {
        return res.status(400).json({
          status: 400,
          message: "Missing required fields",
        });
      }

      const newUser = {
        userName,
        userEmail,
        userBirth,
        event,
      };

      let users = [];
      const saveUser = async (user) => {
        users.push(user); // Додаємо користувача в масив
        return user; // Повертаємо нового користувача
      };

      const savedUser = await saveUser(newUser)

      res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: savedUser, // Надсилаємо назад дані нового користувача
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server Error",
        data: {
          message: error.message,
        },
      });
    }
  });

  // Маршрут для отримання користувача за ID
  app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const data = await getUserById(id);

      if (!data) {
        return res.status(404).json({
          status: 404,
          message: `User with id=${id} not found`,
        });
      }

      res.status(200).json({
        status: 200,
        message: "User fetched by ID successfully",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server Error",
        data: {
          message: error.message,
        },
      });
    }
  });

  // Маршрут для отримання всіх подій
  app.get("/api/events", async (req, res) => {
    try {
      const data = await getEvents();
      res.status(200).json({
        status: 200,
        message: "Events fetched successfully",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Server Error",
        data: {
          message: error.message,
        },
      });
    }
  });

  const PORT = process.env.PORT || 5000; // Додаємо стандартний порт на випадок, якщо .env не буде налаштований
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
