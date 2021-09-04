# Fixify Frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## ```.env``` setup
Create a ```.env``` file with the following fields: 
    ```
    GLITCH_DEBUGGER=true
    VUE_APP_BACKEND_URI={yourbackenduri}
    ```
     
## Deployment onto Glitch
1. (First time only) run 
    ```
    npx glitcheroo setup-target
    ```
    from glitch console. 
2. From root directory, run 
    ```
    npm run deploy
    ```
3. (First time only) Copy in the link to your glitch repo.

