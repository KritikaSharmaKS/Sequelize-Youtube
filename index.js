const User = require("./models/user");
const sequelize = require("./util/database");

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(() => {
//     console.error("Unable to connect to the database:", error);
//   });

sequelize
  //   .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findAll();
  })
  .then(() => {
    console.log("All users:");
  })
  .catch((err) => console.error(err));
