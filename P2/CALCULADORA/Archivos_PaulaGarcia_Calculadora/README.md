Para realizar la calculadora tenemos que crear 3 ficheros, un fichero .html, 
otro .css para darle el estilo y por ultimo un fichero Javascript (.js).

En el fichero Javascript he puesto las constantes gui para tener acceso con todo lo relacionado con la interfaz grafica, en vez de tenerlo disperso en elementos aislados.
Definimos las variables digitos y operacion, con las cuales a continuacion creamos un bucle for con el comando onclick, para que aparezca lo que marcamos cuando pulsamos sobre las teclas.

Realizamos una funcion, que en mi caso la he llamado number, en la cual creamos un bucle if para ir nombrando cada constante de estado, que he declarado anteriormente.

La variable digitos esta asociada a los numeros de nuestra calculadora, los cuales los he definido en el fichero .html como class = numero, la variable operacion corresponde a class = simbolos.

Por ultimo, para borrar numero a numero, borrar todo, o para el igual, en el fichero he creado un id para cada uno de ellos, para despues en el fichero .js hacer un display.innerHTML.