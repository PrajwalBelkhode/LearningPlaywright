/**
 * You are working API Validation
 * response Code - 200, 404, 401, 403.....404
 */

let responseCode = 502;

switch(responseCode){
    case 200:
        console.log("Status OK.");
        break;
    case 302:
        console.log("Found.");
        break;
    case 404:
        console.log("Error, Not found");
        break;
    case 502:
        console.log("Bad gateway");
        break;
    default:
        console.log("Unknown response code.");
        break;
}