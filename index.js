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
    arg2.style.display = "block";
    arg3.classList.remove("active");
    arg4.style.display = "none";
}

home.addEventListener("click", function() {
    if (!(home.classList.contains("active"))) {
        navFunc(home, homeMain, routine, routineMain);
    }
});
routine.addEventListener("click", function() {
    if (!(routine.classList.contains("active"))) {
        navFunc(routine, routineMain, home, homeMain);
    }
});
logoText.addEventListener("click", function() {
    if (!(home.classList.contains("active"))) {
        navFunc(home, homeMain, routine, routineMain);
    }
});
nextBtn.addEventListener("click", function() {
    popHome.classList.add("active");
});
popClose.addEventListener("click", function() {
    popHome.classList.remove("active");
});