const express = require("express");
const router = express.Router();

const {
    getOrCreateWatchLaterByUserId,
} = require("../controllers/params.controllers");
const {
    getWatchLater,
    addVideoToWatchLater,
    removeVideoFromWatchLater,
} = require("../controllers/watchLater.controllers");

router.param("user", getOrCreateWatchLaterByUserId);
router.get("/:user", getWatchLater);

router.post("/:user", addVideoToWatchLater);
router.delete("/:user", removeVideoFromWatchLater);

module.exports = router;
