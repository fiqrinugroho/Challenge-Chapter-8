module.exports = {
    "env": {
      "node": true,
      "jest": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "plugins": ["jest", "security", "prettier"],
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "rules": {
      "consistent-return": "off",
      "func-names": "off",
      "jest/expect-expect": "off",
      "no-console": "error",
      "no-underscore-dangle": "off",
      "no-unused-labels": "error",
      "no-unused-vars": "error",
      "security/detect-object-injection": "off"
    }
  }
  