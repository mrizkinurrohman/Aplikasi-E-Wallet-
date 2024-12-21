const email = document.getElementById("email");
const form = document.querySelector("form");
const email_error = document.getElementById("email_error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value == "") {
    email_error.innerHTML = "Email tidak boleh kosong";
    return;
  } else {
    email_error.innerHTML = "";
  }

  if (email.value != "galuh@gmail.com") {
    email_error.innerHTML = "Email salah";
    return;
  }

  if (email.value == "galuh@gmail.com") {
    alert("Verification link sent to your email");
    window.location.href = "http://127.0.0.1:5501/Login/login.html";
    return;
  } else {
    email_error.innerHTML = "";
  }
});

// console.log(email);

// function validate() {
//   if (email.value == "") {
//     alert("Email tidak boleh kosong");
//     return;
//   } else if (email.value != "rizki@example.com") {
//     alert("Email salah");
//     return;
//   } else if (email.value == "rizki@example.com") {
//     alert("Verification link sent to your email");
//     return;
//   }
// }
