const WS = require('../WS');

class ShopView extends WS.View {

    getElement() {
        //
        // Basic page Elements
        let header = document.createElement('header');
        header.innerHTML = `<h1><img src="/dist/assets/logo.svg" /></h1><h2>${this.model.name}</h2>`;
        let section = document.createElement('section');
        let footer = document.createElement('footer');
        footer.innerHTML = '<footer>&copy; 2016 Williams-Sonoma Inc., All Rights Reserved</footer>';

        //
        // Compose list of Products
        let prodList = document.createElement('ul');
        prodList.setAttribute('class', 'shop');
        this.model.products.forEach(product => {
            let prodView = new WS.ProductSmalLView(product);
            let prodItem = document.createElement('li');
            prodItem.appendChild(prodView.getElement());
            prodList.append(prodItem);
        });
        section.appendChild(prodList);

        //
        // Lightbox
        let lb = document.createElement('div');
        lb.setAttribute('id', 'lightbox');

        let injectSite = document.createElement('div');
        injectSite.setAttribute('id', 'injectSite');

        lb.appendChild(injectSite);
        lb.style.display = 'none';

        //
        // Shop Composition
        let element = document.createElement('div');
        element.setAttribute('id', 'container');
        element.appendChild(header);
        element.appendChild(section);
        element.appendChild(lb);
        element.appendChild(footer);
        return element;
    }

};

module.exports = ShopView;
