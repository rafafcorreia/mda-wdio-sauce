/* const HomePage = require('../pageobjects/HomePage')
const ProductPage = require('../pageobjects/ProductPage')

describe('Testando Produtos - Com Page Object', () => {
    before(async () => {
        await HomePage.esperarCarregamento()
    });

    it('Produto Mochila', async () => {
        await HomePage.clickProduct('Sauce Lab Back Packs')
        expect(await ProductPage.titulo.getText()).toEqual('Sauce Lab Back Packs')
        await ProductPage.arrastarParaCima()
        expect(await ProductPage.preco.getText()).toEqual('$ 29.99')
    });
}); */