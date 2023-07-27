module.exports = app => {
  const clients = require("../controllers/cliente.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", clients.create);

  // Retrieve all Tutorials
  router.get("/", clients.findAll);

  // Retrieve all published Tutorials
  router.get("/published", clients.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", clients.findOne);

  // Update a Tutorial with id
  router.put("/:id", clients.update);

  // Delete a Tutorial with id
  router.delete("/:id", clients.delete);

  // Delete all productos
  router.delete("/", clients.deleteAll);

  app.use('/api/cliente', router);
};
