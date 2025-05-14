const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all recipes
router.get('/', (req, res) => {
    db.query('SELECT * FROM recipes', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add a new recipe
router.post('/', (req, res) => {
    const { title, description, ingredients, instructions } = req.body;
    const sql = 'INSERT INTO recipes (title, description, ingredients, instructions) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, ingredients, instructions], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ id: result.insertId, ...req.body });
    });
});

module.exports = router;
