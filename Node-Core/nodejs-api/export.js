const sayHi = (greeting, firstName, lastName) => {
    return `${greeting}, ${firstName}, ${lastName}!`;
  };
  
  const person = {
    firstName: "Hou",
    lastName: "Chia",
  };
  
  let greetingInMandarin = "Ni hao";
  

module.exports = { sayHi, person, greetingInMandarin  };