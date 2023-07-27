module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("cliente", {
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
    nit: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Cliente;
};
