//
// View
//   All Views extend this abstract class
//
// HTML2DOM(html) => dom
//   Utility method to convert [html] into a [dom] object using <template>
//
// getElement => dom
//   returns element ready for insertion into DOM
//

class View {

    constructor(model) {
        if (this.constructor == View) {
            throw new Error('Abstract class instantiated.');
        }
        this.model = model;
    }

    static HTML2DOM(html) {
        let template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    }

    getElement() {
        throw new Error('Abstract method invoked.');
    }
};

module.exports = View;
