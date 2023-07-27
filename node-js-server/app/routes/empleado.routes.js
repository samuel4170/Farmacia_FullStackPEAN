module.exports = app => {
    const empleads = require("../controllers/empleado.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", empleads.create);
  
    // Retrieve all Tutorials
    router.get("/", empleads.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", empleads.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", empleads.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", empleads.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", empleads.delete);
  
    // Delete all Tutorials
    router.delete("/", empleads.deleteAll);
  
    app.use("/api/empleado", router);
  };