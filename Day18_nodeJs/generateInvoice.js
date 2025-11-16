//generatingInvoice.js

async function generateInvoice(PaymentMsg) {
    console.log("Generating invoice...");

    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(`Invoice generated successfully! Payment Details: ${PaymentMsg}`);
        }, 1500);
    });
}

module.exports = generateInvoice;

