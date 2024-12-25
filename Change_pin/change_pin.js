const input = document.querySelectorAll(".pin-input");
const form = document.querySelector("form");
const pin_error = document.getElementById("pin_error");
console.log(input);

const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");

console.log(menuList);

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    input[0].value == "" ||
    input[1].value == "" ||
    input[2].value == "" ||
    input[3].value == "" ||
    input[4].value == "" ||
    input[5].value == ""
  ) {
    pin_error.innerHTML = "Pin tidak boleh kosong";
    return;
  } else {
    pin_error.innerHTML = "";
  }

  if (
    input[0].value != 1 ||
    input[1].value != 1 ||
    input[2].value != 1 ||
    input[3].value != 1 ||
    input[4].value != 1 ||
    input[5].value != 1
  ) {
    pin_error.innerHTML = "Pin salah";
    return;
  } else {
    pin_error.innerHTML = "";
  }

  if (
    input[0].value == 1 &&
    input[1].value == 1 &&
    input[2].value == 1 &&
    input[3].value == 1 &&
    input[4].value == 1 &&
    input[5].value == 1
  ) {
    location.href =
      "http://127.0.0.1:5501/Edit_Pofile_Successed/edit_succes.html";
  }
});
