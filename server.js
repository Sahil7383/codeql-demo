const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/run", (req, res) => {

    const command = req.query.cmd;

    exec(command);

    res.send("Executed");
});

app.listen(3000);