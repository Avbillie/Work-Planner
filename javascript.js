function checkClock(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    h = checkClock(h);
    m = checkClock(m);

    var currentTime = h + ":" + m
    t = setTimeout(function () {
        startClock()
    }, 500);
    return currentTime;
}
startClock();

function displayTime() {
    var currentTime = $("#currentTime").text();
    var time = startClock();


    if (currentTime >= "00:00" && currentTime < "12:00") {
        $("#amPm").text('"Good Morning!"');
        $(".bodyBg").css({
            "background-image": "url('https://github.com/Avbillie/Work-Planner/blob/master/Assets/morning.jpg?raw=true')",
            "background-size": "100%",
            "background-position": "bottom",
            "background-repeat": "no-repeat",
            "color": "white",
            "text-shadow": "4px 4px 4px black",
        })
    }
    if (currentTime >= "12:00" && currentTime < "17:00") {
        $("#amPm").text('"Good Afternoon."');
        $(".bodyBg").css({
            "background-image": "url('https://github.com/Avbillie/Work-Planner/blob/master/Assets/afternoon.jpg?raw=true')",
            "background-size": "100%",
            "background-position": "center
            "background-repeat": "no-repeat",
            "color": "white",
            "text-shadow": "4px 4px 4px black",
        })
    }
    if (currentTime >= "17:00" && currentTime < "20:00") {
        $("#amPm").text('"Good Evening."');
        $(".bodyBg").css({
            "background-image": "url('https://github.com/Avbillie/Work-Planner/blob/master/Assets/evening.jpg?raw=true')",
            "background-size": "100%",
            "background-position": "bottom",
            "background-repeat": "no-repeat",
            "color": "white",
            "text-shadow": "4px 4px 4px black",
        })
        $(".time p").css({
            "color": "orangered"
        })
    }
    
    if (currentTime >= "20:00" && currentTime != "00:00") {
        $("#amPm").text('"Goodnight."');
        $(".bodyBg").css({
            "background-image": "url('https://github.com/Avbillie/Work-Planner/blob/master/Assets/night.jpg?raw=true')",
            "background-repeat": "no-repeat",
            "background-position": "bottom",
            "background-size": "100%",
            "color": "white",
            "text-shadow": "5px 5px 5px black",
        })
        $(".time p").css({
            "color": "midnightblue"
        })
    }
    if (time != currentTime) {
        currentTime = $("#currentTime").text(startClock())
    }
    t = setTimeout(function () {
        displayTime()
    }, 500);
    return currentTime;
}
displayTime();



function getDate() {
    var d = new Date();
    var updatedDay = d.toDateString();
    var today = $("#currentDay").text();

    if (today != updatedDay) {
        today = $("#currentDay").text(updatedDay)
    }
    t = setTimeout(function () {
        getDate()
    }, 500);
    return currentDay;
}
getDate();

var currentTime = $("#currentTime").text();
var sevenAm = $("#7AM");
var eightAm = $("#8AM");
var nineAm = $("#9AM");
var tenAm = $("#10AM");
var elevenAm = $("#11AM");
var twelvePm = $("#12PM");
var onePm = $("#1PM");
var twoPm = $("#2PM");
var threePm = $("#3PM");
var fourPm = $("#4PM");
var fivePm = $("#5PM");
var text1 = $("#textArea1");
var text2 = $("#textArea2");
var text3 = $("#textArea3");
var text4 = $("#textArea4");
var text5 = $("#textArea5");
var text6 = $("#textArea6");
var text7 = $("#textArea7");
var text8 = $("#textArea8");
var text9 = $("#textArea9");
var text10 = $("#textArea10");
var text11 = $("#textArea11");
var task1 = localStorage.getItem("Task1")
var task2 = localStorage.getItem("Task2")
var task3 = localStorage.getItem("Task3")
var task4 = localStorage.getItem("Task4")
var task5 = localStorage.getItem("Task5")
var task6 = localStorage.getItem("Task6")
var task7 = localStorage.getItem("Task7")
var task8 = localStorage.getItem("Task8")
var task9 = localStorage.getItem("Task9")
var task10 = localStorage.getItem("Task10")
var task11 = localStorage.getItem("Task11")

function displayText() {
    var taskArray = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7", "Task8", "Task9", "Task10", "Task11"]
    var textAreaArray = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11]

    for (i = 0; i < taskArray.length; ++i) {
        for (i = 0; i < textAreaArray.length; ++i) {

            var task = localStorage.getItem(taskArray[i]);
            var textArea = $(textAreaArray[i]);
            displayTextChecker(task, textArea)
        }
    }
};
displayText();

function displayTextChecker(a, b) {
    if (a != undefined) {
        $(b).val(a)
    }
}


function saveText(button) {

    var x = button.id
    switch (x) {
        case "saveBtn1":
            text1 = $("#textArea1").val();
            if (localStorage.Task1) {
                localStorage.Task1 = localStorage.Task1 + text1;
            } else {
                localStorage.Task1 = text1;
            }
            break;
        case "saveBtn2":
            text2 = $("#textArea2").val();
            if (localStorage.Task2) {
                localStorage.Task2 = localStorage.Task2 + text2;
            } else {
                localStorage.Task2 = text2;
            }
            break;
        case "saveBtn3":
            text3 = $("#textArea3").val();
            if (localStorage.Task3) {
                localStorage.Task3 = localStorage.Task3 + text3
            } else {
                localStorage.Task3 = text3;
            }
            break;
        case "saveBtn4":
            text4 = $("#textArea4").val();
            if (localStorage.Task4) {
                localStorage.Task4 = localStorage.Task4 + text4;
            } else {
                localStorage.Task4 = text4;
            }
            break;
        case "saveBtn5":
            text5 = $("#textArea5").val();
            if (localStorage.Task5) {
                localStorage.Task5 = localStorage.Task5 + text5;
            } else {
                localStorage.Task5 = text5;
            }
            break;
        case "saveBtn6":
            text6 = $("#textArea6").val();
            if (localStorage.Task6) {
                localStorage.Task6 = localStorage.Task6 + text6;
            } else {
                localStorage.Task6 = text6;
            }
            break;
        case "saveBtn7":
            text7 = $("#textArea7").val();
            if (localStorage.Task7) {
                localStorage.Task7 = localStorage.Task7 + text7;
            } else {
                localStorage.Task7 = text7;
            }
            break;
        case "saveBtn8":
            text8 = $("#textArea8").val();
            if (localStorage.Task8) {
                localStorage.Task8 = localStorage.Task8 + text8;
            } else {
                localStorage.Task8 = text8;
            }
            break;
        case "saveBtn9":
            text9 = $("#textArea9").val();
            if (localStorage.Task9) {
                localStorage.Task9 = localStorage.Task9 + text9;
            } else {
                localStorage.Task9 = text9;
            }
            break;
        case "saveBtn10":
            text10 = $("#textArea10").val();
            if (localStorage.Task10) {
                localStorage.Task10 = localStorage.Task10 + text10;
            } else {
                localStorage.Task10 = text10;
            }
            break;
        case "saveBtn11":
            text11 = $("#textArea11").val();
            if (localStorage.Task11) {
                localStorage.Task11 = localStorage.Task11 + text11;
            } else {
                localStorage.Task11 = text11;
            }
            break;
        default:
            return false;

    }
}


function clearText(button) {
    var x = button.id
    switch (x) {
        case "clearBtn1":
            text1 = $("#textArea1").val("");
            localStorage.removeItem("Task1")
            break;
        case "clearBtn2":
            text2 = $("#textArea2").val("");
            localStorage.removeItem("Task2")
            break;
        case "clearBtn3":
            text3 = $("#textArea3").val("");
            localStorage.removeItem("Task3")
            break;
        case "clearBtn4":
            text4 = $("#textArea4").val("");
            localStorage.removeItem("Task4")
            break;
        case "clearBtn5":
            text5 = $("#textArea5").val("");
            localStorage.removeItem("Task5")
            break;
        case "clearBtn6":
            text6 = $("#textArea6").val("");
            localStorage.removeItem("Task6")
            break;
        case "clearBtn7":
            text7 = $("#textArea7").val("");
            localStorage.removeItem("Task7")
            break;
        case "clearBtn8":
            text8 = $("#textArea8").val("");
            localStorage.removeItem("Task8")
            break;
        case "clearBtn9":
            text9 = $("#textArea9").val("");
            localStorage.removeItem("Task9")
            break;
        case "clearBtn10":
            text10 = $("#textArea10").val("");
            localStorage.removeItem("Task10")
            break;
        case "clearBtn11":
            text11 = $("#textArea11").val("");
            localStorage.removeItem("Task11")
            break;
        default:
            return false;
    }
}

// function checkBtn(a, b) {

// }

function taskOrganizer() {
    var textAreaArray = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11]
    var hourArray = [sevenAm, eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm]
    for (i = 0; i < hourArray.length; ++i) {
        for (i = 0; i < textAreaArray.length; ++i) {
            var hours = $(hourArray[i]).text();
            var textArea = $(textAreaArray[i]);
            checkTaskTime(hours, currentTime, textArea)
        }
    }
}

function checkTaskTime(a, b, c) {
    if (a < b) {
        $(c).addClass("past")
    } else if (a == b) {
        $(c).addClass("present")
    } else {
        $(c).addClass("future")
    }
    return a, b, c;
}
taskOrganizer();
