## Ejercicio para aplicar al puesto de devops

### 1. Dadas estas 2 arquitecturas, usar alguna de las siguientes herramientas (o la que prefieras) para generar como sería el diagrama:

* https://cloudcraft.co/
* https://diagrams.visual-paradigm.com/#diagram:proj=0&type=AWSDiagram

Ejemplo de como esperamos que se vea el estilo del diagrama:
![Ejemplo](https://d2908q01vomqb2.cloudfront.net/af3e133428b9e25c55bc59fe534248e6a0c0f17b/2018/07/06/architecture.png)

```
Arquitectura 1

-Un load balancer
-Cuatro instancias ec2 
-Aclarar en el diagrama el tamaño recomendado de las instancias que debería elegirse ya que
el presupuesto del cliente es limitado pero cada instancia va a recibir 10.000 usuarios recurrentes
todo el tiempo
-Una instancia se comunica con una base de datos DynamoDB
-Otra instancia guarda en S3
-Otra instancia guarda en Redis
.Otra instancia debe comunicarse con un servicio de AWS que permita indexar contenidos 
para luego realizar búsquedas
-Los jefes de producto desean además un cliente de búsquedas desde la consola de AWS para realizar
algunas queries de contenidos

Importante: Cada instancia no debe poder ver nada que use otra desde el ssh haciendo ping, por ejemplo,
la instancia que usa Redis no puede acceder tambien a S3.
```

```
Arquitectura 2

-Una funcion lambda con dos puntos de entrada
-Un punto de entrada es un api gateway que expone un endpoint y cuando se le pega a ese
endpoint se ejecuta el lambda
-El otro punto de entrada al lambda es por un cron de cloudwatch
-Esa funcion lambda guarda cosas en un S3
-Cada vez que se guarda en S3, un trigger envía un mensaje a un servicio de cola de AWS
```

### 2. Exportar los diagramas a imagen y hacer una pull request en este repo agregando los archivos.

### 3. Continuar el código lambda en main.js para que cada vez que corra la función haga el fetch de esta imagen de internet y la guarde en S3 usando el SDK de AWS. Pushear todo en la misma pull request junto con los diagramas.

![Cat](https://www.c-ville.com/wp-content/uploads/2019/09/Cats-660x335.jpg)

### 4. Encontrar lo que falla en la funcion del archivo index.js y corregirlo en la misma pull request.
