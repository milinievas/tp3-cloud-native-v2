# TP3 - Despliegue de Arquitectura Cloud-Native

## 1. Descripción del proyecto

Este trabajo práctico tiene como objetivo implementar una arquitectura Cloud-Native utilizando contenedores Docker y servicios configurados para su ejecución en un entorno local.

El repositorio contiene el desarrollo de una API basada en Node.js y Express, junto con su configuración para ejecutarse dentro de un contenedor Docker.

## 2. Integrantes

- Milagros Nievas
- Juan Nahuel Gorri 
- Agostina Molina

## 3. Tecnologías utilizadas

- Node.js
- Express
- Docker
- Git y GitHub

## 4. Estructura del proyecto

tp3-cloud-native-v2/
├── .gitignore
├── README.md
└── api/
    ├── Dockerfile
    ├── index.js
    └── package.json

## 5. API

La API está desarrollada con Node.js y Express.

### Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Devuelve un mensaje de presentación de la API. |
| GET | `/health` | Devuelve el estado de salud del servicio. |

## 6. Ejecución local

Requisitos previos:

- Node.js y npm instalados.

Desde la carpeta `api`, ejecutar:

```bash
npm install
npm start
```

La API utiliza el puerto `3000` por defecto, salvo que se configure otro mediante la variable de entorno `PORT`.

Una vez iniciada, se podrá acceder a:

- API: http://localhost:3000/
- Health check: http://localhost:3000/health

## 7. Construcción y ejecución con Docker

Desde la carpeta raíz del repositorio, construir la imagen:

```bash
docker build -t tp3-cloud-native-api ./api
```

Ejecutar el contenedor:

```bash
docker run --rm -p 3000:3000 --name tp3-api tp3-cloud-native-api
```

Luego, verificar los endpoints desde el navegador o una herramienta de pruebas HTTP.

> Estas instrucciones deberán verificarse cuando se realicen las pruebas de Docker.

## 8. Estado del desarrollo

El proyecto se encuentra en etapa de desarrollo. La API y su Dockerfile están preparados inicialmente; la ejecución y las pruebas quedan pendientes de validación.

La configuración final de la arquitectura se documentará a medida que se integren y verifiquen los componentes del grupo.

## 9. Repositorio

[tp3-cloud-native-v2 en GitHub](https://github.com/milinievas/tp3-cloud-native-v2)
