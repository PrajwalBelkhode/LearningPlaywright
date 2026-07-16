interface Details{
    name: string;
    getDetails(homeaddress: string, mobilenumber: number): string;
}

class PersonalData implements Details{
    name: string;
    constructor(name: string){
        this.name = name
    }
    getDetails(homeaddress:string, mobilenumber: number): string{
        return `Hello,my name is ${this.name}.
        Here is my address: ${homeaddress} and contact no: ${mobilenumber}`;
    }
}

let P1:Details = new PersonalData("Azad");
console.log(P1.getDetails("#42, New post office road, Malad West", 8901256712));