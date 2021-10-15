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
    VUE_APP_BACKEND_URI={yourbackenduri}
    ```

## Deployment onto Firebase
1. (First time) setup firebase
1.a. `firebase login` to log in
1.b. `firebase init` to connect to the hosting
2. To deploy `npm run deploy`
