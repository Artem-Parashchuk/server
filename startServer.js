import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getEvents, getUser, getUserById } from "./services/eventService.js";

dotenv.config();

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.get("/api/users", async (req, res) => {
    const data = await getUser();
    res.status(200).json({
      status: 200,
      message: "Register user successfully",
      data,
    });
  });

  app.get("/api/users/:id", async (req, res) => {
    const { is } = req.params;

    const data = await getUserById(id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: `User with id=${id} not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: "Register user by ID get successfully",
      data,
    });
  });

  app.get("/api/events", async (req, res) => {
    const data = await getEvents();
    res.status(200).json({
      status: 200,
      message: "Events get successfully",
      data,
    });
  });

  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));
};
