interface BugReport{
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[]
}

function logBug(bug: BugReport): void{
    console.log(`BUG Report —→ ${bug.id} ["${bug.severity}"] ${bug.title}`);
    bug.stepsToReproduce.forEach(function(step: string, i: number){
        console.log(" " + (i + 1) + ". " + step);
    })
}

logBug({
    id: 1,
    title: "VWO login is not working",
    severity: "High",
    stepsToReproduce: ["Open the app.vwo.com","Open valid credentials", 
    "Verify the message"]
})