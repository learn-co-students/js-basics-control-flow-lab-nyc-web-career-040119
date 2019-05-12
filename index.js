let message= ''

function scuberGreetingForFeet(feet){
  if (feet > 2500) {
   message = "No can do.";
  } else if (feet <= 400) {
    message = "This one is on me!";
  } else if (feet > 2000) {
    message = "I will gladly take your thirty bucks.";
  }
   return message }

function ternaryCheckCity(city){
  if (city === "NYC") {
  message = "Ok, sounds good.";
}
  else if (city !== "NYC")
  message = "No go.";
return message }


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
    }
  }
