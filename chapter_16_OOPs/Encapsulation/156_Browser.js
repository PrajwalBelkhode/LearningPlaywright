class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched")
    }

    startBrowser(){
        console.log(`Starting the: ${this.name}`);
    }

    closeBrowser(){
        console.log(`Closing the: ${this.name}`);
    }
}

let Browser_1 = new Browser("Chrome");
Browser_1.startBrowser();
Browser_1.closeBrowser();