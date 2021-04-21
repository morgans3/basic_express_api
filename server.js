// @ts-check
(async () => {
  const app = require("./app");
  const port = process.env.PORT || 8080;

  process.env.TZ = "Europe/London";
  app.listen(port);
  console.log("RESTful API now Live on Port: " + port);
})();
