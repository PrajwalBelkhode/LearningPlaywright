class Credentials{
    #apiKey
    constructor(user,key){
        this.user = user;
        this.#apiKey = key
    }

    getAuthHeader(){
        return "Bearer " + this.#apiKey;
    }
}

let creds = new Credentials("superadmin","secret_key_#190");
console.log(creds.user);
// console.log(creds.key); // undefined
// console.log(creds.#key); // Syntax error

console.log(creds.getAuthHeader());