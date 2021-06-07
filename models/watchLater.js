const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchLaterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    watchLaterVideo: [
        {
            video: { type: Schema.Types.ObjectId, ref: "Video" },
        },
    ],
});

const WatchLater = mongoose.model("WatchLaterSchema", WatchLater);
module.exports = WatchLater;
