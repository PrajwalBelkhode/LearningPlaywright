function gradeCalculator(num){
    if (num >= 90 && num < 100){
        console.log(`Excellent| your marks are ${num} and grade is A`);
    }
    else if (num >= 80 && num < 90){
        console.log(`Good| your marks are ${num} and grade is B`);
    }
    else if (num >= 70 && num < 80){
        console.log(`Average| your marks are ${num} and grade is C`);
    }
    else if (num >=60 && num < 70){
        console.log(`Below Average| your marks are ${num} and grade is D`);
    }
    else{
        console.log(`Failed | your marks are ${num} and grade is F. Better luck next time.`)
    }
}

gradeCalculator(89);