const express = require("express");
const { exec } = require("child_process");

const app = express();

const rateLimit = require("express-rate-limit");

const runLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20
});

app.get("/run", runLimiter, (req, res) => {

    const command = req.query.cmd;

    const allowedCommands = {
        date: "date",
        uptime: "uptime"
    };

    const cmd = allowedCommands[req.query.cmd];

    if (!cmd) {
        return res.status(400).send("Invalid command");
    }

    exec(cmd);

    res.send("Executed");
});

app.listen(3000);