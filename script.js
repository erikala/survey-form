var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please check that you entered a valid e-mail address.");
  } else {
    email.setCustomValidity("");
  }
});
