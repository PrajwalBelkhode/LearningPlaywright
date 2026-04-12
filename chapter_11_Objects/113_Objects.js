const user = {
    name: "Prajwal",
    age: 25
};

const calculator = {
    value: 0,
    add (n){
        this.value += n;
        return this;
    },
    subtract (n){
        this.value -= n;
        return this;
    }
}

console.log(calculator.add(10).subtract(4));
console.log(Object.getOwnPropertyDescriptor(calculator, "add"));