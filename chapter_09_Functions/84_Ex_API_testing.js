function validateStatusCode(status){
    if (status >= 200 && status <=300){
        console.log (`${status}:Request is OK!`);
    }
}

const validateStatusCode_Exp = function(status){
        if (status >= 200 && status <=300){
        console.log (`${status}:Request is OK!`);
    }
}

const validateStatusCode_Arrow = (status) =>{
            if (status >= 200 && status <=300){
        console.log (`${status}:Request is OK!`);
    }
}

validateStatusCode(200);
validateStatusCode_Exp(201);
validateStatusCode_Arrow(202);