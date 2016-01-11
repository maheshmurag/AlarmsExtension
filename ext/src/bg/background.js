// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
    $.get("https://montavista.schoolloop.com/portal/login", function(data) {
            // load response text into a new page element
            var fakePage = document.createElement("html");
            fakePage.innerHTML = data;
            console.log(fakePage.innerHTML)
        
            var page = $(fakePage);
            var schoolName = $("#page_title_login", page).contents().filter(function() {
                return this.nodeType == 3;
            }).text().trim();//test connection success
            console.log("Background.js connection success: " + schoolName)
    });
});

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
//  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });