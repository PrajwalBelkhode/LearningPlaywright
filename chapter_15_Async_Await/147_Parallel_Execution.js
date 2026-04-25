function apiCall(name){
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(name + ":200 OK");
        },1000);
    });
}

async function ParallelExecution() {
    console.log("Starting the test.");
    start_time = Date.now();

    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth request"),
        apiCall("User verification"),
        apiCall("Payment service")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time taken: ~"+ (Date.now() - start_time)+" ms");
}

ParallelExecution();