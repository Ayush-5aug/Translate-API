const express = require('express');
const TranslatorController = require("../controller/translatorController");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RequestBody:
 *       type: object
 *       required:
 *         - text
 *         - destinationLanguage
 *       properties:
 *         text:
 *           type: string
 *           description: The text to be translated
 *         destinationLanguage:
 *           type: string
 *           description: The translation language code
 *       example:
 *         text: Hello Boy
 *         destinationLanguage: hi
 */

 /**
  * @swagger
  * tags:
  *   name: Translate
  *   description: The Translator API
  */

/**
 * @swagger
 * /api/translateText:
 *   post:
 *     summary: Translate the text
 *     tags: [Translate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RequestBody'
 *     responses:
 *       200:
 *         description: The text was successfully translated
 *         content:
 *           string:
 *             schema:
 *               $ref: '#/components/schemas/RequestBody'
 *       500:
 *         description: Some server error while translating
 */
router.post("/translateText",TranslatorController.getTranslatedText);

module.exports = {
    router
}
