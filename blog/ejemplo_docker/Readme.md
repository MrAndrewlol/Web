# 🚙🚙🚙🚙 Api Cars 🚙🚙🚙🚙

 API Carros Es un API principalmente para ser utilizado para mi blog que consiste en vehiculos



## Como utilizar?
```bash
GET
```
Para conseguir y ver todos los objetos utilizar lo siguiente
[http://127.0.0.1:3000/posts/](http://127.0.0.1:3000/posts/)

```bash
GET
```
Para conseguir un solo objeto utilizar lo siguiente:
[http://127.0.0.1:3000/posts/:postid](http://127.0.0.1:3000/posts/:postid)

```bash
DELETE
```
Para eliminar un solo objeto utilizar lo siguiente:
[http://127.0.0.1:3000/posts/:postid](http://127.0.0.1:3000/posts/:postid)



##Modificar o agregar objetos

El API esta te devuelve un objeto json por lo tanto puedes ver la siguiente estructura para poder llenar tu objeto JSON 

```JSON
{
        "title": 
        "nombre_carro": 
        "modelo_carro": 
        "contenido":
        "imagen": 
    }
```

Para corregir los objetos utilizar lo siguiente
```bash
PUT
```
[http://127.0.0.1:3000/posts/:postid](http://127.0.0.1:3000/posts/:postid)

Para corregir los objetos utilizar lo siguiente
```bash
POST
```
[http://127.0.0.1:3000/posts/](http://127.0.0.1:3000/posts/)
