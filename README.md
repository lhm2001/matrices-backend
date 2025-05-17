# matrices-backend

Este proyecto contiene dos APIs desarrolladas con Node.js y Express para el procesamiento de matrices. Además, ambas APIs están desplegadas en AWS utilizando servicios como **ECR**, **ECS**, **API Gateway** y control de acceso mediante **Authorization Header**.

## 📁 Estructura del Proyecto

- `api1/`:  
  - Realiza la descomposición QR de una matriz utilizando `ml-matrix`.  
- `api2/`:   
  - Calcula estadísticas: suma, promedio, valores máximos y mínimos, y verifica si la matriz es diagonal.

## ☁️ Infraestructura (Despliegue en AWS)

- 🔸 **ECR (Elastic Container Registry):**  
  Ambas APIs están dockerizadas y almacenadas como imágenes en repositorios separados en ECR.

- 🔸 **ECS (Elastic Container Service):**  
  Las imágenes de ambas APIs están desplegadas en tareas de ECS (Fargate), con servicios independientes para cada API.

- 🔸 **API Gateway:**  
  Se utilizó Amazon API Gateway para exponer públicamente los endpoints de ambas APIs.

- 🔸 **Autenticación / Autorización:**  
  Se implementó control de acceso usando un **header personalizado de Authorization**. Las APIs validan el token recibido antes de procesar la solicitud.

## ▶️ Cómo ejecutar localmente

En cada carpeta (`api1/` y `api2/`):

```bash
npm install
npm start
```
