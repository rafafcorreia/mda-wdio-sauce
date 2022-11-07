const HomePage = require('../pageobjects/HomePage')
const ProductPage = require('../pageobjects/ProductPage')
const massa = require('../../vendors/json/massa')

describe('Testando Produtos - Page Object + Data Driven', () => {
    beforeEach(async () => {
        await HomePage.esperarCarregamento()
    });

    afterEach(async () => {
        await ProductPage.irParaCatalogo()
    })
    
    massa.array.forEach(({nome, preco}) => {
        it(`Produto ${nome}`, async () => {
            await HomePage.clickProduct(nome)
            expect(await ProductPage.titulo.getText()).toEqual(nome)
            await ProductPage.arrastarParaCima()
            expect(await ProductPage.preco.getText()).toEqual(preco)
        });
    })
});