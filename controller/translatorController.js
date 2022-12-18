const {Translate} = require('@google-cloud/translate').v2;
const caching = require("../caching/caching")
const dotenv = require('dotenv').config();
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const expressAsyncHandler = require("express-async-handler");

const getTranslatedText = expressAsyncHandler(async (req, res) => {
    try {
        let translatedText = await translate.translate(req.body.text, req.body.destinationLanguage);
        await caching.saveCache(req.body, translatedText)
        res.send(req.body.text + " --> " + translatedText[0]);
        precache(req.body);
    } catch (error) {
        res.status(500).send(`Error while translating text --> ${error}`)
    }
});

// Assuming that if a user translates a text into Hindi, he is likely to also translate the same text to Italy.
// Now this information for pre caching can come from some DB  
const precache = async (request) => {
    let translatedText = await translate.translate(request.text, "it");
    request.destinationLanguage = "it";
    await caching.saveCache(request, translatedText);
}

exports.getTranslatedText = getTranslatedText;
