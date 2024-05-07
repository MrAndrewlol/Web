# 🚙🚙🚙🚙 Car Blog 🚙🚙🚙🚙

[https://web-7pst.onrender.com/posts](http://carblogs.io)

## Status
Version 0.12
## Descripcion con cmd-AJ

Mi proyecto es un blog de automóviles que cuenta con un front end desarrollado en React y un backend en Node.js con Express.js. Es una plataforma interactiva donde los entusiastas de los automóviles pueden compartir reseñas, discutir sobre las últimas novedades y disfrutar de contenido relacionado con el mundo del automovilismo.


## Instalar y correr el proyecto

# Postgresql
Para instalar el proyecto, es crucial tener en cuenta que el backend emplea los servicios de base de datos de Postgresql, ubicados en Render. Por lo tanto, para ejecutar la base de datos y establecer la conexión con la API, se deben seguir estos pasos:

Instalacion de la libreria de Postgresql para conectar al API con el cliente de Node.js
```bash
npm install pg
```

# Express

Es importante tener en cuenta que el backend utiliza los servicios de base de datos de PostgreSQL y Express.js. La base de datos está alojada en Render. Por lo tanto, para ejecutar la base de datos y conectarla con la API, se deben seguir estos pasos:
```bash
npm install express
```

## Como utilizar los endpoints?
```bash
GET
```
Para conseguir y ver todos los objetos utilizar lo siguiente
[https://web-7pst.onrender.com/posts](http://127.0.0.1:3000/posts/)

```bash
GET
```
Para conseguir un solo objeto utilizar lo siguiente:
[https://web-7pst.onrender.com/posts/:postid](http://127.0.0.1:3000/posts/:postid)

```bash
DELETE
```
Para eliminar un solo objeto utilizar lo siguiente:
[https://web-7pst.onrender.com/posts/:postid](http://127.0.0.1:3000/posts/:postid)



##Modificar o agregar objetos

El API esta te devuelve un objeto json por lo tanto puedes ver la siguiente estructura para poder llenar tu objeto JSON 

```JSON
{
    "title": "Nombres De Los Carros Teslas Son Raros",
    "nombre_carro": "Model S,E,X,Y",
    "modelo_carro": "2024",
    "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
    "fecha": "2024-05-02"
}
```

Para corregir los objetos utilizar lo siguiente
```bash
PUT
```
[https://web-7pst.onrender.com/posts/:postid](http://127.0.0.1:3000/posts/:postid)

```JSON
{
    "id": 1,
    "title": "Nombres De Los Carros Teslas Son Raros",
    "nombre_carro": "Model S,E,X,Y",
    "modelo_carro": "2024",
    "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
    "fecha": "2024-05-02"
}
```


## VITE

Para el desarrollo del frontend, se optó por Vite, una herramienta que proporciona un entorno de desarrollo rápido para aplicaciones web modernas. Se eligió un template de React para la construcción de la interfaz de usuario, lo que permite una creación eficiente y dinámica de componentes y vistas.

```bash
npm create vite@latest
```

# Notes

Por favor nunca pero nunca agregar la carpeta de node_modules