const WS = require('../WS');

class Product {

    constructor(json) {
        this.name = json.name;
        this.priceRange = json.priceRange;

        this.thumbnail = new WS.Image(json.thumbnail);

        this.images = json.images.map(image => {
            return new WS.Image(image);
        });
    }
};

module.exports = Product;
