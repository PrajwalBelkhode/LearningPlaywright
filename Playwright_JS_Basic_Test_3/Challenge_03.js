/**
 * Normalize Locator Error Messages
 * Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.
 */

let rawMessage = " Locator not found after TIMEOUT ";
// console.log(rawMessage);
let Normalised = rawMessage.trim().toLowerCase();
console.log(Normalised); // remove extra spaces - done


if (Normalised.includes("timeout")){
    console.log("Category: TIMEOUT");
}
else if (Normalised.includes("locator")){
    console.log("Category: LOCATOR");
}
else{
    console.log("Category: GENERAL");
}