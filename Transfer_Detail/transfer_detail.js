const amount = document.getElementById("amount");
const note = document.getElementById("notes");
const form = document.querySelector("form");
const form2 = document.querySelector(".form2");
const amount_error = document.getElementById("amount_error");
const notes_error = document.getElementById("notes_error");
const pin = document.querySelectorAll(".pin-input");
const btn_submit = document.querySelector(".btn-submit");
let modal_hide = document.querySelector(".modal-close");
let modal_hide2 = document.querySelector(".modal-close2");
let modal_hide3 = document.querySelector(".modal-close3");
let modal_container = document.querySelector(".modal-container");
let modal_container2 = document.querySelector(".modal-container2");
let modal_container3 = document.querySelector(".modal-container3");
let modal_pin = document.querySelector(".modal-pin");
let modal_success = document.querySelector(".modal-success");
let modal_failed = document.querySelector(".modal-failed");

const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");
console.log(menuList);

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validasi apabila form tidak diisi
  if (amount.value == "") {
    amount_error.innerHTML = "Amount tidak boleh kosong";
  } else {
    amount_error.innerHTML = "";
  }

  // validasi apabila form diisi
  if (amount.value == "1000") {
    e.preventDefault();
    modal_container.classList.add("active");
    modal_container.classList.add("fade-in");
    modal_container.classList.remove("fade-out");

    modal_hide.addEventListener("click", function (e) {
      e.stopPropagation();
      modal_container.classList.add("fade-out");
      modal_container.classList.remove("fade-in");
      setTimeout(function () {
        modal_container.classList.remove("active");
      }, 700);
    });

    modal_container.addEventListener("click", function (e) {
      e.stopPropagation();
      modal_container.classList.add("fade-out");
      modal_container.classList.remove("fade-in");
      setTimeout(function () {
        if (e.target == modal_container) {
          modal_container.classList.remove("active");
        }
      }, 700);
    });

    // validasi apabila form pin
    form2.addEventListener("submit", function (e) {
      e.preventDefault();
      // validasi apabila pin benar
      if (
        pin[0].value == "1" &&
        pin[1].value == "2" &&
        pin[2].value == "3" &&
        pin[3].value == "4" &&
        pin[4].value == "5" &&
        pin[5].value == "6"
      ) {
        e.preventDefault();
        modal_container.classList.remove("active");
        modal_container2.classList.add("active");
        modal_container2.classList.add("fade-in");
        modal_container2.classList.remove("fade-out");

        modal_hide2.addEventListener("click", function (e) {
          e.stopPropagation();
          modal_container2.classList.add("fade-out");
          modal_container2.classList.remove("fade-in");
          setTimeout(function () {
            modal_container2.classList.remove("active");
          }, 700);
        });

        modal_container2.addEventListener("click", function (e) {
          e.stopPropagation();
          modal_container2.classList.add("fade-out");
          modal_container2.classList.remove("fade-in");
          setTimeout(function () {
            if (e.target == modal_container2) {
              modal_container2.classList.remove("active");
            }
          }, 700);
        });
      }
      // validasi apabila pin salah
      else {
        e.preventDefault();
        modal_container.classList.remove("active");
        modal_container3.classList.add("active");
        modal_container3.classList.add("fade-in");
        modal_container3.classList.remove("fade-out");

        modal_hide3.addEventListener("click", function (e) {
          e.stopPropagation();
          modal_container3.classList.add("fade-out");
          modal_container3.classList.remove("fade-in");
          setTimeout(function () {
            modal_container3.classList.remove("active");
          }, 700);
        });

        modal_container3.addEventListener("click", function (e) {
          e.stopPropagation();
          modal_container3.classList.add("fade-out");
          modal_container3.classList.remove("fade-in");
          setTimeout(function () {
            if (e.target == modal_container3) {
              modal_container3.classList.remove("active");
            }
          }, 700);
        });
      }
    });
  }
});
