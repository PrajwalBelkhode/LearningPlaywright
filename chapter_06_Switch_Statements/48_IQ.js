let testScore = 99;

switch (true){
    case (testScore >= 95):
        console.log("Outstanding performance");
        break;
    case (testScore >= 85):
        console.log("Excellent - Above expectations");
        break;
    case (testScore >= 75):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}