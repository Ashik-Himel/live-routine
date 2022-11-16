const home = document.querySelector(".home");
const routine = document.querySelector(".routine");
const logoText = document.querySelector(".logo-text");
const homeMain = document.querySelector(".home-main");
const routineMain = document.querySelector(".routine-main");
const nextBtn = document.querySelector(".next-btn");
const popClose = document.querySelector(".pop-close");
const popHome = document.querySelector(".pop-home");
const batch = document.querySelector(".batch");
const batchMain = document.querySelector(".batch-main");

function navFunc(arg1, arg2, arg3, arg4, arg5, arg6) {
    arg1.classList.add("active");
    arg2.classList.remove("active");
    arg3.classList.remove("active");
    arg4.style.display = "block";
    arg5.style.display = "none";
    arg6.style.display = "none";
}
home.addEventListener("click", function() {
    if (home.classList.contains("active")) {}
    else {navFunc(home, routine, batch, homeMain, routineMain, batchMain);}
})
routine.addEventListener("click", function() {
    if (routine.classList.contains("active")) {}
    else {navFunc(routine, home, batch, routineMain, homeMain, batchMain);}
})
batch.addEventListener("click", function() {
    if (batch.classList.contains("active")) {}
    else {navFunc(batch, home, routine, batchMain, homeMain, routineMain);}
})
logoText.addEventListener("click", function() {
    if (home.classList.contains("active")) {}
    else {navFunc(home, routine, batch, homeMain, routineMain, batchMain);}
})
nextBtn.addEventListener("click", function() {
    popHome.classList.add("active");
});
popClose.addEventListener("click", function() {
    popHome.classList.remove("active");
});