class ProductPage {

    get titulo() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView')
    }

    get menu() {
        return $('//android.widget.ImageView[@content-desc="View menu"]')
    }

    get catalogo() {
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Recycler view for menu"]/android.view.ViewGroup[1]/android.widget.TextView[2]')
    }

    async irParaCatalogo() {
        await this.menu.click()
        await this.catalogo.click()
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