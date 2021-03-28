var currentDayEl = $('#currentDay');
var buttonSaveEl = $('.saveBtn');
var textEntryEl = $('.calendar-item');

// Display today's date
var today = moment().format('dddd, MMMM Do YYYY');
currentDayEl.text(today);

// When the save button is clicked
function saveEntry (event) {
    event.preventDefault();

    var calendarEntry = $(this).siblings('.calendar-item').val();
    var timeEntry = $(this).parent().attr("id");
  
    localStorage.setItem(timeEntry, calendarEntry);
}

function loadEntry () {

    if (localStorage['hour-9'] !== null && localStorage['hour-9'] !== undefined) {
        var entryNineAm= $('<p>' + localStorage['hour-9'] + '</p>');
        $("#nineAm").append(entryNineAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-10'] !== null && localStorage['hour-10'] !== undefined) {
        var entryTenAm= $('<p>' + localStorage['hour-10'] + '</p>');
        $("#tenAm").append(entryTenAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-11'] !== null && localStorage['hour-11'] !== undefined) {
        var entryElevenAm= $('<p>' + localStorage['hour-11'] + '</p>');
        $("#elevenAm").append(entryElevenAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-12'] !== null && localStorage['hour-12'] !== undefined) {
        var entryTwelvePm= $('<p>' + localStorage['hour-12'] + '</p>');
        $("#twelvePm").append(entryTwelvePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-13'] !== null && localStorage['hour-13'] !== undefined) {
        var entryOnePm= $('<p>' + localStorage['hour-13'] + '</p>');
        $("#onePm").append(entryOnePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-14'] !== null && localStorage['hour-14'] !== undefined) {
        var entryTwoPm= $('<p>' + localStorage['hour-14'] + '</p>');
        $("#twoPm").append(entryTwoPm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-15'] !== null && localStorage['hour-15'] !== undefined) {
        var entryThreePm= $('<p>' + localStorage['hour-15'] + '</p>');
        $("#threePm").append(entryThreePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-16'] !== null && localStorage['hour-16'] !== undefined) {
        var entryFourPm= $('<p>' + localStorage['hour-16'] + '</p>');
        $("#fourPm").append(entryFourPm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-17'] !== null && localStorage['hour-17'] !== undefined) {
        var entryFivePm= $('<p>' + localStorage['hour-17'] + '</p>');
        $("#fivePm").append(entryFivePm[0].innerText);
    }else {
        ("");
    }
};
// Create funtion to track time
function trackTime () {
    var now = moment().hour();
    $(".row").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
        if (blockTime < now) {
            $(this).addClass("past");
        }else if (blockTime === now) {
            $(this).addClass("present");
        }else {
            $(this).addClass("future");
        }
    })
}

buttonSaveEl.on('click', saveEntry);
loadEntry();
trackTime();
