
const greet = async () => "hello"

console.log( greet() )
greet().then( ( greeting ) => console.log( greeting ) )

const smileAfterDelay = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("😁");
      }, delay);
    });
  };

const smileAtMe = async () => {
    const smiley = await smileAfterDelay(3000); // wait on this line until promise is resolved or rejected
    console.log(smiley);
  };
  
smileAtMe() // 😁 <-- after 3 seconds
  


// const fetchTrivia = () => {
//     fetch("https://opentdb.com/api.php?amount=1&category=18")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.results[0]);
//       })
//       .catch(console.error);
//   };
  
//   fetchTrivia();

const fetchTrivia = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=1&category=18"
      );
      const data = await response.json();
      console.log(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };
  
 console.log(fetchTrivia()); 
