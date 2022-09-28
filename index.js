const home = document.querySelector(".home");
const routine = document.querySelector(".routine");
const logoText = document.querySelector(".logo-text");
const homeMain = document.querySelector(".home-main");
const routineMain = document.querySelector(".routine-main");
const nextBtn = document.querySelector(".next-btn");
const popClose = document.querySelector(".pop-close");
const popHome = document.querySelector(".pop-home");

function navFunc(arg1, arg2, arg3, arg4) {
    arg1.classList.add("active");
    arg2.classList.remove("active");
    arg3.style.display = "block";
    arg4.style.display = "none";
}
home.addEventListener("click", function() {
    if (home.classList.contains("active")) {}
    else {navFunc(home, routine, homeMain, routineMain);}
})
routine.addEventListener("click", function() {
    if (routine.classList.contains("active")) {}
    else {navFunc(routine, home, routineMain, homeMain);}
})
logoText.addEventListener("click", function() {
    if (home.classList.contains("active")) {}
    else {navFunc(home, routine, homeMain, routineMain);}
})
nextBtn.addEventListener("click", function() {
    popHome.classList.add("active");
});
popClose.addEventListener("click", function() {
    popHome.classList.remove("active");
});