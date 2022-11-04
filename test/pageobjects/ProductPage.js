class ProductPage {

    get title() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView')
    }

    async arrastarParaCima() {
        await driver.touchAction([
            { action: 'press', x: 350, y: 1100 },
            { action: 'moveTo', x: 350, y: 350 },
            'release'
        ])
    }

    get preco() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.TextView')
    }
}

module.exports = new ProductPage()