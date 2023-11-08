const express = require("express")
const route = require("./routes/kehadiran")
const mongoose = require("./config/mongoose");
const kehadiranModel = require("./models/kehadiran");
const app = express()

app.use(route)

mongoose();

const port = 3000

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}` )
})