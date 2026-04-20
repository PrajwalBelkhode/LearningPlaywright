let APICall = new Promise(function(resolve, reject){
    reject("500 Internal server error");
})

APICall.
then(function(data){
    console.log (data);
}).catch(function(error){
    console.log (error);
});