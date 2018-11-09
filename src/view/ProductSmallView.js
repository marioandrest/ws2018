const WS = require('../WS');

class ProductSmallView extends WS.View {


    onImageClick() {
        alert('message');
    }

    getElement() {
        let imageView = new WS.ImageView(this.model.thumbnail);
        let imageElement = imageView.getElement();
        let imageLink = document.createElement('a');
        imageLink.setAttribute('href', '#');
        imageLink.appendChild(imageElement);

        imageElement.onclick = () => {
            document.getElementById('lbHero').setAttribute('src', this.model.thumbnail.src);
            document.getElementById('lightbox').style.display = 'block';
        };

        imageElement.onmouseover = () => { imageElement.style.transform = 'scale(1.2)'; };
        imageElement.onmouseout = () => { imageElement.style.transform = 'scale(1.0)'; };

        let regular = `<p class="regular">\$${this.model.priceRange.regular.low}-\$${this.model.priceRange.regular.high}</p>`;
        let selling = `<p class="selling">${this.model.priceRange.type.toUpperCase()} \$${this.model.priceRange.selling.low}-\$${this.model.priceRange.selling.high}</p>`;

        let priceBar = document.createElement('div');
        priceBar.setAttribute('class', 'priceBar');
        priceBar.innerHTML = selling + regular;

        let title = document.createElement('p');
        title.setAttribute('class', 'title');
        title.innerText = this.model.name;

        let div = document.createElement('div');
        div.setAttribute('class', 'product');
        div.appendChild(imageLink);
        div.appendChild(title);
        div.appendChild(priceBar);
        return div;
    }
}

module.exports = ProductSmallView;
