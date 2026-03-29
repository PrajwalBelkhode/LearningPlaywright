function outer(name){
    let message = "Hello";
    console.log("Outer execution")
    function inner(){
        //print message
        console.log(`${message} ${name}`);
        console.log("Inner function execution");
    }
    return inner()
}

inner_function = outer("Radio Mirchi");