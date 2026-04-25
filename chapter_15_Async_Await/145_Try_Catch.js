// Error handling using - Try catch

// With Promises you use .catch().
//  With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI() {
    try{
        let result = await Promise.reject("503 Service Unavialable");
    } catch(error){
        console.log(`Error:`, error);
    }
    finally{
        console.log("Clean up!!");
    }
}

testAPI();