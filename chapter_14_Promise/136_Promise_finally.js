let TestRun = new Promise(function(resolve, reject){
    reject("Assertion Failed");
});

TestRun.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("I will be executed anyhow!!!");
})