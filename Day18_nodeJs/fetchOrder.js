function fetchOrder(orderId, callback) {
    console.log("Fetching order...");

    setTimeout(() => {
        if (!orderId) {
            return callback("Order ID not provided", null);
        }

        const order = { id: orderId, item: "Laptop", amount: 50000 };
        callback(null, order);
    }, 2000);
}

module.exports = fetchOrder;
