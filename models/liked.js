const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likedVideos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        },
    ],
});

const Liked = mongoose.model("Liked", LikedSchema);
module.exports = Liked;
