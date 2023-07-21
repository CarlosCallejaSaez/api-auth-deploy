require("dotenv").config();
const express = require("express");
const cors = require("cors");

const rateLimit = require("express-rate-limit");
const { connectionDB } = require('./src/config/db.js');
const mainRouter = require('./src/routes/index.js');

const app = express();
app.use(cors());

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false,
});

app.use(limiter);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-type");
  next();
});
app.disable("x-powered-by");

app.use('/api', mainRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({ data: "Error 404: Page not found" });
});

app.use((error, req, res, next) => {
  res.status(500).json({ data: "Internal Server Error" });
});


connectionDB();


const PORT = Number(process.env.PORT) ;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
