const sequelize = require("../util/database");

const Sequelize = require("sequelize");

// exports.saveProducts = ({ title, price, description, imageUrl }) => {
//   return db.execute(
//     "INSERT INTO products ( title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
//     [title, price, description, imageUrl]
//   );
// };

// exports.fetchall = () => {
//   return db.execute("select *from products");
// };

// exports.getProductById = (id) => {
//   return db.execute("SELECT * FROM products WHERE id=?", [id]);
// };

const Products = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Products;
