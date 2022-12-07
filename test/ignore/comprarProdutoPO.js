const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../../features/pageobjects/HomePage')
const ProductPage = require('../../features/pageobjects/ProductPage')

Given(/^que acesso a pagina inicial$/, async () => {
    await HomePage.esperarCarregamento()
});

When(/^clico em "([^"]*)?"$/, async (nome) => {
    await HomePage.clickProduct(nome)
});

Then(/^aparece pagina do produto "([^"]*)?" e preco "([^"]*)?"$/, async (nome, preco) => {
    expect(await ProductPage.titulo.getText()).toEqual(nome)
    await ProductPage.arrastarParaCima()
    expect(await ProductPage.preco.getText()).toEqual(preco)
});

