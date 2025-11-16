// processPayment.js

function processPayment(order) {
    console.log("Processing payment...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) {
                return reject("No order to process");
            }

            const success = Math.random() > 0.3;

            if (success) {
                resolve(`Payment successful for amount ₹${order.amount}`);
            } else {
                reject("Payment failed due to network issue");
            }
        }, 2000);
    });
}

module.exports = processPayment;
