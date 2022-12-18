const express = require('express');
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const translatorRoutes = require("../routes/translatorRoutes");

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Translate API",
        version: "1.0.0",
        description: "A simple Translate API"
      },
      servers: [
        {
          url: "http://localhost:" + process.env.PORT || 5000
        }
      ]
    },
    apis: ["./routes/*.js"]
  };

const specs = swaggerJsDoc(options);

const createServer = () => {
    const app = express();
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use("/api", translatorRoutes.router);
    return app;
}

module.exports = {
    createServer
}