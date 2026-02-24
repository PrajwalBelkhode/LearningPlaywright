let a = 0, b =  0, c = 0;

function TriangleClassifier(a, b, c){
    if (a === b && b === c){
        console.log("All sides are equal: It is an Equilateral triangle");
    }
    else if (a === b || b === c || c === a){
        console.log("Only two sides are equal: It is an Isosceles triangle");

    }
    else{
        console.log("No sides are equal: It is a scalene triangle");
    }
}

TriangleClassifier(10,11,12);