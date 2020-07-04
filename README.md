
# Char Burger Blog

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://quiet-bastion-68986.herokuapp.com/)

## Description

This App allows the user to input a burger they want to eat. That entry is saved to a database. The user can also "devour" a burger they entered that will populate a list of burgers they have eaten. 

## LINK

https://quiet-bastion-68986.herokuapp.com/

## GIF of working App

![NOTETAKER](./Char.gif)

## snippit of code

```
// Creates all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
```

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

NA

## License

This project is licensed under the None license.

## Contributing

NA

## Test

To run tests, run the following command:

```
NA
```

## Questions

If you have any questions about the repo, open an issue or contact [joeyr1984](https://github.com/joeyr1984/) directly at joeyr1984@gmail.com


