## Ejercicio para aplicar al puesto de devops

### 1. Dadas estas 2 arquitecturas, usar alguna de las siguientes herramientas (o la que prefieras) para generar como sería el diagrama:

* https://cloudcraft.co/
* https://diagrams.visual-paradigm.com/#diagram:proj=0&type=AWSDiagram

Ejemplo de como esperamos que se vea el estilo del diagrama:
![Ejemplo](https://d2908q01vomqb2.cloudfront.net/af3e133428b9e25c55bc59fe534248e6a0c0f17b/2018/07/06/architecture.png)

```
Arquitectura 1

-Un load balancer
-Dos instancias ec2 (las dos instancias ec2 estan en la misma vpc para interconectarse)
-Las dos instancias se comunican con una base de datos DynamoDB
```
```
Arquitectura 2

-Una funcion lamba con dos puntos de entrada
-Un punto de entrada es un api gateway que expone un endpoint y cuando se le pega a ese endpoint se ejecuta el lambda
-El otro punto de entrada al lambda es por un cron de cloudwatch
-Esa funcion lambda guarda cosas en un S3
```

### 2. Exportar los diagramas a imagen y hacer una pull request en este repo agregando los archivos.

### 3. Encontrar lo que falla en la funcion main del archivo index.js y corregirlo en la misma pull request.
