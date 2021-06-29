/**
 * Custom CSS file used by Swagger UI
 */

module.exports = `
.swagger-ui .wrapper
{
    padding-top: 10px;
}

.swagger-ui .opblock-tag
{
    padding: 0px 20px 0px 10px;
    font-size: 20px;
}

div[id^="model-"][id$="-item"],
div[id^="model-"][id$="-header"],
div[id^="model-"][id$="-array"],
div[id^="model-request."],
div[id^="model-response."]

{
    display: none;
}
.swagger-ui .opblock .opblock-section-header,
.swagger-ui .topbar,
.swagger-ui .response-col_links,
.information-container,
.parameters-container INPUT,
.swagger-ui .response-controls,
.swagger-ui .execute-wrapper
{
    display: none;
}
`
