class Car{
    #Engine

    constructor(name, EngineName){
        this.name = name;
        this.#Engine = EngineName;
    }

    getEngine(){
        return this.#Engine;
    }

    setEngine(NameEngine){
        this.#Engine = NameEngine;
    }
}

let BMW = new Car("BMW M5","V8");
console.log(BMW.name)
console.log(BMW.getEngine());
BMW.setEngine("V12");
console.log(BMW.getEngine());