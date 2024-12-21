const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_pwd = document.getElementById("confirm_password");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const confirm_password_error = document.getElementById(
  "confirm_password_error"
);
const form = document.querySelector("form");
const toggler = document.querySelector("#toggler");
const toggler2 = document.querySelector("#toggler2");

showHidePassword = () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    toggler.classList.add("fa-eye-slash");
  } else {
    toggler.classList.remove("fa-eye-slash");
    password.setAttribute("type", "password");
  }
};
toggler.addEventListener("click", showHidePassword);

showHidePassword2 = () => {
  if (confirm_pwd.type == "password") {
    confirm_pwd.setAttribute("type", "text");
    toggler2.classList.add("fa-eye-slash");
  } else {
    toggler2.classList.remove("fa-eye-slash");
    confirm_pwd.setAttribute("type", "password");
  }
};
toggler2.addEventListener("click", showHidePassword2);

form.addEventListener("submit", function (e) {
  const email_check =
    /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/;

  if (email.value == "" || email.value == null) {
    e.preventDefault();
    email_error.innerHTML = "Email tidak boleh kosong";
  } else {
    email_error.innerHTML = "";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "Email tidak valid";
  } else {
    email_error.innerHTML = "";
  }

  if (password.value.length <= 6) {
    e.preventDefault();
    password_error.innerHTML = "Password minimal 6 karakter";
  } else {
    password_error.innerHTML = "";
  }

  if (password.value.length >= 20) {
    e.preventDefault();
    password_error.innerHTML = "Password maksimal 20 karakter";
  }

  if (confirm_password.value.length <= 6) {
    e.preventDefault();
    confirm_password_error.innerHTML = "Password harus sama dengan password";
  } else {
    confirm_password_error.innerHTML = "";
  }

  if (confirm_password.value.length >= 20) {
    e.preventDefault();
    confirm_password_error.innerHTML = "Password maksimal 20 karakter";
  }

  if (password.value !== confirm_password.value) {
    e.preventDefault();
    confirm_password_error.innerHTML = "Password berbeda";
    password_error.innerHTML = "Password berbeda";
  }

  if (
    email.value == "galuh@gmail.com" &&
    password.value == "123123" &&
    confirm_password.value == "123123"
  ) {
    window.location.href = "http://127.0.0.1:5501/Enterpin/enterpin.html";
    // alert("Registrasi Berhasil");
  }
});

// const btnform = document.querySelector("form > button");
// console.log(input, pwd, confirm_pwd, btnform);

// function validate() {
//   if (input.value == "" || password.value == "" || confirm_pwd.value == "") {
//     alert("Email dan Password tidak boleh kosong");
//     return;
//   } else if (
//     input.value != "rizki@example.com" ||
//     password.value != "123" ||
//     confirm_pwd.value != "123"
//   ) {
//     alert("Email atau Password salah");
//     return;
//   } else if (
//     input.value == "rizki@example.com" &&
//     password.value == "123" &&
//     confirm_pwd.value == "123"
//   ) {
//     window.location.href = "http://127.0.0.1:5501/Login/login.html";
//     alert("Register Berhasil");
//     return;
//   }
// }
