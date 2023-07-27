module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      nit: {
        type: Sequelize.STRING
      },
      codigo: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Proveedor;
  };