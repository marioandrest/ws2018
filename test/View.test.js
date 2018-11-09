const WS = require('../src/WS');

describe('src.view.View', () => {

    test('instantiate abstract class', () => {
        expect(() => {
            let view = new WS.View();
        }).toThrow('Abstract class instantiated.');
    });

    test('invoke abstract method', () => {
        expect(() => {
            class BadView extends WS.View {};
            let badView = new BadView();
            badView.getElement();
        }).toThrow('Abstract method invoked.');
    });

});
