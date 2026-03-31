const express = require("express");
const app = express();
const path = require("node:path");
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

// app.get("/", (req, res) => {
//   res.send("🚀 Server running perfectly!");
// });

// app.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!" });
// });

// app.get("/", (req, res) => {
//   res.render("index", { links: links });
// });

app.post("/api/contact", (req, res) => {
  console.log("📩 Message received:", req.body);
  res.json({ success: true, message: "Message sent successfully!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Views Chapter
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
