let APIResponse = new Promise(function(resolve, reject){
    resolve({Status: "200 OK", Body: "User data"});
})

APIResponse.then(function(response){
    console.log(response);
    console.log(response.Status);
    console.log(response.Body);
});