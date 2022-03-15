const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("express is listening on " + port);
});
