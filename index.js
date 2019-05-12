function scuberGreetingForFeet(distantce){
  // Write your code here!
  let greeting;
  if (distantce < 199) {
    greeting = 'This one is on me!';
  }
  else if (distantce > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  }
  else if (distantce > 25000) {
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(){
  // Write your code here!
  let tip;
  switch (tip) {
    case 'geners':
    return "Thank you so much."
      break;
      case "not as geners":
        return "Thank you."
        break;
        default:
          return "Bye."
          break;
  }
}
