module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
      cod: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      precioU: {
        type: Sequelize.STRING
      },
      precioD: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });

    return Producto;
  };
