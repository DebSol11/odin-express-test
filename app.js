const express = require("express");
const app = express();
const path = require("node:path");

app.get("/", (req, res) => {
  res.send("🚀 Server running perfectly!");
});

app.post("/api/contact", (req, res) => {
  console.log("📩 Message received:", req.body);
  res.json({ success: true, message: "Message sent successfully!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Views Chapter
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");