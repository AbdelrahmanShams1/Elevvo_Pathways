const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const subject = document.querySelector("#subject").value;
const message = document.querySelector("#message").value;

if (name != "") {
  document.querySelector("#name").focus();
  document.querySelector("#name").setCustomValidity("Please enter your name.");
} else if (email != "") {
  document.querySelector("#email").focus();
  document
    .querySelector("#email")
    .setCustomValidity("Please enter your email.");
} else if (subject != "") {
  document.querySelector("#subject").focus();
  document
    .querySelector("#subject")
    .setCustomValidity("Please enter a subject.");
} else if (message != "") {
  document.querySelector("#message").focus();
  document
    .querySelector("#message")
    .setCustomValidity("Please enter a message.");
} else if (name && email && subject && message) {
  alert("Form submitted successfully!");
}
