const express = require("express");

const app = express();

app.get("*", (req, res) => {
  const obj = {
    name: "hasib",
    email: "hasib@gmail.com",
  };
  res.json(obj);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
