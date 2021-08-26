import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";
import Comment from "./Comment.js";

Product.belongsTo(Category, {
    onDelete: "cascade", 
    foreignKey: { allowNull: false }, // to prevent null
});
Category.hasMany(Product, {
    onDelete: "cascade", 
    foreignKey: { allowNull: false },
});

Comment.belongsTo(User);
User.hasMany(Comment);

Comment.belongsTo(Product);
Product.hasMany(Comment);


export default { Category, Product, User, Comment };