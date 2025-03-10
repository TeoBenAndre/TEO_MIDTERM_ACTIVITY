const express = require("express");
const sequelize = require("./config/database");
const User = require("./models/User");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route to fetch all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start server
app.listen(PORT, async () => {
    try {
        await sequelize.sync(); // Sync database
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error("Error syncing database:", error);
    }
});
