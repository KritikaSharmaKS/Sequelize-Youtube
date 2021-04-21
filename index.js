const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

sequelize
  .sync({ force: true })
  //   .sync()
  .then(() => {
    return Customer.create({ name: "Chandler Bing", email: "cb@gmail.com" });
  })
  .then((customer) => {
    console.log("Customer created, id is : ", customer.id);
    return customer.createOrder({ total: 34.99 });
  })
  .then((order) => {
    console.log("Order created, id is : ", order.id);
  })
  .catch((err) => console.error(err));
