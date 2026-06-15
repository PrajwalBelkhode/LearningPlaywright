class TestRunner{
    static TotalTests = 0;
    static Passcount = 0;
    static start_time;
    static end_time;

    static start(){
        TestRunner.start_time = Date.now();
    }
    constructor(name, passed){
        this.name = name;
        TestRunner.TotalTests++;

        if(passed){
            TestRunner.Passcount++;
        }
    }

    static summary(){
        return TestRunner.Passcount + "/" +  TestRunner.TotalTests + " passed";
    }

    static end(){
        TestRunner.end_time = Date.now();
    }

    static ExecutionTime(){
        return TestRunner.end_time - TestRunner.start_time;
    }
}

// Flow of amazon website

TestRunner.start();
new TestRunner("Login",true);
new TestRunner("Sign up",false);
new TestRunner("Search items", true);
new TestRunner("Add items",true);
new TestRunner("Cart",true);
new TestRunner("Checkout",true);

console.log(TestRunner.summary());
TestRunner.end();
console.log(TestRunner.ExecutionTime() + " ms");