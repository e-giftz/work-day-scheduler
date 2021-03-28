var currentDayEl = $('#currentDay');
var buttonSaveEl = $('.saveBtn');
var textEntryEl = $('.calendar-item');

// Display today's date
var today = moment().format('dddd, MMMM Do YYYY');
currentDayEl.text(today);

// When the save button is clicked
function saveEntry (event) {
    event.preventDefault();
    //alert('Hello World');

    //var calendarEntry = textEntryEl.val();
    var calendarEntry = $(this).siblings('.calendar-item').val();
    var timeEntry = $(this).parent().attr("id");
    console.log(calendarEntry);
  
    localStorage.setItem(timeEntry, calendarEntry);
}

function loadEntry () {
    console.log('hello');
    console.log(localStorage['hour-9']);
    if (localStorage['hour-9'] !== null) {
        var entryNineAm= $('<p>' + localStorage['hour-9'] + '</p>');
        console.log(entryNineAm);
        $("#nineAm").append(entryNineAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-10'] !== null) {
        var entryTenAm= $('<p>' + localStorage['hour-10'] + '</p>');
        console.log(entryTenAm);
        $("#tenAm").append(entryTenAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-11'] !== null) {
        var entryElevenAm= $('<p>' + localStorage['hour-11'] + '</p>');
        console.log(entryElevenAm);
        $("#elevenAm").append(entryElevenAm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-12'] !== null) {
        var entryTwelvePm= $('<p>' + localStorage['hour-12'] + '</p>');
        console.log(entryTwelvePm);
        $("#twelvePm").append(entryTwelvePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-13'] !== null) {
        var entryOnePm= $('<p>' + localStorage['hour-13'] + '</p>');
        console.log(entryOnePm);
        $("#onePm").append(entryOnePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-14'] !== null) {
        var entryTwoPm= $('<p>' + localStorage['hour-14'] + '</p>');
        console.log(entryTwoPm);
        $("#twoPm").append(entryTwoPm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-15'] !== null) {
        var entryThreePm= $('<p>' + localStorage['hour-15'] + '</p>');
        console.log(entryThreePm);
        $("#threePm").append(entryThreePm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-16'] !== null) {
        var entryFourPm= $('<p>' + localStorage['hour-16'] + '</p>');
        console.log(entryFourPm);
        $("#fourPm").append(entryFourPm[0].innerText);
    }else {
        ("");
    }
    if (localStorage['hour-17'] !== null) {
        var entryFivePm= $('<p>' + localStorage['hour-17'] + '</p>');
        console.log(entryFivePm);
        $("#fivePm").append(entryFivePm[0].innerText);
    }else {
        ("");
    }
};
loadEntry();
buttonSaveEl.on('click', saveEntry);


