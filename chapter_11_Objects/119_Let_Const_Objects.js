let config1 = {browser: "Chrome", timeout: 3000};
// ✅ Modifying properties - Allowed

config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

const config2 = {browser: "Edge", timeout: 2000};
// ✅ Modifying properties - Allowed

config2.browser = "Opera";
config2.timeout = 4000;
config2.retries = 5;
console.log(config2);