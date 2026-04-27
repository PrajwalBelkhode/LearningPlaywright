class Car{
    constructor(Carname, yearofManufacture, ExShowroomPrice){
        this.Carname = Carname;
        this.yearofManufacture = yearofManufacture;
        this.ExShowroomPrice = ExShowroomPrice;
    }

    Testdrive(){
        console.log("Test drive of "+ this.Carname);
    }
    printDetailsCar(){
        console.log(`Details of the car:`  + `${this.Carname}` + 
            ` is manufactured in August 2025,with Ex-showroom price for top varient in INR:` + `${this.ExShowroomPrice}/-`
        );
    }
}


let Mahindra = new Car("Xuv 700", 2025, 2371000);
Mahindra.Testdrive();
Mahindra.printDetailsCar();