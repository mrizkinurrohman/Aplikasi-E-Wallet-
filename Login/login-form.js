let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let toggle = document.querySelector(".toggler");
let name_error = document.getElementById("name_error");
let password_error = document.getElementById("password_error");

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

form.addEventListener("submit", function (e) {
  const email_check =
    /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/;

  if (email.value == "" || email.value == null) {
    e.preventDefault();
    name_error.innerHTML = "Email tidak boleh kosong";
  } else {
    name_error.innerHTML = "";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    name_error.innerHTML = "Email tidak valid";
  } else {
    name_error.innerHTML = "";
  }

  if (password.value.length <= 6) {
    e.preventDefault();
    password_error.innerHTML = "Password belum dimasukan";
  } else {
    password_error.innerHTML = "";
  }

  if (password.value.length >= 20) {
    e.preventDefault();
    password_error.innerHTML = "Password maksimal 20 karakter";
  }

  if (password.value == "password") {
    e.preventDefault();
    password_error.innerHTML = "Password tidak boleh sama";
  }

  if (email.value == "galuh@gmail.com" && password.value == "123456") {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5501/Dashboard/dashboard.html";
    // alert("Login Berhasil");
  }
});
