let status = "inactive";

let msg = status === "active" ? "User is active"
        : status === "inactive" ? "User is inactive"
        : status === "banned" ? "User is banned"
        : "Unknown status";

console.log(msg);