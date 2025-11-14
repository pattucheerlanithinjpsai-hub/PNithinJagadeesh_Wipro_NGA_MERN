const fs = require("fs").promises;

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function copyFile() {
    try {
        console.log("Starting async file copy...");

        
        const data = await fs.readFile(__dirname + "/input.txt", "utf8");

       
        await delay(1000);

        
        await fs.writeFile(__dirname + "/output.txt", data);

        console.log("File copied successfully! (Async/Await)");

    } catch (err) {
        console.log("Error:", err.message);
    }
}

copyFile();