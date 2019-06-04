// Node Packages //

const express = require("express");
const app = express();
var path = require("path");

const PORT = process.env.PORT || 3000;

// Import Routes
const projects = require("./routes/projects");

// Set Up View Engine for Views folder and Pug //
app.set("views", "./views");
app.set("view engine", "pug");

// Static Folder Setup //
app.use(express.static(path.join(__dirname, "/public")));

// Projects Routes //
app.use("/projects", projects);

// Primary Routes //
app.get("/", (req, res) => {
  res.render("index");
});

// Initialise Server //
app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});
