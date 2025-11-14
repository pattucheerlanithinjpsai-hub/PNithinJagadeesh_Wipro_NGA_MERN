const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'feedback.txt');
const userInput = "Node.js is awesome!"; 

async function handleFeedback() {
  try {
    await fs.writeFile(filePath, userInput);
    console.log('Data written successfully.');
    console.log('Reading file...');
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

handleFeedback();
