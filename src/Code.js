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

function testFolder() {
    var folderId = "13eVpv_8NJSWQIVETx0FgTa48oBl10doJ";
    var exist = true;
    try{
        var testFolder = DriveApp.getFolderById(folderId);
        Logger.log("success");
    }
    catch(err){
        exist=false
        Logger.log("fail");
    }
    return exist;
}

function useTemplate() {
    var docId = "1Ozf6U16RXJV8Jn83mTzVEA_suWJnpZ9j9EqdrgWelbw";
    var newTitle = "copy-of-Test";
    var folderId = "13eVpv_8NJSWQIVETx0FgTa48oBl10doJ";
    var owner = "carlo@hyperstacksinc.com";
    Logger.log(newTitle);
    Logger.log(docId);
    Logger.log(folderId);
    Logger.log(owner);
    
    var file = DriveApp.getFileById(docId);
    var folder = DriveApp.getFolderById(folderId);
    var newfile = file.makeCopy(newTitle, folder);
    newfile.setOwner(owner);
    Logger.log(newfile.getName());
}

  