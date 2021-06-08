const express = require("express");
const router = express.Router();

const {
    getOrCreateLikedByUserId,
} = require("../controllers/params.controllers");
const {
    getLiked,
    addVideoToLiked,
    removeVideoFromLiked,
} = require("../controllers/liked.controllers");

router.param("user", getOrCreateLikedByUserId);
router.get("/:user", getLiked);

router.post("/:user", addVideoToLiked);
router.delete("/:user", removeVideoFromLiked);

module.exports = router;
