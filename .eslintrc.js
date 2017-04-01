module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [ "warn", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "warn", "single" ],
    "object-curly-spacing": [ "error", "always", { "objectsInObjects": true } ],
    "react/jsx-curly-spacing": [1, "always"]
  }
};
