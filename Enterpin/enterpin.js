const input = document.querySelectorAll(".pin-input");
const form = document.querySelector("form");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    input[0].value == "" ||
    input[1].value == "" ||
    input[2].value == "" ||
    input[3].value == "" ||
    input[4].value == "" ||
    input[5].value == ""
  ) {
    error_message.innerHTML = "Pin tidak boleh kosong";
    return;
  } else {
    error_message.innerHTML = "";
  }

  if (
    input[0].value != "1" ||
    input[1].value != "2" ||
    input[2].value != "3" ||
    input[3].value != "4" ||
    input[4].value != "5" ||
    input[5].value != "6"
  ) {
    error_message.innerHTML = "Pin salah";
    return;
  } else {
    error_message.innerHTML = "";
  }

  if (
    input[0].value == "1" &&
    input[1].value == "2" &&
    input[2].value == "3" &&
    input[3].value == "4" &&
    input[4].value == "5" &&
    input[5].value == "6"
  ) {
    window.location.href =
      "http://127.0.0.1:5501/Forgot_password/forgot_pwd.html";
  }
});
