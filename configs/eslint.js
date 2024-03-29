module.exports = {
  extends: [
    "eslint:recommended"
  ],
  rules: {
    "complexity": [
      "error",
      10
    ],
    "consistent-return": "error",
    "default-case": "error",
    "default-case-last": "error",
    "max-depth": [
      "error",
      3
    ],
    "no-array-constructor": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-param-reassign": "error",
    "no-unused-expressions": "error",
    "no-self-compare": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": [
      "error",
      "always"
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ],
        "allowSeparatedGroups": true
      }
    ],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true
      }
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "objectsInArrays": true
      }
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "arrow-parens": [
      2,
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
    "arrow-spacing": "error",
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "function-paren-newline": [
      "error",
      "multiline"
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-parens": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-shadow": "off",
    "no-trailing-spaces": [
      "error",
      {
        "ignoreComments": true
      }
    ],
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [
      "error",
      "below"
    ],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": [
      "error",
      {
        "classes": "always"
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": "error",
    "semi-style": [
      "error",
      "last"
    ],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "switch-colon-spacing": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": "error",
    "yield-star-spacing": [
      "error",
      "before"
    ]
  }
}
