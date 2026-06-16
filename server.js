const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/run", (req, res) => {

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