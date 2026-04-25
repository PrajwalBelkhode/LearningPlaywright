let attempt = 0;

function flakyAPI(){
    attempt++;
    if (attempt < 3){
        return Promise.reject("Attempt" +  attempt + ":Failed");
    }
    return Promise.resolve("Attempt" +  attempt + ":Success");
}

async function retryTest(maxRetries) {
    for (let i = 0; i <= maxRetries; i++){
        try{
            let result = await flakyAPI();
            console.log("Result:" +result);
            break;
        }
        catch(error){
            console.log("Error:"+error)
        }
    }
}

retryTest(7);