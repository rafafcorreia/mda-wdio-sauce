const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^que acesso a pagina inicial$/, async () => {
    const productsTitle = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView'
    
    await $(productsTitle).waitForDisplayed();
});

When(/^clico em "([^"]*)?"$/, async (nome) => {
    const mochila = `//android.widget.ImageView[@content-desc="${nome}"]`
    await $(mochila).click()
});

Then(/^aparece pagina do produto "([^"]*)?" e preco "([^"]*)?"$/, async (nome, preco) => {
    const mochilaTitulo = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView'
    expect(await $(mochilaTitulo).getText()).toEqual(nome);
    await driver.touchAction([
        { action: 'press', x: 350, y: 1100 },
        { action: 'moveTo', x: 350, y: 350 },
        'release'
    ])
    const mochilaPreco = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.TextView'
    expect(await $(mochilaPreco).getText()).toEqual(preco);
});

