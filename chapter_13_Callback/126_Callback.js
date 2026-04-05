// Callback - using normal function
function PlaceOrder(item, callback){
    console.log(`Placing order for ${item}`);
    callback();
}

function print(){
    console.log("Normal function - Done with the order");
}

PlaceOrder("burger",print);

/**
 * In the above lines, a normal function print() is being given as an argument to PlaceOrder function
 * which will basically work as a callback function.
 * It will be automatically called after PlaceOrder ka execution is finished
 */

// Anonymous fuction way

PlaceOrder("Garlic bread", function(){
    console.log("Anonymous - I am a function without a name")
});

// Arrow function way

PlaceOrder("Pasta", () => {
    console.log("Arrow function here");
})
