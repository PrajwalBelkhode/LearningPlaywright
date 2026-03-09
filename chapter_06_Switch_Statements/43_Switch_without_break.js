let day = 3;

switch(day) {
    case 0:
        console.log("Sunday - Rest day");
    case 1:
        console.log("Monday - Sprint Planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday - Rest day");
    default:
        console.log("Invalid day value");
}

/**
 * Output:
 * Wednesday - Code review
 * Thursday - Testing
 * Friday — Deployment & Retro
 * Saturday - Rest day
 * Invalid day value
 */