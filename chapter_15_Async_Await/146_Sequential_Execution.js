function apiCall(name){
    return new Promise(function (resolve){

        setTimeout(function(){
            resolve(name, "200 OK");
        }, 1000)
    });
}

async function sequentialExecution(){
    console.log("Starting the test...")
    let start_time = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard Page load");
    console.log(r2);

    let r3 = await apiCall("Report page");
    console.log(r3);

    console.log("Time taken: ~"+ (Date.now() - start_time) + "ms");
}

sequentialExecution();