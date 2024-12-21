const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const fullname_error = document.getElementsByClassName("fullname_error");
const phone_error = document.getElementsByClassName("phone_error");
const email_error = document.getElementsByClassName("email_error");
const form = document.querySelector("form");

const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");
console.log(menuList);

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fullname.value == "") {
    fullname_error[0].innerHTML = "Nama tidak boleh kosong";
  } else {
    fullname_error[0].innerHTML = "";
  }
  if (phone.value == "") {
    phone_error[0].innerHTML = "Phone tidak boleh kosong";
  } else {
    phone_error[0].innerHTML = "";
  }
  if (email.value == "") {
    email_error[0].innerHTML = "Email tidak boleh kosong";
  } else {
    email_error[0].innerHTML = "";
  }
});
