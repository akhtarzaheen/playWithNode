const db = require("../util/database");

let products = [];

// exports.addProduct = (title) => {
//   products.push({ product: title });
// };

exports.saveProducts = ({ title, price, description, imageUrl }) => {
  return db.execute(
    "INSERT INTO products ( title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
    [title, price, description, imageUrl]
  );
};

exports.fetchall = () => {
  return db.execute("select *from products");
};

exports.getProductById = (id) => {
  return db.execute("SELECT * FROM products WHERE id=?", [id]);
};
