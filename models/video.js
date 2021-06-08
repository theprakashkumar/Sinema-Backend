const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: {
        type: String,
        required: "Video Name is Required!",
    },
    creator: {
        type: String,
        required: "Video Creator is Required!",
    },
    embedId: {
        type: String,
        require: "Video Link is Required!",
        unique: [true, "Video Link Should Be Unique!"],
    },
    thumbnail: {
        type: String,
        required: "Thumbnail Link is Required!",
        unique: [true, "Thumbnail Link Should Be Unique!"],
    },
    likes: {
        type: String,
        required: "Number of Likes is Required!",
    },
    views: {
        type: String,
        required: "Number of Views is Required!",
    },
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;
