const User = require("./models/user");
const sequelize = require("./util/database");

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
