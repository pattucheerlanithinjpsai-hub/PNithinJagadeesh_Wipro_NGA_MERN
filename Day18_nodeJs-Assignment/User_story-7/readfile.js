const fs = require("fs");

console.log("Starting file read...");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        return console.log("Error reading file:", err);
    }

    console.log("File Content:", data);
    
    setTimeout(() => {
        console.log("Read operation completed");
    }, 2000);
});

console.log("This shows non-blocking behavior.");
