const popup = document.querySelector(".search-popup")
const btn = document.querySelector(".btn-search")

popup.classList.add("hidden-popup")

btn.onclick = function () {
    popup.classList.remove("hidden-popup");
    popup.classList.add("animation-popup")
};