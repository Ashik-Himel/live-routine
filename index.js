const nextBtn = document.querySelector(".next-btn");
const popClose = document.querySelector(".pop-close");
const popHome = document.querySelector(".pop-home");

nextBtn.addEventListener("click", function() {
    popHome.classList.add("active");
});
popClose.addEventListener("click", function() {
    popHome.classList.remove("active");
});