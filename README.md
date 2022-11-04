# Exemplo: mda-wdio-sauce

## Instruções:

1. `npm install webdriverio --save-dev`

2. `npm init wdio .`

3. Escolha as seguintes opções do webdriver.io:
    1. Sauce Labs
    2. padrão
    3. padrão
    4. N
    5. us
    6. mocha
    7. N
    8. padrão
    9. Y
    10. Y
    11. padrão
    12. spec
    13. nenhum/padrão
    14. sauce
    15. padrão
    16. Y

4. Colar as capabilities no arquivo wdio.conf.js

5. Adicionar o seguinte bloco no package.json:
```
"scripts": {
    "wdio": "wdio run wdio.conf.js"
}
```

6. Rodar os testes com o comando: `npm run wdio`