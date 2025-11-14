// Import npm packages
import chalk from 'chalk';
import figlet from 'figlet';

// Generate stylized text using figlet
figlet('Welcome to Node.js', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }

  // Print the text in color using chalk
  console.log(chalk.greenBright(data));
});
