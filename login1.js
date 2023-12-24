document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform validation and authentication here
    // For the sake of this example, let's assume username: "user" and password: "password"
    if (username === "john" && password === "password") {
      //alert("Login successful!");
      window.location = "project.html"
      // You can redirect the user to the main page or perform other actions here
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});