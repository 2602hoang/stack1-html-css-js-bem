function toggleMenu() {
  const menu = document.querySelector(".header__menu");
  menu.classList.toggle("active");
}

// Đảm bảo rằng JavaScript chỉ chạy khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header--mobile__menu");
  menuButton.addEventListener("click", toggleMenu);
});
