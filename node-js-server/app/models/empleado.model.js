module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      puesto: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.STRING
      },
      nit: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Empleado;
  };