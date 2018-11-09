const WS = require('./WS');

import './sass/App.scss'

// Entry-point for Webpack
//
//  onload =>
//  * make request for json,
//  * construct view from response,
//  * inject view into DOM

document.body.onload = () => {

    var request = new XMLHttpRequest();
    request.open('GET', '/ws2018/catalog/all-new.json', true);

    request.onload = () => {
        let json = JSON.parse(request.responseText);
        let shopView = new WS.ShopView(new WS.Shop(json));
        document.body.appendChild(shopView.getElement());
    };

    request.send();
}
