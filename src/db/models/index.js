import sequelize from "../index.js";
import Category from "./Category.js";
import Product from "./Product.js";

Product.belongsTo(Category);
Category.hasMany(Product);

export default { Category, Product, sequelize };