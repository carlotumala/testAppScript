// var ui = function() {
//     return DocumentApp.getUi()
// }

function onOpen(e) {
    var menu = DocumentApp.getUi().createAddonMenu();
    menu.addItem('Launch', 'showMarkup');
    menu.addSeparator();
    menu.addToUi();
}

function onInstall(e) {
    onOpen(e);
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function showMarkup(){
    var filename = 'Markup';  
    var title = 'Jacob\'s Editor';
    var ui = HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .setTitle(title)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    DocumentApp.getUi().showSidebar(ui);
}

function addEntry(data) {
    var plainText = "Hello World!";
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    body.appendParagraph(plainText);
    body.appendParagraph(data.fullname);
    body.appendParagraph(data.recipient);
    body.appendParagraph(data.message);
}

function testing() {
    Logger.log("success");
    return true;
}

function useTemplate(id, newTitle) {
    Logger.log(newTitle);
    Logger.log(id);
    // if(!id)
    //     id = "1Ozf6U16RXJV8Jn83mTzVEA_suWJnpZ9j9EqdrgWelbw";
    
    var file = DriveApp.getFileById(id);
    Logger.log(file);
    var newfile = file.makeCopy(newTitle);
    Logger.log(newfile);
    // var doc = DocumentApp.openById(id);
    // doc.getBody();
    return true;    
}

  