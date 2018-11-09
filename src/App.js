const WS = require('./WS');

import './sass/App.scss'

// Entry-point for Webpack
//
//  on document load  =>
//    * make http request for catalog json
//    * construct view from response
//    * inject view into DOM

document.body.onload = () => {

    var request = new XMLHttpRequest();
    request.open('GET', '/dist/catalog/all-new.json', true);
    request.onload = () => {
        let json = JSON.parse(request.responseText);
        let shop = new WS.Shop(json);
        let shopView = new WS.ShopView(shop);

        // Inject root view element into document
        document.body.appendChild(shopView.getElement());
    };
    request.send();
}
