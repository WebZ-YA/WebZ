// تغيير لون الهيدر عند التمرير
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#007bff";
    header.style.color = "#fff";
  } else {
    header.style.background = "#fff";
    header.style.color = "#333";
  }
});