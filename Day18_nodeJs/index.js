// index.js

const fetchOrder = require("./fetchOrder");
const processPayment = require("./processPayment");
const generateInvoice = require("./generateInvoice");

fetchOrder(101, (err, order) => {
    if (err) {
        return console.log(err);
    }

    console.log("Order Fetched:", order);

    processPayment(order)
        .then(async (paymentMsg) => {
            console.log(paymentMsg);

            const invoice = await generateInvoice(paymentMsg);
            console.log(invoice);
        })
        .catch((error) => {
            console.log(error);
        });
});
