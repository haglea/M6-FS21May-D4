import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Product = sequelize.define(
  "product", 
  {
  id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  },
  {
    schema: "development",
  }
);

export default Product;