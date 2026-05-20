const express = require("express");
const db = require("../db");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", auth, (req, res) => {
  const { name, blood_group, location, phone } = req.body;

  db.query(
    "INSERT INTO donors (user_id, name, blood_group, location, phone) VALUES (?, ?, ?, ?, ?)",
    [req.user.id, name, blood_group, location, phone],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Donor added" });
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM donors", (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
});

router.get("/search", (req, res) => {
  const { blood_group } = req.query;

  db.query(
    "SELECT * FROM donors WHERE blood_group = ?",
    [blood_group],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json(result);
    }
  );
});

module.exports = router;