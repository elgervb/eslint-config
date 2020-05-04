

## Use

```
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
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
