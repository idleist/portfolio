// Node Packages //
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var path = require("path");

const PORT = process.env.PORT;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import Routes
const projects = require("./routes/projects");

// Set Up View Engine for Views folder and Pug //
// app.set("views", "./views");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

// Static Folder Setup //
app.use(express.static(path.join(__dirname, "/public")));

// Projects Routes //
app.use("/projects", projects);

// Primary Routes //
app.get("/", (req, res) => {
  res.render("index");
});

// Contact Form Route
app.post("/contact/send", (req, res) => {
  const output = `
    <p>You have a new message</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  console.log(req.body);
});

// Initialise Server //
app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});


let transporter = nodemailer.createTransport(transport[, defaults])

nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "username",
    pass: "password"
  }
});
