Feature: Comprar produto Cucumber
  Scenario: Realizo a compra de um produto
    Given que acesso a pagina inicial
    When clico em "Sauce Labs Backpack"
    Then aparece pagina do produto "Sauce Labs Backpack" e preco "$ 29.99"
