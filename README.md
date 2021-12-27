

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

`.eslintignore`
```
node_modules
dist
coverage
```

## Run
`yarn eslint . --ext .js,.jsx,.ts,.tsxz`
