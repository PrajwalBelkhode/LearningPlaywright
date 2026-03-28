function retry(testName, MaxRetries = 3, delay = 1000){
    console.log(`Retrying ${testName}, up to ${MaxRetries}, ${delay} ms apart`);
}

retry("Open_Support_page",5,5000);
retry("Password-reset");