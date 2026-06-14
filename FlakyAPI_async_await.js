let attempt = 0;
let flakyAPI = () =>{
    attempt++;

    if (attempt < 3){
        return Promise.reject("Attempt ->" +  attempt + ":Failed");
    }
    return Promise.resolve("Attempt ->" +  attempt + ":Success");
}

async function retryTest(maxRetries){
    for (let i = 1; i <= maxRetries; i++){
        try{
            let result =  await flakyAPI();
            console.log("Result:", result);
            return;
        }catch(error){
            console.log(error)
        }finally{
            console.log("Clean up!!!")
        }
    }
}

retryTest(5);