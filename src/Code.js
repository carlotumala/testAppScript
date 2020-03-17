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
  