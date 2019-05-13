function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!";
  }
  else if (ride > 2500) {
    return "No can do.";
  }
  else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  let something;
  city == "NYC" ?  (something = 'Ok, sounds good.') : (something = "No go.");
  return something
}

function switchOnCharmFromTip(tip){


  switch(tip) {
    case 'generous':
      return "Thank you so much.";
      break
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
  // Write your code here!
}
