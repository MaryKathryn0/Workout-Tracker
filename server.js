const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const Workout = require("./models/workout.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
// app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
