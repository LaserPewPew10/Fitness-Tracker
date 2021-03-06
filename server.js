// DEPENDECIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// PORT
const PORT = process.env.PORT || 3000;

const app = express();

// application middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connecting to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Listen on PORT
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
