function apiCall(name){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Operation ${name}: 200 OK!!!`)
        }, 1000)
    })
};

async function sequentialExecution(){
    console.log("Starting the test...");
    let start_time = Date.now();

    let result_1 = await apiCall("Authentication success");
    console.log(result_1);

    let result_2 = await apiCall("Statistics success");
    console.log(result_2);

    let result_3 = await apiCall("Users list fetch success");
    console.log(result_3);

    let end_Time = Date.now();

    console.log(`Total time:`, end_Time - start_time + ` ms`);
}

sequentialExecution();