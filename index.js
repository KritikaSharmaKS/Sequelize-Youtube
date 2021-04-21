const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

sequelize
  .sync({ force: true })
//   .sync()
  .then((result) => {
    return Customer.findAll();
  })
  .then(() => {
    console.log("All users:");
  })
  .catch((err) => console.error(err));
