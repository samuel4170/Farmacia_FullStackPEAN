module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("venta", {
      nombre: {
        type: Sequelize.STRING
      },
      producto: {
        type: Sequelize.STRING
      },
      cantidad: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      nit: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Venta;
  };