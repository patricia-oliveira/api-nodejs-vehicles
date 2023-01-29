const env = require("dotenv").config().parsed;
const app = require('express')();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const vehicles = require('../routes/vehicles');
app.use("/vehicles", vehicles)


app.listen(env.PORT, () => {console.log(`servidor em execução na porta ${env.PORT}`)});