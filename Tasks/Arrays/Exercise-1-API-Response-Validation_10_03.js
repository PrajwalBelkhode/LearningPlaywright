/**
 * You receive an array of API response codes. Write code to:
 * 1. Check if ALL responses are successful (200–299)
 * 2. Find the FIRST non-success code
 * 3. Return all unique error codes
 */

// 1. Check if ALL responses are successful (200–299)
let response = [200, 201, 404, 500, 404, 200, 503];
let responseLength = response.length

// Checking if all responses are successful using every.
result = response.every(code => code < 205);
console.log(result); // false

// Checking if any responses are successful using some.
result = response.some(code => code < 205);
console.log(result); // true

// Find the FIRST non-success code

for (i = 0; i< responseLength; i++){
    if (response[i] > 205){
        console.log(response[i]);
        break;
    }
}

// 3. Return all unique error codes

let unique_codes = response.filter((element,code,self) => code === self.indexOf(element) );
console.log(unique_codes);