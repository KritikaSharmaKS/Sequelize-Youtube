const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);

let customerId = null;
sequelize
  .sync({ force: true })
  //   .sync()
  .then(() => {
    return Customer.create({ name: "Chandler Bing", email: "cb@gmail.com" });
  })
  .then((customer) => {
    customerId = customer.id;
    console.log("Customer created, id is : ", customer.id);
    return customer.createOrder({ total: 34.99 });
  })
  .then((order) => {
    console.log("Order created, id is : ", order.id);
    return Order.findAll( { where: { customerId } });
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((err) => console.error(err));
