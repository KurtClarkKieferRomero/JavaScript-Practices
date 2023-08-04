const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const userInput = document.getElementById("textInput").value;
    console.log("You entered: " + userInput);
  });