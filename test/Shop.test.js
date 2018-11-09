const WS = require('../src/WS');

describe('src.model.Shop', () => {

    const data = require('./data');
    let shop = new WS.Shop(data);

    test('model has name from json', () => {
        expect(shop.name).toBe('All New');
    });

    test('product count', () => {
        expect(shop.products.length).toBe(10);
    });

    test('first product\'s name', ()=> {
        expect(shop.products[0].name).toBe('Flannel Tossed Lines Duvet Cover + Shams');
    });

});
