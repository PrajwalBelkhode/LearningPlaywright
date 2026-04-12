const user = {
    firstName : "Prajwal",
    lastName : "Belkhode",
    get fullName(){
        return this.firstName + this.lastName;
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Prajwal Belkhode";
console.log(user.fullName);