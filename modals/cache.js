const mongoose = require("mongoose");

const cacheSchema = mongoose.Schema(
    {
        text : {
            type : String,
        },
        translatedText : {
            type : String,
        },
        targetLanguage : {
            type : String,
        },
    },
    {
        timestamp: true,
    }
);

const Cache = mongoose.model("cache", cacheSchema);

module.exports = {
    Cache
}
