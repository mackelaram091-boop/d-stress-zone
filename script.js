function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let error = document.getElementById("error");
  let success = document.getElementById("success");

  error.innerHTML = "";
  success.innerHTML = "";

  if (!name || !email || !phone || !message) {
    error.innerHTML = "All fields are required!";
    return false;
  }

  success.innerHTML = "Message sent successfully!";
  return false;
}