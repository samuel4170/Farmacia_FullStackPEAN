module.exports = {
  HOST: "localhost",
  USER: "fact",
  PASSWORD: "4919",
  DB: "clinica",
  dialect: "mssql",
  dialectOptions: {
    options: {
      trustServerCertificate: true // Solo para desarrollo local con SQL Server
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
 // port: 4000
};



// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "root2022",
//   DB: "farmacia",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };