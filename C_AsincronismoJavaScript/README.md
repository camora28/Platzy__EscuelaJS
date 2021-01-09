# Curso de Asincronismo con JavaScript


## .4 Definiciòn Estructura Callback
- git init
- npm init

```sh
# creamos la carpeta src dentro de la carpeta src creamos otra carpeta callback dentro de la carpeta creamos un archivo index.js
- mkdir src
- mkdir callback
- touch index.js
#configuramos el archivo index.js
 
```

```js
// configuraciôn archivo index.js 

function date(callback) {
    console.log(new Date);
     setTimeout(function() {
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
```
## 5. Peticiones a APIs usando Callbacks

*Recursos*
[](https://rickandmortyapi.com/api/character/)

## 6. Múltiples Peticiones a un API con Callbacks

## 7. Implementando Promesas

## 8. Resolver problema con Promesas

## 9. Conociendo Async/await

## 10. Resolver problema con Async/Await

