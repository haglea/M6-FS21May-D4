import express from "express";
import { syncSequelize } from "./db/index.js";
import cors from "cors";
import categoryRoutes from "./services/categories/index.js";
import productRoutes from "./services/products/index.js";
import userRoutes from "./services/users/index.js";
import commentRoutes from "./services/comments/index.js";

const server = express();
const port = process.env.PORT || 5001;
server.use(cors());

server.use(express.json());
server.use("/categories", categoryRoutes);
server.use("/products", productRoutes);
server.use("/users", userRoutes);
server.use("/comments", commentRoutes);

server.listen(port, async () => {
    console.log(`Server running at ${port}/`);
    await syncSequelize();
  });
  
server.on("error", (error) =>
    console.log(error)
  );