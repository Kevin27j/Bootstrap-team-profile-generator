# Bootstrap-team-profile-generator
![License: Mozilla](https://img.shields.io/badge/License-Mozilla-yellow.svg)

## Description

A CLI application to generate a team profile HTML page

## Table of Contents
        
- [Bootstrap-team-profile-generator](#bootstrap-team-profile-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Built with](#built-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Test](#test)
  - [Author](#author)
  - [Sources](#sources)

## Built with

- HTML
- CSS
- Javascript
- Node
- Inquirer
- Jest

## Installation

To install necessary dependencies, run the following command:

```
npm install
```

## Usage

You can use this applicaiton by running: `node index.js`

## License

This project is licensed under the MIT license

## Test

To run tests, run the following command:
​
```
npm test
```

## Author

[Kevin27j](https://github.com/Kevin27j)

## Sources

- Inquirer validation method for emails (index.js/line43):
  ```
  validate: function (email) {
                  // Regex mail check (return true if valid mail)
                  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
              }
  ```
  [source](https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm)

- Function to capitalize first letter of each word (index.js/line179):
  ```
  const stringCapitalize = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
  };

  ```
  [source](https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript)

