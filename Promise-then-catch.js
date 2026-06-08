let GetApiResultSuccess = new Promise((resolve, reject) =>{
    reject({Status : 401, Description : "Unauthorized user"});
    resolve({Status : 200, Description : "Success"}); 
});

GetApiResultSuccess.then((SuccessResult)=>{
    console.log(SuccessResult);
}).catch((FailureResult) =>{
    console.log(FailureResult);
});