const name = process.argv[2];
// console.log(process.argv);
const location = process.argv[3];
// console.log( `Hi, I'm ${ name }! I live in ${ location }` )
// console.log( "process.env:", process.env )
// console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);


// Understanding Rest and spread Operators
// rest op
const myBio = (firstName, LastName, ...otherInfo) =>
{
    return otherInfo
}

console.log( myBio( "Opeyemi", "peter", "softwareEng", "Pastor" ) )

// spread op

const myName = ["Opeyemi", "Peter"]
const aboutMe = ["Pastor", ...myName, "SE"]

console.log( aboutMe )

const person = { name: "Hou", title: "software engineer" };
const personalInfo = { age: 32, location: "Brooklyn, NY" };

const employee = {
  id: 1,
  department: "engineering",
  ...person,
  ...personalInfo,
};

console.log(employee);