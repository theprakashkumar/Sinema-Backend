const Liked = require("../models/liked");

const getLiked = async (req, res) => {
    try {
        const liked = req.liked;
        const dataToSend = await liked.populate("likedVideos").execPopulate();
        res.status(200).json({
            success: true,
            liked: dataToSend,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Accessing Liked Video!",
            errorMessage: err.message,
        });
    }
};

const addVideoToLiked = async (req, res) => {
    try {
        const body = req.body;
        let liked = req.liked;
        liked.likedVideos.push(body.videoId);
        const updatedLiked = await liked.save();
        const dataToSend = await updatedLiked
            .populate("likedVideos")
            .execPopulate();
        res.status(200).json({
            success: true,
            liked: dataToSend,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Adding Video to liked!",
            errorMessage: err.message,
        });
    }
};

const removeVideoFromLiked = async (req, res) => {
    try {
        let liked = req.liked;
        const videoId = req.body.videoId;

        liked.likedVideos.splice(liked.likedVideos.indexOf(videoId), 1);
        const updatedLiked = await liked.save();
        const dataToSend = await updatedLiked
            .populate("likedVideos")
            .execPopulate();
        res.status(200).json({
            success: true,
            liked: dataToSend,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Removing Video From Liked!",
            errorMessage: err.message,
        });
    }
};

module.exports = {
    getLiked,
    addVideoToLiked,
    removeVideoFromLiked,
};
