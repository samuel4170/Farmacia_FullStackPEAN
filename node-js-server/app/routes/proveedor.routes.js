module.exports = app => {
    const proveeds = require("../controllers/proveedor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", proveeds.create);
  
    // Retrieve all Tutorials
    router.get("/", proveeds.findAll);
  
    // Retrieve all published Tutorials
    router.get("/status", proveeds.findAllStatus);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", proveeds.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", proveeds.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", proveeds.delete);
  
    // Delete all Tutorials
    router.delete("/", proveeds.deleteAll);
  
    app.use("/api/proveedor", router);
  };