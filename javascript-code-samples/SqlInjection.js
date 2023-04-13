// Example vulnerable code with a SQL injection vulnerability

const db = require('mydb');

const search = (query) => {
  const sql = `SELECT * FROM products WHERE name = '${query}'`;
  return db.query(sql);
};

const userInput = req.query.name;
search(userInput);
