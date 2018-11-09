const WS = require('../WS');

class ShopView extends WS.View {

    getElement() {
        //
        // Basic page Elements
        let header = document.createElement('header');
        header.innerHTML = `<h1><img src="/ws2018/assets/logo.svg" /></h1><h2>${this.model.name}</h2>`;
        let section = document.createElement('section');
        let footer = document.createElement('footer');
        footer.innerHTML = '<footer>&copy; 2018 Williams-Sonoma Inc., All Rights Reserved</footer>';

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
        let lbExit = document.createElement('a');
        lbExit.innerHTML = '&times';
        let lbInner = document.createElement('div');
        let lbHero = document.createElement('img');
        lbHero.setAttribute('id', 'lbHero');
        lbHero.setAttribute('src', '/ws2018/assets/logo.svg');
        lbInner.appendChild(lbHero);
        lbInner.appendChild(lbExit);
        lb.appendChild(lbInner);
        lb.style.display = 'none';

        //
        // Exit Event Handler for Lightbox
        lbExit.onclick = () => {
            lb.style.display = 'none';
        };

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
