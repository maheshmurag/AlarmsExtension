// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//var counter = 0;
//chrome.browserAction.onClicked.addListener(function (tab) {
//    $.get("https://montavista.schoolloop.com/portal/student_home", function(data) {
//        // load response text into a new page element
//        var SLPage = document.createElement("html");
//        SLPage.innerHTML = data;
//        var page = $(SLPage);
//        var schoolName = $("#page_title_login",page);
//        console.log($("#page_title_login",page))
//        if(schoolName.length){//not logged in
//            console.log("Grade update notifications won't work unless you're logged in!")
//        }
//        else{//logged in
//            console.log("Logged in!")
//            console.log($("span.page_title", page).text())
//        }
//    });
//});

chrome.alarms.onAlarm.addListener(function( alarm ) {
  if(alarm.name === "NotificationsAlarm"){
      $.get("https://montavista.schoolloop.com/portal/student_home", function(data) {
        // load response text into a new page element
        var SLPage = document.createElement("html");
        SLPage.innerHTML = data;
        var page = $(SLPage);
        var schoolName = $("#page_title_login",page);
//        console.log($("#page_title_login",page))
        if(schoolName.length){//not logged in
            console.log("Grade update notifications won't work unless you're logged in!")
        }
        else{//logged in
            console.log("Logged in!")
//            console.log($("span.page_title", page).text())
        }
    });
  }
});

chrome.alarms.create("NotificationsAlarm", {delayInMinutes:0, periodInMinutes:5})

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
//  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });