const monday = {
    T10_00 : ["MATHM-129", "MBH", 304],
    T11_30 : ["EENG-122", "TA", " LAB-06"]
};
const tuesday = {
    T08_30 : ["CSEC-121", "IZA", " LAB-1"],
    T10_00 : ["MATHM-123", "NAD", " EEE-703"],
    T11_30 : ["EENG-121", "TA", " EEE-703"]
};
const wednesday = {
    T11_30 : ["MATHM-129", "MBH", 604],
    T02_00 : ["MATHM-123", "NAD", 603],
    T03_30 : ["CSEC-122", "IZA", " LAB-08"]
};
const thursday = {
    T08_30 : ["EENG-122", "TA", " LAB-06"],
    T10_00 : ["CSEC-122", "IZA", " LAB-08"],
    T11_30 : ["EENG-121", "TA", 102],
    T02_00 : ["CSEC-121", "IZA", 603]
};
const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const runUp = document.querySelector(".run-up");
const clsCode = document.querySelector(".cls-code");
const teacher = document.querySelector(".teacher span");
const room = document.querySelector(".room span");
const timeStatus = document.querySelector(".time-status");
const time = document.querySelector(".time");

const nextCls1 = document.querySelector(".card-1 .next-cls-code");
const nextTeacher1 = document.querySelector(".card-1 .next-teacher span");
const nextRoom1 = document.querySelector(".card-1 .next-room span");

const nextCls2 = document.querySelector(".card-2 .next-cls-code");
const nextTeacher2 = document.querySelector(".card-2 .next-teacher span");
const nextRoom2 = document.querySelector(".card-2 .next-room span");

const nextCls3 = document.querySelector(".card-3 .next-cls-code");
const nextTeacher3 = document.querySelector(".card-3 .next-teacher span");
const nextRoom3 = document.querySelector(".card-3 .next-room span");

const noCls = document.querySelector(".no-cls");



function main() {
    const d = new Date();
    const day = 5; // for test

    function clsComponent(clsStatus, clsnNow, timeStatusNow) {
        runUp.innerHTML = clsStatus;
        if (clsStatus == "Upcomming") {
            runUp.style.backgroundColor = "var(--yallow-color)";
        }
        clsCode.innerHTML = clsnNow[0];
        teacher.innerHTML = clsnNow[1];
        room.innerHTML = clsnNow[2];
        timeStatus.innerHTML = timeStatusNow;
        if (timeStatusNow == "Next Class") {
            time.style.display = "block";
        }
        time.innerHTML = `00:00:00`;
    }

    if (day == 5) {
        clsComponent("Upcomming", monday.T10_00, "Next Class");
    }
};

setInterval(main, 1000);
