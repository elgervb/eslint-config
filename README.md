

## Use

```
yarn add -D eslint@^9.18.0 @typescript-eslint/parser@^8.21.0 @typescript-eslint/eslint-plugin@^8.21.0 @stylistic/eslint-plugin@^2.13.0
yarn add -D @elgervb/eslint-config@latest
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


## Release
Bump version in package.json

```
npm login
npm publish
```

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
