const readline = require("readline");
const { getProgrammingLanguageInfo } = require("./03_chatbot.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runChatbot() {
  console.log("Welcome to the Programming Language Information Chatbot!");
  console.log("Type 'exit' to end the conversation.");

  rl.question("Please enter a programming language: ", (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    if (userInput.trim()) {
      const response = getProgrammingLanguageInfo(userInput);
      console.log(response);
    } else {
      console.log("Please enter a valid programming language.");
    }

    runChatbot();
  });
}

runChatbot();