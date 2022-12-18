const cache = require("../modals/cache");

const saveCache = async(request, translatedText) => {
    try {
        await cache.Cache.create({
            text: request.text,
            translatedText: translatedText[0],
            targetLanguage: request.destinationLanguage,
        });
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    saveCache
}