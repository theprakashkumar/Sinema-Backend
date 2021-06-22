const Video = require("../models/video");

const addNewVideo = async (req, res) => {
    try {
        const video = req.body;
        const newVideo = new Video(video);
        const savedVideo = await newVideo.save();
        res.json({
            success: true,
            savedVideo,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to Add New Video",
            errorMessage: err.message,
        });
    }
};

const getAllVideos = async (req, res) => {
    // res.send("h")
    try {
        const video = await Video.find();
        res.json({
            success: true,
            video,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to Fetch Video List From Server",
            errorMessage: err.message,
        });
    }
};

const getVideoDetails = async (req, res) => {
    try {
        const video = req.video;
        res.json({
            success: true,
            video,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Video Not Found With Given Id",
            errorMessage: err.message,
        });
    }
};

module.exports = {
    addNewVideo,
    getAllVideos,
    getVideoDetails,
};
