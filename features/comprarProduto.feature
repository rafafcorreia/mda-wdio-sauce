Feature: Comprar produto
  Scenario: Realizo a compra de um produto
    Given que acesso a pagina inicial
    When clico em "Sauce Lab Back Packs"
    Then aparece pagina do produto "Sauce Lab Back Packs" e preco "$ 29.99"
