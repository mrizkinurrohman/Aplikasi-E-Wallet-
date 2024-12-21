const form = document.querySelector("form");

const change_p = document.getElementById("change_p");
const new_p = document.getElementById("new_p");
const confirm_p = document.getElementById("confirm_p");

const change_password_error = document.getElementById("change_password_error");

console.log(change_password_error);
const new_password_error = document.getElementById("new_password_error");
const confirm_password_error = document.getElementById(
  "confirm_password_error"
);

const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");
console.log(menuList);

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});

showHidePassword = () => {
  if (change_p.type == "password") {
    change_p.setAttribute("type", "text");
    toggler.classList.add("fa-eye-slash");
  } else {
    toggler.classList.remove("fa-eye-slash");
    change_p.setAttribute("type", "password");
  }
};
toggler.addEventListener("click", showHidePassword);

showHidePassword2 = () => {
  if (new_p.type == "password") {
    new_p.setAttribute("type", "text");
    toggler2.classList.add("fa-eye-slash");
  } else {
    toggler2.classList.remove("fa-eye-slash");
    new_p.setAttribute("type", "password");
  }
};
toggler2.addEventListener("click", showHidePassword2);

showHidePassword3 = () => {
  if (confirm_p.type == "password") {
    confirm_p.setAttribute("type", "text");
    toggler3.classList.add("fa-eye-slash");
  } else {
    toggler3.classList.remove("fa-eye-slash");
    confirm_p.setAttribute("type", "password");
  }
};
toggler3.addEventListener("click", showHidePassword3);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (change_p.value.length <= 6) {
    e.preventDefault();
    change_password_error.innerHTML = "Password minimal 6 karakter";
  } else {
    change_password_error.innerHTML = "";
  }

  if (new_p.value.length <= 6) {
    e.preventDefault();
    new_password_error.innerHTML = "Password minimal 6 karakter";
  } else {
    new_password_error.innerHTML = "";
  }

  if (confirm_p.value.length <= 6) {
    e.preventDefault();
    confirm_password_error.innerHTML = "Password minimal 6 karakter";
  } else {
    confirm_password_error.innerHTML = "";
  }
});
