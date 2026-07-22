abstract class BaseTest{
    protected testName: string;
    constructor(testName:string){
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest{
    setup(): void{
        console.log("Setup: launch browser");
    }
    execute(): void{
        console.log("Execute: Click buttons, fill forms");
    }
    teardown(): void{
        console.log("Teardown: Close browser")
    }
}

let test = new UITest("Forms");
test.setup();
test.execute();
test.teardown();