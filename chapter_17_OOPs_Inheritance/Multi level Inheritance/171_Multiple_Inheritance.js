class BasePage{
    constructor(name){
        this.name = name;
    }
    open(){
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage{
    login(user){
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }

    manageUsers(){
        console.log("[ADMIN] Managing users");
    }
}

let Admin = new AdminPage();
Admin.open();
Admin.login("superadmin");
Admin.manageUsers();