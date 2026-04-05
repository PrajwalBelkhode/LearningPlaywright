console.log("Test 1: Started");

setTimeout(() => {
    console.log("Test 2: API response received");
}, 2000);

console.log("Test 3: Moving to next last");

/**
 * Test 1: Started
 * Test 3: Moving to nex last
 * Test 2: API response received
 * [Done] exited with code=0 in 2.141 seconds
 * Test 2 is executed after 2 seconds
 */