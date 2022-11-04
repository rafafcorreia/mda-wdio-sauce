class HomePage {

    get productsTitle() {
        return $('//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView');
    }

    async clickProduct(nome) {
        $(`//android.widget.ImageView[@content-desc="${nome}"]`).click()
    }

    async esperarCarregamento() {
        await this.productsTitle.waitForDisplayed();
    }
}

module.exports = new HomePage()