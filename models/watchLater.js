const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchLaterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    watchLaterVideos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

const WatchLater = mongoose.model("WatchLater", WatchLaterSchema);
module.exports = WatchLater;
