const Liked = require("../models/liked");

const getLiked = async (req, res) => {
    try {
        const liked = req.liked;
        res.status(200).json({
            success: true,
            liked,
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
        let liked = req.liked;
        const video = req.body;
        liked.likedVideos.push({
            video: video._id,
        });
        const updatedLiked = await liked.save();
        res.status(200).json({
            success: true,
            updatedLiked,
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
        const video = req.body;

        liked.likedVideos = liked.likedVideos.filter(
            (item) => item.video.toString() !== video._id
        );
        const updatedLiked = await liked.save();
        res.status(200).json({
            success: true,
            updatedLiked,
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
