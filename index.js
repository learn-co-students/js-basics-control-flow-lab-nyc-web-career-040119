function scuberGreetingForFeet(someValue){
  // Write your code here!
  let greeting;
  if (someValue <= 400) {
    greeting = 'This one is on me!';
  }else if (someValue >= 2000 && someValue <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
    }else if (someValue > 2500) {
      greeting = 'No can do.';
    }
  return greeting
}

function ternaryCheckCity(city){
  // Write your code here!
   let message; 
  city === 'NYC'? message = 'Ok, sounds good.' : message = 'No go.'
  return message
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let greeting;

switch(tip) {
  case 'generous':
    greeting = "Thank you so much.";
    break
  case 'not as generous':
    greeting = "Thank you.";
    break
  default: 
    greeting = "Bye.";
    break
  }
  return greeting
}