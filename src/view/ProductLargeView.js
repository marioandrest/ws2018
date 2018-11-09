const WS = require('../WS');

class ProductLargeView extends WS.View {

    constructor(model) {
        super(model);
        this.index = 0;
    }

    prevImage() {
        this.index = (this.index - 1 + this.model.images.length) % this.model.images.length;
        this.updateView();
    }

    setImage(n) {
        this.index = n;
        this.updateView();
    }

    nextImage() {
        this.index = (this.index + 1 + this.model.images.length) % this.model.images.length;
        this.updateView();
    }

    updateView() {
        let carousel = this.carousel;

        this.hero.setAttribute('src', this.model.images[this.index].src);
        let children = Array.from(carousel.children);
        children.forEach((child, n) => {
            if (n == this.index)
                child.setAttribute('class', 'current');
            else
                child.setAttribute('class', 'notCurrent');
        });
    }

    getElement() {
        let injectSite = document.createElement('div');
        injectSite.setAttribute('id', 'injectSite');

        let currentImage = this.model.images[this.index];
        let image = new WS.ImageView(currentImage);
        let imageElement = image.getElement();
        imageElement.setAttribute('id', 'hero');
        this.hero = imageElement;
        injectSite.appendChild(imageElement);

        // Exit Link
        let buttonExit = document.createElement('a');
        buttonExit.setAttribute('id', 'buttonExit');
        buttonExit.innerHTML = '&times';
        injectSite.appendChild(buttonExit);
        buttonExit.onclick = () => {
            document.getElementById('lightbox').style.display = 'none';
        };

        // Prev Link
        let buttonPrev = document.createElement('a');
        buttonPrev.setAttribute('id', 'buttonPrev');
        buttonPrev.innerHTML = '<img src="./assets/prev.png" />';
        injectSite.appendChild(buttonPrev);
        buttonPrev.onclick = () => {
            this.prevImage();
        };

        // Next Link
        let buttonNext = document.createElement('a');
        buttonNext.setAttribute('id', 'buttonNext');
        buttonNext.innerHTML = '<img src="./assets/next.png" />';
        injectSite.appendChild(buttonNext);
        buttonNext.onclick = () => {
            this.nextImage();
        };

        let carousel = document.createElement('div');
        carousel.setAttribute('id', 'carousel');
        this.carousel = carousel;

        this.model.images.forEach((image, n) => {
            let thumbView = new WS.ImageView(image);
            let thumbElem = thumbView.getElement();
            thumbElem.onclick = () => {
                this.setImage(n)
            };
            carousel.appendChild(thumbElem);
        });
        injectSite.appendChild(carousel);

        this.updateView();

        return injectSite;
    }
}

module.exports = ProductLargeView;
