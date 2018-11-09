const WS = require('../src/WS');
const data = require('./data');

describe('src.model.Product', () => {

    let product = new WS.Product(data.groups[0]);

    test('has correct name', () => {
        expect(product.name).toBe("Flannel Tossed Lines Duvet Cover + Shams");
    });

    test('has correct price', () => {
        expect(product.priceRange.regular.high).toEqual(159);
    });

    test('has correct number of images', () => {
        expect(product.images.length).toEqual(4);
    });

    test('has correct first image uri', () => {
        expect(product.images[0].src).toEqual("https://www.westelm.com/weimgs/ab/images/wcm/products/201836/0011/flannel-tossed-lines-duvet-cover-shams-m.jpg");
    });

});
