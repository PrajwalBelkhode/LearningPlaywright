let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth,checkDB,checkCache]).then(function(results){
    console.log("All checks:", results);
})

Promise.all([
    Promise.resolve("Auth OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Cache OK")
]).then(function(result){console.log(result)})
.catch(function(error){console.log(error)});