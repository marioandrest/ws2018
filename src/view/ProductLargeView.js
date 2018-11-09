const WS = require('../WS');

class ProductLargeView extends WS.View {

    getElement() {
        let div = document.createElement('div');

        let image = new WS.ImageView(this.model.thumbnail);
        div.innerHTML = `<p>HELLO WORLD (${this.model.name})</p>`;
        div.appendChild(image.getElement());

        return div;
    }
}

module.exports = ProductLargeView;
