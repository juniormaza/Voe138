const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080, // altura da tela com 1080 px
    viewportWidth:  1980, // largura da tela com 1980 px
    baseUrl: 'http://blazedemo.com', // endereço do objeto de teste / alvo 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
