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
    DocumentApp.getUi().alert('Hi po!');
    var data = data;
    var plainText = "Hello World!";
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    body.appendParagraph(plainText);
    // body.appendPageBreak();
    // doc.save();
}
  