let modal_show = document.querySelector(".modal-show");
let modal_hide = document.querySelector(".modal-close");
let modal_container = document.querySelector(".modal-container");

modal_show.addEventListener("click", function () {
  modal_container.classList.add("active");
  modal_container.classList.add("fade-in");
  modal_container.classList.remove("fade-out");
});

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
