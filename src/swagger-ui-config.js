/**
 * Config file for Swagger UI
 */

const customCss = require('./style')

module.exports = {
    // Do not display the explorer
    explorer: false,

    // Inject a custom JS, reload.JS
    // It reload the page when the files change
    customJs: '/reload/reload.js',

    // Custom CSS 
    customCss,

    // Swagger Options
    swaggerOptions: {
      validatorUrl: null,
      displayOperationId: false,
      defaultModelsExpandDepth: 5,
      docExpansion: 'none', // 'full', 'none'
    },

}
