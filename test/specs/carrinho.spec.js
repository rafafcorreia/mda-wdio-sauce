describe('Testando Produtos Agora', () => {
    before(async () => {
        const productsTitle = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView'
    
        await $(productsTitle).waitForDisplayed();
    });

    it('Produto Mochila', async () => {
        const mochila = `//android.widget.ImageView[@content-desc="Sauce Labs Backpack"]`
        await $(mochila).click()
        
        const mochilaTitulo = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView'
        expect(await $(mochilaTitulo).getText()).toEqual('Sauce Labs Backpack');
        
        await driver.touchAction([
            { action: 'press', x: 350, y: 1100 },
            { action: 'moveTo', x: 350, y: 350 },
            'release'
        ])

        const mochilaPreco = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.TextView'
        expect(await $(mochilaPreco).getText()).toEqual('$ 29.99');
    });
});
