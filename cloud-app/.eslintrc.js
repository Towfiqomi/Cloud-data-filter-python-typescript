module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
    project: "./tsconfig.json"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off"
    },
    parserOptions: {
        "warnOnUnsupportedTypeScriptVersion": false,
        "requireConfigFile": false
    },
};