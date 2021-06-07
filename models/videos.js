const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: {
        type: String,
        required: "Video Name is Required!",
    },
    videoLink: {
        type: String,
        require: "Video Link is Required!",
        unique: [true, "Video Link Should Be Unique!"],
    },
    thumbnailLink: {
        type: String,
        required: "Thumbnail Link is Required!",
        unique: [true, "Thumbnail Link Should Be Unique!"],
    },
    likes: {
        type: Number,
        required: "Number of Likes is Required!",
    },
    views: {
        type: Number,
        required: "Number of Views is Required!",
    },
});

const Video = mongoose.model(VideoSchema, Video);

module.exports = Video;
