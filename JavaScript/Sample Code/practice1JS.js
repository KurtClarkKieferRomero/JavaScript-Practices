const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function () {
    const userInput = document.getElementById("textInput").value;
    console.log("You entered: " + userInput);
  });