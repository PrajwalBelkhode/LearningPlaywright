class Student{
    static collegeName = "Plawright AT batch";

    constructor(name){
        this.name = name;
    }

    static display(){
        console.log(this.name + ` is part of the ` + Student.collegeName);
    }
}

let Prajwal = new Student("Prajwal");
console.log(Student.collegeName);
console.log(Prajwal.name);
/* Prajwal.display(); 
    Throws error as Static method belongs to the class only, not object 
    */
Student.display(); // Displays "Student is part of the Plawright AT batch"