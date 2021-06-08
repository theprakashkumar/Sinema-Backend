const express = require("express");
const router = express.Router();

const { getVideoByVideoId } = require("../controllers/params.controllers");
const {
    addNewVideo,
    getAllVideos,
    getVideoDetails,
} = require("../controllers/video.controllers");

router.get("/", getAllVideos);
router.post("/", addNewVideo);

router.param("id", getVideoByVideoId);
router.get("/:id", getVideoDetails);

module.exports = router;
