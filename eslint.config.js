const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                console: "readonly",
            },
        },
    },
];