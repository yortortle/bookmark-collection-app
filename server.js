const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static('public'));

const bookController = require("./controllers/bookmark.js");
app.use("/bookmarks", bookController)

app.get("/test", (req, res) => {
  res.send("hi")
})

app.listen(3000, () => {
  console.log("listen");
})

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
