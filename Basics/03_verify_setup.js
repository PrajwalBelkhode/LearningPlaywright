console.log("Platform:", process.platform);
console.log("System architecture:", process.arch);
console.log("Current working directory:", process.cwd());
console.log("Memory usage:", process.memoryUsage());
console.log("Node.js version:", process.version);

const { execSync } = require("child_process");
const npmVersion = execSync("npm -v").toString().trim();
console.log("NPM version:", npmVersion);