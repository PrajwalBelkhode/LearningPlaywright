#### 1. What is a Client in Playwright?

* In Playwright, a client is your test script — the code that you write that sends commands to the browser via Playwright's API. It is the "requester" side of the client-server relationship.
* The full flow will be as follows:
  * You write a test script - In JavaScript, Python, Java, or C#.
  * **Client** **sends commands** to the Playwright Node.js server via Websocket.
  * Server translates these commands into browser-specific protocols (like Chrome DevTools Protocols — CDP for Chromium)
  * **Browser executes** the action (click, fill, navigate etc.)
  * **Response travels back** — browser → server → your client script

#### 2. What is a Server?

* A **server** is a computer or software program that listens for requests from other devices (called  **clients** ) over a network and responds by providing data, resources, or services.
* A server is always **listening** on a specific network port for incoming requests. When a request arrives, it processes the request and returns a structured response — for example, a web server sends back an HTML page when your browser asks for a website. This request-response cycle is the backbone of how the internet functions.
* In PlayWright, the web server connects with the browsers (Chrome, Edge, Firefox) and executes the commands given in your test scripts.


#### 3. What is a WebSocket?

* A **WebSocket** is a communication protocol that establishes a **persistent, two-way (bidirectional) connection** between a client and a server over a single TCP connection — unlike regular HTTP where the client must send a new request every time it needs data.
* Playwright utilizes **WebSockets for efficient, bidirectional communication** between the client and server, running over TCP.
* WebSocket operates on a full-duplex model, allowing clients to send multiple messages simultaneously without waiting for a response.
* Playwright communicates with Chromium under the hood using Chrome DevTools Protocol, which itself runs over WebSocket — meaning every browser action flows through a WebSocket pipe.
* Examples: WhatsApp, Collborative editors like Google docs

#### 4. What is Channeling in terms of Playwright? How does playwright commuicates with a Real browser?

* **Step 1 — Browser launches with a special port**
  Playwright starts the browser with a flag like `--remote-debugging-port=9222`, which tells the browser: *"Hey, listen for commands on this port."*
* **Step 2 — A channel (WebSocket) is opened**
  Playwright immediately connects to that port and keeps one persistent WebSocket connection open — this is the  **channel** .
* **Step 3 — Commands flow as JSON messages**
  Every time you write `page.click()` or `page.goto()`, it gets converted into a JSON message and sent through that channel to the browser.
* **Step 4 — Browser responds back**
  The browser executes the action and sends events (like "page loaded", "element found") back through the same channel.
* **Step 5 — Playwright auto-waitsn**
  Because the browser keeps pushing events back, Playwright knows exactly when things are ready — so it automatically waits without you needing `sleep()` calls.
