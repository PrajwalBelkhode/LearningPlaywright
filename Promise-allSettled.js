Promise.allSettled([
    Promise.resolve("Browser opened successfully"),
    Promise.resolve("Enter your google credentials"),
    Promise.resolve("Open https://mail.google.com/mail"),
    Promise.reject("Inbox inaccessible")
]).then((results) =>{
    results.forEach((result, index) =>{
        console.log("Test " + (index + 1) + " : " + result.status + " -> " + (result.value || result.reason));
    });
}).catch();