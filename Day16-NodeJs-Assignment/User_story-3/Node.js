// Get the name from command line arguments
const name = process.argv[2];

// Check if name is provided
if (!name) {
  console.log("Please provide your name, e.g., node Node.js Nitin");
  process.exit(1);
}

// Get current date and time
const now = new Date();

// Format date/time as readable string
const dateTime = now.toLocaleString('en-US', { 
  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  hour: '2-digit', minute: '2-digit', hour12: true
});

// Output greeting
console.log(`Hello, ${name}! Today is ${dateTime}`);

