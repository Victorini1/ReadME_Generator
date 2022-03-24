const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'Title',
      message: 'What is the title of your project?',
      type: 'input',
    },
    {
      name: 'Description',
      message: 'Please provide a description of your project.',
      type: 'input',
    },
    {
      name: 'Installation',
      message: 'How do you install the application?',
      type: 'input',
    },
    {
      name: 'License',
      message: 'Which liscense will you give this project?',
      type: 'checkbox',
      choices: ['MIT', ]
    },
    {
        name: 'Contributions',
        message: 'Any contributors for this application?',
        type: 'input',
    },
    {
        name: 'Tests',
        message: 'Is there a test included?',
        type: 'input',
    },
    {
        name: 'Contact',
        message: 'What do I do if I have an issue? ',
        type: 'input',
    },
    {
        name: 'Github',
        message: 'Please enter your GitHub username: ',
        type: 'input',
    },
    {
        name: 'Email',
        message: 'Please enter your email: ',
        type: 'input',
    }
])
   
  .then((response) =>
      console.log(response)
  );
