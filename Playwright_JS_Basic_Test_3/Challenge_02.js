/**
 * Build Test Users from Arrays
 * Write a JavaScript function that receives two arrays: one with names and one with roles. Return a new array of user objects in the format `{ username, email, role }`. The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.
 */
let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

let New_array = names.map((name,index) =>{
    let username = name.split(" ").join("_").toLowerCase();

    return{
        name:username,
        email:`${username}+@playwrightbatch.com`,
        role:roles[index]
    }
});

console.log(New_array);