function doGet(e) {
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile('Website');
}

function spamEmail(testSubject) {
  Logger.log("Spamming"+testSubject);
  var sheet = SpreadsheetApp.openById("1e06IRm6WmPHXHrkuW_A_HnjrYgPi155NrhPByR-P1To");
  // Get all values in the spreadsheet
  var data = sheet.getDataRange().getValues();
  // Loop through all rows with data:
  for(var i = 0; i < data.length; i++) {
    var row = data[i];
    var message = row[0];
    var subject = "The Bee Movie Script";
    MailApp.sendEmail(testSubject, subject, message, {noReply:true});
  };
}