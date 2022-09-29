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

const nextCard1 = document.querySelector(".card-1");
const nextCls1 = document.querySelector(".card-1 .next-cls-code");
const nextTeacher1 = document.querySelector(".card-1 .next-teacher span");
const nextRoom1 = document.querySelector(".card-1 .next-room span");

const nextCard2 = document.querySelector(".card-2");
const nextCls2 = document.querySelector(".card-2 .next-cls-code");
const nextTeacher2 = document.querySelector(".card-2 .next-teacher span");
const nextRoom2 = document.querySelector(".card-2 .next-room span");

const nextCard3 = document.querySelector(".card-3");
const nextCls3 = document.querySelector(".card-3 .next-cls-code");
const nextTeacher3 = document.querySelector(".card-3 .next-teacher span");
const nextRoom3 = document.querySelector(".card-3 .next-room span");

const nextCard4 = document.querySelector(".card-4");
const nextCls4 = document.querySelector(".card-4 .next-cls-code");
const nextTeacher4 = document.querySelector(".card-4 .next-teacher span");
const nextRoom4 = document.querySelector(".card-4 .next-room span");

const noCls = document.querySelector(".no-cls");

function main() {
    const d = new Date();
    const day = d.getDay();

    let clsT08_30 = new Date();
    clsT08_30.setHours(8);clsT08_30.setMinutes(30);clsT08_30.setSeconds(0);
    let miliT08_30 = clsT08_30 - d;
    let remainT08_30 = new Date(miliT08_30);
    
    let clsT10_00 = new Date();
    clsT10_00.setHours(10);clsT10_00.setMinutes(0);clsT10_00.setSeconds(0);
    let miliT10_00 = clsT10_00 - d;
    let remainT10_00 = new Date(miliT10_00);

    let clsT11_30 = new Date();
    clsT11_30.setHours(11);clsT11_30.setMinutes(30);clsT11_30.setSeconds(0);
    let miliT11_30 = clsT11_30 - d;
    let remainT11_30 = new Date(miliT11_30);

    let clsT01_00 = new Date();
    clsT01_00.setHours(13);clsT01_00.setMinutes(0);clsT01_00.setSeconds(0);
    let miliT01_00 = clsT01_00 - d;
    let remainT01_00 = new Date(miliT01_00);

    let clsT02_00 = new Date();
    clsT02_00.setHours(14);clsT02_00.setMinutes(0);clsT02_00.setSeconds(0);
    let miliT02_00 = clsT02_00 - d;
    let remainT02_00 = new Date(miliT02_00);

    let clsT03_30 = new Date();
    clsT03_30.setHours(15);clsT03_30.setMinutes(30);clsT03_30.setSeconds(0);
    let miliT03_30 = clsT03_30 - d;
    let remainT03_30 = new Date(miliT03_30);

    let clsT05_00 = new Date();
    clsT05_00.setHours(17);clsT05_00.setMinutes(0);clsT05_00.setSeconds(0);
    let miliT05_00 = clsT05_00 - d;
    let remainT05_00 = new Date(miliT05_00);

    function nextCardFunc(nextCard, nextCls, nextTeacher, nextRoom, remainNext) {
        nextCard.style.display = "block";
        nextCls.innerHTML = remainNext[0];
        nextTeacher.innerHTML = remainNext[1];
        nextRoom.innerHTML = remainNext[2];
    }
    function clsComponent(clsStatus, clsnNow, timeStatusNow, timeStatic, remainNow, remainNext1=undefined, remainNext2=undefined, remainNext3=undefined, remainNext4=undefined) {
        runUp.innerHTML = clsStatus;
        if (clsStatus == "Upcoming") {
            runUp.style.backgroundColor = "var(--yellow-color)";
        }
	else {
	    runUp.style.backgroundColor = "var(--green-color)";
	}
        clsCode.innerHTML = clsnNow[0];
        teacher.innerHTML = clsnNow[1];
        room.innerHTML = clsnNow[2];
        timeStatus.innerHTML = timeStatusNow;
        if (timeStatusNow == "Next Class") {
            time.style.display = "block";
            time.innerHTML = timeStatic;
        }
        else {
            time.innerHTML = `${remainNow.getHours()-6}:${remainNow.getMinutes()}:${remainNow.getSeconds()}`;
        }
        if (remainNext1 != undefined) {
            nextCardFunc(nextCard1, nextCls1, nextTeacher1, nextRoom1, remainNext1);
        }
        else {nextCard1.style.display = "none";}
        if (remainNext2 != undefined) {
            nextCardFunc(nextCard2, nextCls2, nextTeacher2, nextRoom2, remainNext2);
        }
        else {nextCard2.style.display = "none";}
        if (remainNext3 != undefined) {
            nextCardFunc(nextCard3, nextCls3, nextTeacher3, nextRoom3, remainNext3);
        }
        else {nextCard3.style.display = "none";}
        if (remainNext4 != undefined) {
            nextCardFunc(nextCard4, nextCls4, nextTeacher4, nextRoom4, remainNext4);
        }
        else {nextCard4.style.display = "none";}
        if (remainNext1 == undefined && remainNext2 == undefined && remainNext3 == undefined && remainNext4 == undefined) {
            noCls.style.display = "block";
        }
        else {noCls.style.display = "none";}
    }

    if (day == 5) {
        clsComponent("Upcoming", monday.T10_00, "Next Class", "Next Monday :: 10:00AM");
    }
    else if (day == 6) {
        clsComponent("Upcoming", monday.T10_00, "Next Class", "Next Monday :: 10:00AM");
    }
    else if (day == 0) {
        clsComponent("Upcoming", monday.T10_00, "Next Class", "Tomorrow :: 10:00AM");
    }
    else if (day == 1) {
        if (miliT10_00 > 0) {
            clsComponent("Upcoming", monday.T10_00, "Start in", undefined, remainT10_00, monday.T10_00, monday.T11_30);
        }
        else if (miliT11_30 > 0) {
            clsComponent("Running", monday.T10_00, "End in", undefined, remainT11_30, monday.T11_30);
        }
        else if (miliT11_30 < 0) {
            clsComponent("Upcoming", tuesday.T08_30, "Next Class", "Tomorrow :: 8:30AM");
        }
    }
    else if (day == 2) {
        if (miliT08_30 > 0) {
            clsComponent("Upcoming", tuesday.T08_30, "Start in", undefined, remainT08_30, tuesday.T08_30, tuesday.T10_00, tuesday.T11_30)
        }
        else if (miliT10_00 > 0) {
            clsComponent("Running", tuesday.T08_30, "End in", undefined, remainT10_00, tuesday.T10_00, tuesday.T11_30);
        }
        else if (miliT11_30 > 0) {
            clsComponent("Running", tuesday.T10_00, "End in", undefined, remainT11_30, tuesday.T11_30)
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", tuesday.T11_30, "End in", undefined, remainT01_00);
        }
        else if (miliT01_00 < 0) {
            clsComponent("Upcoming", wednesday.T11_30, "Next Class", "Tomorrow :: 11:30AM");
        }
    }
    else if (day == 3) {
        if (miliT11_30 > 0) {
            clsComponent("Upcoming", wednesday.T11_30, "Start in", undefined, remainT11_30, wednesday.T11_30, wednesday.T02_00, wednesday.T03_30);
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", wednesday.T11_30, "End in", undefined, remainT01_00, wednesday.T02_00, wednesday.T03_30);
        }
        else if (miliT02_00 > 0) {
            clsComponent("Upcoming", wednesday.T02_00, "Start in", undefined, remainT02_00, wednesday.T02_00, wednesday.T03_30);
        }
        else if (miliT03_30 > 0) {
            clsComponent("Running", wednesday.T02_00, "End in", undefined, remainT03_30, wednesday.T03_30);
        }
        else if (miliT05_00 > 0) {
            clsComponent("Running", wednesday.T03_30, "End in", undefined, remainT05_00);
        }
        else if (miliT05_00 < 0) {
            clsComponent("Upcoming", thursday.T08_30, "Next Class", "Tomorrow :: 8:30AM");
        }
    }
    else if (day == 4) {
        if (miliT08_30 > 0) {
            clsComponent("Upcoming", thursday.T08_30, "Start in", undefined, remainT08_30, thursday.T08_30, thursday.T10_00, thursday.T11_30, thursday.T02_00);
        }
        else if (miliT10_00 > 0) {
            clsComponent("Running", thursday.T08_30, "End in", undefined, remainT10_00, thursday.T10_00, thursday.T11_30, thursday.T02_00);
        }
        else if (miliT11_30 > 0) {
            clsComponent("Running", thursday.T10_00, "End in", undefined, remainT11_30, thursday.T11_30, thursday.T02_00);
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", thursday.T11_30, "End in", undefined, remainT01_00, thursday.T02_00);
        }
        else if (miliT02_00 > 0) {
            clsComponent("Upcoming", thursday.T02_00, "Start in", undefined, remainT02_00, thursday.T02_00);
        }
        else if (miliT03_30 > 0) {
            clsComponent("Running", thursday.T02_00, "End in", undefined, remainT03_30);
        }
        else if (miliT03_30 < 0) {
            clsComponent("Upcoming", monday.T10_00, "Next Class", "Next Monday :: 10:00AM");
        }
    }
};

setInterval(main, 1000);
