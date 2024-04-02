var main = document.getElementById("main");

// function getGreetingForLanguage(language) {
//   if (language === "French") {
//     return "Bonjour";
//   } else if (language === "Spanish") {
//     return "Hola";
//   } else if (language === "German") {
//     return "Guten Tag";
//   } else {
//     return "Hello";
//   }
// }
// function getUserGreeting(language, firstName, lastName) {
//   var greetingWord = getGreetingForLanguage(language);
//   var greeting = greetingWord + "," + " " + firstName + " " + lastName;
//   return greeting;
// }

// function getUserGreeting(language, firstName, lastName) {
//   return (
//     getGreetingForLanguage(language) + "," + " " + firstName + " " + lastName
//   );
// }

// main.innerHTML = getUserGreeting("Spanish", "R", "A");

// function getDisplayName(user) {
//   if (user && user.username) {
//     return user.username;
//   }
//   return "Guest";
// }

let attempts = 4;
let maxNumberOfMessages = 3;
let numberOfMessages = 0;

function getMessageString(attempts) {
  let messageString = "";
  for (let i = 1; i <= attempts && i <= maxNumberOfMessages; i++) {
    messageString += "Attempt " + i + "\n";
  }
  return messageString;
}

function displayMessages(messageString) {
  if (messageString.length && numberOfMessages) {
    console.log(messageString);
  }
}

function showAttempts(numAttempts) {
  const messageString = getMessageString(numAttempts);
  displayMessages(messageString);
}

main.innerHTML = showAttempts(attempts);
