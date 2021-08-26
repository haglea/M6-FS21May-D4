import express from "express";
import db from "./db/models/index.js";
import cors from "cors";
import categoryRoutes from "./services/categories/index.js";
import productRoutes from "./services/products/index.js";

const server = express();
const port = process.env.PORT;
server.use(cors());

server.use(express.json());
server.use("/categories", categoryRoutes);
server.use("/products", productRoutes);

db.sequelize
 .sync()
 .then(()=>{
  server.listen(port, () => {
    console.log(`Server running at ${port}/`);
  });
  server.on("error", (error) =>
    console.log(error)
  );
 })
 .catch((e)=>console.log(e)); 