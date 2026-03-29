function prajwal_attending_class(worker, callback) {
    console.log("Started the class PW")
    let work = worker;
    console.log("Finished the class PW")
    callback();
}

function callGirlfriend() {
    console.log("Call girlfriend when done");
}

prajwal_attending_class('PW class', callGirlfriend);