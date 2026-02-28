function getUserStatus(){
    console.log(status_code);
    var status_code = "Suspended";
    console.log(status_code);
}

getUserStatus();

/**
 * Important note
 * If you print status_code before assigning, you will get Reference error: status_code is not defined
 * After assigning the value using var, then it will be undefined
 */