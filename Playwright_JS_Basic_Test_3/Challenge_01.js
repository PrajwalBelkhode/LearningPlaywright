/**
 * Playwright Result Summary Generator
 * You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.
 */


let results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }];

let results_length = results.length
// console.log(results_length);

function SummaryGenerator(arr_results){
    let count_of_pass = 0; let count_of_fail = 0; let count_of_skip = 0;
    var Failed_case = 0;
    var timeduration = 0;

    for (const result of results){
        if(result.status === 'passed'){
            count_of_pass += 1;
        }
        else if(result.status === 'failed'){
            count_of_fail += 1;
            Failed_case = result.name;
        }
        else{
            count_of_skip += 1;
        }
    timeduration += result.durationMs;

    }

    console.log("============Summary============");
    console.log(`Total tests:${results_length}`);
    console.log(`Total Passed cases ✅:${count_of_pass}`);
    console.log(`Total Failed cases 🚫:${count_of_fail}`);
    console.log(`Total Skipped cases ⏩:${count_of_skip}`);
    console.log(`Total time duration 🕔:${timeduration} ms`);
    console.log(`Failed case:${Failed_case}`);
}

SummaryGenerator(results);