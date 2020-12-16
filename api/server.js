const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Routers

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

// API

const server = express();



server.use(helmet());
server.use(cors());
server.use(express.json());



server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.use('/', (req, res) => { 
    res.send(<h2>API is working now</h2>); 
});

module.exports = server; 