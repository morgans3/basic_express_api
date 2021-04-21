// @ts-check
const express = require("express");
const router = express.Router();
const Example = require("../models/example");

/**
 * @swagger
 * tags:
 *   name: Example
 *   description: Example API Methods
 */

/**
 * @swagger
 * /example/getAll:
 *   get:
 *     security:
 *      - JWT: []
 *     description: Returns the entire collection
 *     tags:
 *      - Example
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Full List
 */
router.get("/getAll", (req, res, next) => {
  Example.getAll(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
