class ICICI{
    #balance
    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(balance, isCashier){
        if(isCashier){
            this.#balance = balance;
        } else{
            console.log("Not allowed")
        }
    }
}

let Prajwal = new ICICI("Prajwal",5000);
console.log(Prajwal.getBalance());
Prajwal.setBalance(8000,false);
console.log(Prajwal.getBalance());

let Chitra = new ICICI("Prajwal",5000);
console.log(Prajwal.getBalance());
Prajwal.setBalance(8000,true);
console.log(Prajwal.getBalance());