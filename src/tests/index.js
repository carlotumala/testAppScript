if ((typeof GasTap)==='undefined') { // GasT Initialization. (only if not initialized yet.)
    eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/zixia/gast/master/src/gas-tap-lib.js').getContentText())
} // Class GasTap is ready for use now!

var test = new GasTap()

function gastTestRunner() {
    test('do calculation right', (t) => {    
        var i = 3 + 4
        t.equal(i, 7, 'calc 3 + 4 = 7 right')
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

    return { failures: test.totalFailed(), success: test.totalSucceed()}
}