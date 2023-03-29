// Example vulnerable code with a SQL injection vulnerability

const db = require('mydb');

const search = (query) => {
  const sanitizedQuery = sanitizeInput(query);
  const sql = `SELECT * FROM products WHERE name = '${sanitizedQuery}'`;
  return db.query(sql);
};

const sanitizeInput = (input) => {
  const sanitizedInput = input.replace(/'/g, "''");
  return sanitizedInput;
};

const userInput = req.query.name;
search(userInput);