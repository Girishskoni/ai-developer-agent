const db = require("../config/db");

// ✅ REGISTER
exports.register = (req, res) => {

  console.log("BODY RECEIVED:", req.body);

  if (!req.body) {
    return res.status(400).json({ error: "No body received" });
  }

  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "User registered successfully" });
  });
};


// ✅ LOGIN (OUTSIDE register)
exports.login = (req, res) => {

  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: results[0]
    });
  });
};
