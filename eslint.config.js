
import promisePlugin from "eslint-plugin-promise";
import importPlugin from "eslint-plugin-import";
import nodePlugin from "eslint-plugin-node";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: "readonly",
        node: "readonly"
      }
    },
    plugins: {
      promise: promisePlugin,
      import: importPlugin,
      node: nodePlugin
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "multi-line"],
      "comma-dangle": ["error", "only-multiline"],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "promise/always-return": "off",
      "promise/catch-or-return": "warn",
      "node/no-unsupported-features/es-syntax": [
        "error",
        {
          "ignores": ["modules"]
        }
      ]
    },
    settings: {
      "node": {
        "tryExtensions": [".js", ".json", ".node"]
      }
    }
  }
];
