class PlaywrightConfig{
    readonly BaseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(url: string, timeout: number, retries: number){
        this.BaseURL = url;
        this.timeout = timeout;
        this.retries = retries;
    }

    showConfig(): void{
        console.log(`URL:` + this.BaseURL);
        console.log(`Time-out:` + this.timeout);
        console.log(`Retries:` + this.retries);
    }
}

let config = new PlaywrightConfig("https://app.staging.com",30000,3);
config.showConfig();