const { sayHi, person, greetingInMandarin } = require("./export.js");
console.log(sayHi(greetingInMandarin, person.firstName, person.lastName));