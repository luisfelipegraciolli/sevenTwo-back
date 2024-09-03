const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["Authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    try {
        jwt.verify(token, process.env.JWT);
        next();
    } catch (error) {
        res.status(400).json({ error: "O token é invalido" });
    }
};
module.exports = { authenticateToken };
