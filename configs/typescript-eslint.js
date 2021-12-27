module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true,
      "allowHigherOrderFunctions": true,
      "allowDirectConstAssertionInArrowFunctions": true
    }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-ordering": ["error", { "default": [
      "signature",
      "field",
      "decorated-get",
      "get",
      "decorated-set",
      "set",
      "protected-decorated-field",
      "protected-field",
      "protected-decorated-get",
      "protected-get",
      "protected-decorated-set",
      "protected-set",
      "private-decorated-field",
      "private-field",
      "private-decorated-get",
      "private-get",
      "private-decorated-set",
      "private-set",
      "constructor",
      "public-decorated-method",
      "protected-decorated-method",
      "private-decorated-method",
      "method"
    ]}],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        "ignoreStatic": true
      }
    ]
  }
};
