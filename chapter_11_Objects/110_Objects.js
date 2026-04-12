let config = {};
config.browser = "Opera";
config.timeout = 3000;
config.timeout = 5000; // latest value will be considered

console.log(config);
delete config.browser;
console.log(config);