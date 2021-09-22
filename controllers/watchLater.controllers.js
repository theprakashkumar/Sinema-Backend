const WatchLater = require("../models/watchLater");

const getWatchLater = async (req, res) => {
    try {
        const watchLater = req.watchLater;
        res.status(200).json({
            success: true,
            watchLater,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Accessing Watch Later Video!",
            errorMessage: err.message,
        });
    }
};

const addVideoToWatchLater = async (req, res) => {
    try {
        let watchLater = req.watchLater;
        const videoId = req.body.videoId;
        watchLater.watchLaterVideos.push(videoId);
        const updatedWatchLater = await watchLater.save();
        res.status(200).json({
            success: true,
            updatedWatchLater,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Adding Video to watch Later!",
            errorMessage: err.message,
        });
    }
};

const removeVideoFromWatchLater = async (req, res) => {
    try {
        let watchLater = req.watchLater;
        const videoId = req.body.videoId;

        watchLater.watchLaterVideos.splice(
            watchLater.watchLaterVideos.indexOf(videoId),
            1
        );

        const updatedWatchLater = await watchLater.save();
        res.status(200).json({
            success: true,
            updatedWatchLater,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message:
                "Something Went Wrong While Removing Video From watchLater!",
            errorMessage: err.message,
        });
    }
};

module.exports = {
    getWatchLater,
    addVideoToWatchLater,
    removeVideoFromWatchLater,
};
