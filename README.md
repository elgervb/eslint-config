

## Use

```
yarn add -D eslint@^7.32.0 @typescript-eslint/parser@^5.3.0 @typescript-eslint/eslint-plugin@^5.3.0
yarn add -D @elgervb/eslint-config
```

Create a `.eslintrc` in the root of your repo with the following contents:
```
{
    "extends": ["@elgervb"]
}
```

or for a TypeScript project:
```
{
  "root": true,
  "extends": ["@elgervb"],
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.js"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json",
          "tsconfig.spec.json"
        ],
        "createDefaultProgram": true
      }
    }
  ]
}
```

`.eslintignore`
```
node_modules
dist
coverage
```

## Run
`yarn eslint . --ext .js,.jsx,.ts,.tsxz`

## Editors

### VSCode
When using [VSCode](https://code.visualstudio.com/), add the following line to `settings.json` so that eslint will fix all fixable problems on save.

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
