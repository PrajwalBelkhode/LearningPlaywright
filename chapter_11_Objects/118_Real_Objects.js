const ENV = {
    BASE_URL: "https://staging.app.vwo.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

console.log(ENV);


const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}

const config = {
    // Base URLs
    baseUrl : "http://localhost:8000",
    apiBaseUrl: "http://localhost:8000/api",

    testUser:{
        username: "testuser@example.com",
        password: "SecurePass123"
    },

    // Logging
    logLevel: "INFO",

    // Retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)
};

console.log(config);