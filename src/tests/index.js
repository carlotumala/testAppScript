

function gastTestRunner() {

    if ((typeof GasTap)==='undefined') { // GasT Initialization. (only if not initialized yet.)
        eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/zixia/gast/master/src/gas-tap-lib.js').getContentText())
    } // Class GasTap is ready for use now!
    
    var log = "";
    var loggerFunc = function (msg) { log += msg + "\n" }
    
    var test = new GasTap({
        logger: loggerFunc
    })
    
    test('add Entry', (t) => {
        var data = {
            fullname: "Carlo Tumala",
            recipient: "Michelle",
            message: "Happy Birthday!",
        }
        addEntry(data);
        var doc = DocumentApp.getActiveDocument().getBody().getText();
        t.ok(doc, "Document is not empty");
    })
    
    test.finish();

    return { failures: test.totalFailed(), success: test.totalSucceed(), log: log }
}