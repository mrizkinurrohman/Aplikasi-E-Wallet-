const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");
console.log(menuList);

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});


