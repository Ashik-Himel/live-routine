const monday = {
    T09_00 : ["PHY-111", "SFR", "LAB-03"],
    T10_20 : ["CSEC-212", "SNA", "LAB-08"]
};
const tuesday = {
    T09_00 : ["PHY-111", "SFR", "LAB-03"],
    T10_20 : ["BUS-110", "MAB", "EEE-702"],
    T11_40 : ["PHY-110", "SFR", "EEE-702"]
};
const wednesday = {
    T11_40 : ["ACTG-121", "ROB", "EEE-703"],
    T02_00 : ["CSEC-211", "SNA", 404],
    T03_20 : ["CSEC-212", "SNA", "LAB-08"]
};
const thursday = {
    T09_00 : ["BUS-110", "MAB", 601],
    T10_20 : ["PHY-110", "SFR", 601],
    T11_40 : ["CSEC-211", "SNA", 601],
    T02_00 : ["ACTG-121", "ROB", 601]
};

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

    let clsT09_00 = new Date();
    clsT09_00.setHours(9);clsT09_00.setMinutes(0);clsT09_00.setSeconds(0);
    let miliT09_00 = clsT09_00 - d;
    let remainT09_00 = new Date(miliT09_00);
    
    let clsT10_20 = new Date();
    clsT10_20.setHours(10);clsT10_20.setMinutes(20);clsT10_20.setSeconds(0);
    let miliT10_20 = clsT10_20 - d;
    let remainT10_20 = new Date(miliT10_20);

    let clsT11_40 = new Date();
    clsT11_40.setHours(11);clsT11_40.setMinutes(40);clsT11_40.setSeconds(0);
    let miliT11_40 = clsT11_40 - d;
    let remainT11_40 = new Date(miliT11_40);

    let clsT01_00 = new Date();
    clsT01_00.setHours(13);clsT01_00.setMinutes(0);clsT01_00.setSeconds(0);
    let miliT01_00 = clsT01_00 - d;
    let remainT01_00 = new Date(miliT01_00);

    let clsT02_00 = new Date();
    clsT02_00.setHours(14);clsT02_00.setMinutes(0);clsT02_00.setSeconds(0);
    let miliT02_00 = clsT02_00 - d;
    let remainT02_00 = new Date(miliT02_00);

    let clsT03_20 = new Date();
    clsT03_20.setHours(15);clsT03_20.setMinutes(20);clsT03_20.setSeconds(0);
    let miliT03_20 = clsT03_20 - d;
    let remainT03_20 = new Date(miliT03_20);

    let clsT04_40 = new Date();
    clsT04_40.setHours(16);clsT04_40.setMinutes(40);clsT04_40.setSeconds(0);
    let miliT04_40 = clsT04_40 - d;
    let remainT04_40 = new Date(miliT04_40);

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
	    time.style.display = "inline";
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
        clsComponent("Upcoming", monday.T09_00, "Next Class", "Next Monday :: 09:00AM");
    }
    else if (day == 6) {
        clsComponent("Upcoming", monday.T09_00, "Next Class", "Next Monday :: 09:00AM");
    }
    else if (day == 0) {
        clsComponent("Upcoming", monday.T09_00, "Next Class", "Tomorrow :: 09:00AM");
    }
    else if (day == 1) {
        if (miliT09_00 > 0) {
            clsComponent("Upcoming", monday.T09_00, "Start in", undefined, remainT09_00, monday.T09_00, monday.T10_20);
        }
        else if (miliT11_40 > 0) {
            clsComponent("Running", monday.T09_00, "End in", undefined, remainT10_20, monday.T10_20);
        }
	else if (miliT01_00 > 0) {
            clsComponent("Running", monday.T10_20, "End in", undefined, remainT11_40);
        }
        else if (miliT01_00 < 0) {
            clsComponent("Upcoming", tuesday.T09_00, "Next Class", "Tomorrow :: 9:00AM");
        }
    }
    else if (day == 2) {
        if (miliT09_00 > 0) {
            clsComponent("Upcoming", tuesday.T09_00, "Start in", undefined, remainT09_00, tuesday.T09_00, tuesday.T10_20, tuesday.T11_40)
        }
        else if (miliT10_20 > 0) {
            clsComponent("Running", tuesday.T09_00, "End in", undefined, remainT10_20, tuesday.T10_20, tuesday.T11_40);
        }
        else if (miliT11_40 > 0) {
            clsComponent("Running", tuesday.T10_20, "End in", undefined, remainT11_40, tuesday.T11_40)
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", tuesday.T11_40, "End in", undefined, remainT01_00);
        }
        else if (miliT01_00 < 0) {
            clsComponent("Upcoming", wednesday.T11_40, "Next Class", "Tomorrow :: 11:40AM");
        }
    }
    else if (day == 3) {
        if (miliT11_40 > 0) {
            clsComponent("Upcoming", wednesday.T11_40, "Start in", undefined, remainT11_40, wednesday.T11_40, wednesday.T02_00, wednesday.T03_20);
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", wednesday.T11_40, "End in", undefined, remainT01_00, wednesday.T02_00, wednesday.T03_20);
        }
        else if (miliT02_00 > 0) {
            clsComponent("Upcoming", wednesday.T02_00, "Start in", undefined, remainT02_00, wednesday.T02_00, wednesday.T03_20);
        }
        else if (miliT03_20 > 0) {
            clsComponent("Running", wednesday.T02_00, "End in", undefined, remainT03_20, wednesday.T03_20);
        }
        else if (miliT04_40 > 0) {
            clsComponent("Running", wednesday.T03_20, "End in", undefined, remainT04_40);
        }
        else if (miliT04_40 < 0) {
            clsComponent("Upcoming", thursday.T09_00, "Next Class", "Tomorrow :: 9:00AM");
        }
    }
    else if (day == 4) {
        if (miliT09_00 > 0) {
            clsComponent("Upcoming", thursday.T09_00, "Start in", undefined, remainT09_00, thursday.T09_00, thursday.T10_20, thursday.T11_40, thursday.T02_00);
        }
        else if (miliT10_20 > 0) {
            clsComponent("Running", thursday.T09_00, "End in", undefined, remainT10_20, thursday.T10_20, thursday.T11_40, thursday.T02_00);
        }
        else if (miliT11_40 > 0) {
            clsComponent("Running", thursday.T10_20, "End in", undefined, remainT11_40, thursday.T11_40, thursday.T02_00);
        }
        else if (miliT01_00 > 0) {
            clsComponent("Running", thursday.T11_40, "End in", undefined, remainT01_00, thursday.T02_00);
        }
        else if (miliT02_00 > 0) {
            clsComponent("Upcoming", thursday.T02_00, "Start in", undefined, remainT02_00, thursday.T02_00);
        }
        else if (miliT03_20 > 0) {
            clsComponent("Running", thursday.T02_00, "End in", undefined, remainT03_20);
        }
        else if (miliT03_20 < 0) {
            clsComponent("Upcoming", monday.T09_00, "Next Class", "Next Monday :: 09:00AM");
        }
    }
};

setInterval(main, 1000);