let year = null;

function LeapYearIdentifier(year){
    if (year % 400 === 0)
    {
        console.log(`The year ${year} is a leap year.`);
    }
    else if (year % 100 === 0){
        console.log(`The year ${year} is not a leap year.`);
    }
    else if (year % 4 == 0){
        console.log(`The year ${year} is a leap year.`);
    }
    else{
        console.log(`The year ${year} is not a leap year.`)
    }
}

LeapYearIdentifier(1900);