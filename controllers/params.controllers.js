const User = require("../models/user");
const Video = require("../models/video");
const Liked = require("../models/liked");
const WatchLater = require("../models/watchLater");

const getUserById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(500).json({
                success: false,
                message: "Couldn't Get the User With the Given Id!",
                errorMessage: err.message,
            });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Couldn't Fetch the User Data",
            errorMessage: err.message,
        });
    }
};

const getVideoByVideoId = async (req, res, next, id) => {
    try {
        const video = await Video.findById(id);
        if (!video) {
            res.status(400).json({
                message: false,
                message: "Couldn't Get the Video With the Given Id!",
                errorMessage: err.message,
            });
        }
        req.video = video;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message:
                "Something Went Wrong While Accessing Video With the Given Id!",
            errorMessage: err.message,
        });
    }
};

const getOrCreateLikedByUserId = async (req, res, next, id) => {
    try {
        let liked = await Liked.findOne({ user: id });
        if (!liked) {
            newLiked = new Liked({ user: id, video: [] });
            liked = await newLiked.save();
        }
        req.liked = liked;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong While Accessing or Creating Liked!",
            errorMessage: err.message,
        });
    }
};

const getOrCreateWatchLaterByUserId = async (req, res, next, id) => {
    try {
        let watchLater = await WatchLater.findOne({ user: id });
        if (!watchLater) {
            newWatchLater = new WatchLater({ user: id, video: [] });
            watchLater = await newWatchLater.save();
        }
        req.watchLater = watchLater;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message:
                "Something Went Wrong While Accessing or Creating WatchLater!",
            errorMessage: err.message,
        });
    }
};

module.exports = {
    getUserById,
    getVideoByVideoId,
    getOrCreateLikedByUserId,
    getOrCreateWatchLaterByUserId,
};
