interface TestHook{
    (testName: string): void;
}

interface TestCase{
    id: number;
    name: string;
    status: string;
    duration: number;
}


let beforeEachHook: TestHook = function(testName: string){
    console.log("[BEFORE] Setting up:" + testName);
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
}


let afterEachHook: TestHook = function(testName: string){
    console.log("[AFTER] Tearing down:" + testName);
}

beforeEachHook("Login test");

console.log(`TC-${test1.id} : ${test1.name} → ${test1.status}`);

afterEachHook("Login test");
