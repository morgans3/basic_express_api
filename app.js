// @ts-check

// SETUP
// =============================================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// GLOBAL VARIABLES
const example = require("./routes/example");

// SWAGGER SETUP
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = {
  basePath: "/",
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
};
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};
// @ts-ignore
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// SETTINGS FOR OUR API
// =============================================================================
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
app.use("/example", example);
app.get("/", (req, res) => {
  res.send("Invalid endpoint");
});

// EXPORT APP
// =============================================================================
module.exports = app;
