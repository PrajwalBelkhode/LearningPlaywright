interface BasePage{
    url: string;
    title: string;
}

interface LoginPage extends BasePage{
    usernameSelector: string;
    passwordSelector: string;
    loginbuttonSelector: String;
}

interface FreeTrialPage extends BasePage{
    usernameSelector: string;
    submitbuttonSelector: string;
}

let loginPage : LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginbuttonSelector: "#login-btn"
}

let freeTrial: FreeTrialPage = {
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitbuttonSelector: "#submit-btn"
}

console.log("URL: "+ loginPage.url);
console.log("Title: "+ loginPage.title);
console.log("Username field: "+loginPage.usernameSelector);

console.log("-------------------------------------------------- \n");

console.log("URL: "+ freeTrial.url);
console.log("Title: "+ freeTrial.title);
console.log("Username field: "+freeTrial.usernameSelector);