class BaseTest{
    setup(): void{
        console.log("[BASE]: Open browser");
    }

    teardown(): void{
        console.log("[BASE]: Close browser");
    }
}

class LoginTest extends BaseTest{
    override setup(): void{
        console.log("[LoginTest]: Open browser");
        console.log("[LoginTest] Maximize")
    }
}

class APITest extends BaseTest{
    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
let apiTest = new APITest();
test.setup();
test.teardown();
apiTest.setup();