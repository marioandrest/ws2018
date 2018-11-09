# Williams-Sonoma: Coding Challenge for 2018

submited by **Mario Tinoco** in **Nov 2018** 

All code was written in vanilla javacript and sass. Build and other development scripts use [Webpack](https://webpack.js.org/), testing framework is [Jest](https://jestjs.io/).

### Installation

```
git clone https://github.com/marioandrest/ws2018.git
cd ws2018
npm install
```

### Live Demo of Build

Script `npm run build` generates a build of the website at `./ws2018`

There is a live demo of the build at [http://mariotinoco.com/dist](http://mariotinoco.com/ws2018)

*Bonus **responsive** feature can be seen by sizing window less than 800px (2 columns) and 600px wide (1 column).*

### Manual UI Testing

Manual UI testing can be done by launching a live-refresh web server.

`npm run serve`.

I audited UI functionality on `{Chrome 70, Firefox 63, Edge 42, IE 11}`

### Unit Testing

Unit tests can be ran with `npm test`

```
 PASS  test/Shop.test.js
 PASS  test/Product.test.js
 PASS  test/Image.test.js
 PASS  test/View.test.js

Test Suites: 4 passed, 4 total
Tests:       16 passed, 16 total
```

### Full NPM Usage

| Script          | Description                                       |
|-----------------|---------------------------------------------------|
| `npm run serve` | Starts a localhost web server with live updating. |
| `npm run dev`   | Transpile and bundle javascript (development)     |
| `npm test`      | Run all unit tests (Jest)                         |
| `npm run build` | Transpile and bundle javascript (production)      |

### Directory Structure

`$tree -I 'node_modules' -d`

```
.
├── ws2018          // build output for production
├── src             
│   ├── model       // json consumers
│   ├── sass
│   └── view        // javascript code for view layer
└── test            // all unit tests and a cached data.json 
```
