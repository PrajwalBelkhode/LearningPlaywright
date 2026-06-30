class BaseTest{
    setup(){
        console.log("Base: open browser");
    }

    teardown(){
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest{
    setup(){
        super.setup();
        console.log("UI: Maximize window");
    }

    teardown(){
        console.log("UI: Take screenshot");
        super.teardown();
    }
}

let test = new UITest();
test.setup();
console.log("----");
test.teardown();