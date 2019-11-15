const express = require("express");
const router = express.Router();
const Bookmark = require("../models/bookmark.js")

router.get("/", (req, res) => {
  Bookmark.find({}, (err, foundBookmark) => {
    res.json(foundBookmark)
  })
})

router.post("/", (req, res) => {
  Bookmark.create(req.body, (err, createdBookmark) => {
    res.json(createdBookmark)
  })
})

router.delete("/:id", (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    res.json(deletedBookmark)
  })
})

router.put("/:id", (req, res) => {
  Bookmark.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (err, updatedBookmark) => {
    res.json(updatedBookmark);
  });
});

module.exports = router;
