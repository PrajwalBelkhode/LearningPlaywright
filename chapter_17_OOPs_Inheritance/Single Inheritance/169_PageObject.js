class BasePage{
    verify(){
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage{
    verify(){
        console.log("Verify username exists");
        console.log("Verify password exists");
        console.log("Verify login button is visible");
    }
}

class DashboardPage extends BasePage{
    verify(){
        console.log("Verify: welcome message shown");
        console.log("Verify sidebar menu loaded");
    }
}

class CartPage extends BasePage{
    verify(){
        console.log("Verify cart items displayed");
        console.log("Verify total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()]

for (let page of pages){
    page.verify();
    console.log("-----")
}