function submitForm() {
  // Get the values from the form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("message").value;

  // Validate the form data
  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }
  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  }
  if (country === "") {
    alert("Please select your country");
    return;
  }

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open("POST", "submit-form.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Set up the callback function
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Get the response from the server
      var response = xhr.responseText;

      // Display a success message or an error message
      if (response === "success") {
        alert("Data added successfully!");
        document.getElementById("survey-form").reset();
      } else {
        alert("Error: " + response);
      }
    }
  };

  // Send the request with the form data
  xhr.send("name=" + name + "&email=" + email + "&gender=" + gender + "&country=" + country + "&message=" + message);
}
