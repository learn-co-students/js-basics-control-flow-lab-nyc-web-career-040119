function scuberGreetingForFeet(diveValue){
  // Write your code here!
  if (diveValue <= 400) {
    return "This one is on me!";
  }
  if (diveValue > 2000 && diveValue < 2501) {
    return "I will gladly take your thirty bucks.";
  }
  if (diveValue > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(cityValue){
  // Write your code here!
  let isCity = "NYC";
  return (isCity===cityValue ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tipValue){
  // Write your code here!
  let response;
  switch(tipValue) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    case 'thanks for everything':
      return "Bye.";
      break;
  }
}
