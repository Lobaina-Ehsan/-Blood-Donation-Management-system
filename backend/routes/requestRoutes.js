const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, blood_group, location, contact } = req.body;

  db.query(
    "INSERT INTO requests (name, blood_group, location, contact) VALUES (?, ?, ?, ?)",
    [name, blood_group, location, contact],
    (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Request created" });
    }
  );
});

module.exports = router;