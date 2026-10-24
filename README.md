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

La construcción de la imagen Docker y la ejecución del contenedor fueron verificadas correctamente. Los endpoints / y /health respondieron como se esperaba.

## 8. Estado del desarrollo

La API desarrollada con Node.js y Express fue ejecutada y probada correctamente tanto en el entorno local como dentro de un contenedor Docker.

Se verificaron los endpoints `/` y `/health`, y se comprobó la construcción de la imagen y el inicio del contenedor.

El proyecto continúa en desarrollo. Queda pendiente la integración de NGINX como balanceador de carga, la configuración de la infraestructura mediante Docker Compose y la realización de pruebas de estrés con su correspondiente análisis crítico.
## 9. Repositorio

[tp3-cloud-native-v2 en GitHub](https://github.com/milinievas/tp3-cloud-native-v2)
