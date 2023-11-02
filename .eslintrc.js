module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parser": "@babel/eslint-parser", // Utilisation du parser Babel
    "parserOptions": {
      "requireConfigFile": false, // Configuration Babel via les options du parser ESLint
      "babelOptions": {
        "plugins": ["@babel/plugin-proposal-private-property-in-object"]
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {}
  };
  