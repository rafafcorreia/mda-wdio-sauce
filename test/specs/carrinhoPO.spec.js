const HomePage = require('../pageobjects/HomePage')
const ProductPage = require('../pageobjects/ProductPage')

describe('Testando Carrinho - Com Page Object', () => {
    beforeEach(async () => {
        await HomePage.esperarCarregamento()
    });

    it('Carrinho vazio', async () => {
        await HomePage.clickProduct('Sauce Lab Back Packs')
        expect(await ProductPage.title.getText()).toEqual('Sauce Lab Back Packs')
        await ProductPage.arrastarParaCima()
        expect(await ProductPage.preco.getText()).toEqual('$ 29.99')
    });
});