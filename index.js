const express = require("express");

const router = require("./src/app/routes");

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("SERVIDOR TA ON"));
