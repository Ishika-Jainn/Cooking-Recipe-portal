const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const db = require('./config/db');
const recipeRoutes = require('./routes/recipes');

app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
