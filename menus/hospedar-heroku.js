const hospedar = (prefix) => {
return `

CÓMO SER ANFITRIÓN EN HEROKU...

SABES QUE DEBES DAR LOS COMANDOS BÁSICOS DE TERMUX, DE LO CONTRARIO NO VENGAS NI A DAR LOS COMANDOS PARA LANZAR A HEROKU:

Y RECORDANDO A TODOS:> HEROKU NO ALMACENA DATOS, POR LO QUE DEBE DAR TODOS LOS COMANDOS DEL BOT PARA HABILITAR FUNCIONES, EN TERMUX, TODO EN HEROKU QUE SE ACTIVA, Y SE RESTABLECE, TODO LO QUE ESTUVO ACTIVADO VOLVERÁ AL PREDETERMINADO, COMO ERA ENVIADO.

VIDEO DE COMANDOS BÁSICOS:

[ https://youtu.be/OiWcm9INzXE ]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

PRIMERO, DEBE REGISTRARSE EN HEROKU, DESPUÉS DE LAS ACCIONES ANTERIORES.

SITIO WEB: heroku.com

ES REGISTRO BASICO, COMO CUALQUIER SITIO, SI NO SABES COMO HACERLO SERÁ DIFÍCIL SEGUIR ADELANTE KKKKKK

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

DESPUÉS DE REGISTRARSE EN HEROKU, IR A TERMUX Y COMANDAR LO SIGUIENTE:

PASO LOS COMANDOS, PASO A PASO SIGUIENTE..


inicio de sesión de heroku -i


ESTE COMANDO ^ ES PARA CONECTARSE A LA CUENTA HEROKU, PRIMERO INGRESARÁ EL CORREO ELECTRÓNICO DE LA CUENTA HEROKU, Y LUEGO INGRESARÁ LA CONTRASEÑA, Y CONFIRMAR CON ENTER...

SE CONECTARÁ.

Siguiente comando:

1_ MANDO:

cd /sdcard/random-md

1.2_ MANDO :

índice de nodo

ESCANEE EL QRCODE CON EL TEST BETA ACTIVADO, SI ES LA VERSIÓN MULTIDISPOSITIVO, ALEATORIO - MD

1.3_ PASO :

LUEGO PRESIONE EL VOLUMEN ABAJO EL VOLUMEN DEL TELÉFONO, Y PRESIONE LA LETRA Z, DESPUÉS DE ESCANEAR EL QRCODE, Y HAGA LOS PROCEDIMIENTOS A CONTINUACIÓN, RECUERDE CONFIGURAR EL BOT ANTES, AQUÍ LE EXPLICARÉ EL POR QUÉ.

1.4_ MANDO :

rm -rf .git

2_ MANDO :

iniciar git

3_ MANDO :

aplicaciones heroku: crear APPNAME

^ en APPNAME, pon tu nombre, o nickname con números, para que acepte, debe ser una letra menuscula, recuerda el nombre.

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

PRÓXIMOS COMANDOS:

4_ COMANDO :

paquetes de compilación de heroku: agregar heroku/nodejs

5_ MANDO :

paquetes de compilación heroku: agregar https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

6_ MANDO:

paquetes de compilación heroku: agregar https://github.com/clhuang/heroku-buildpack-webp-binaries.git

_7 COMANDO :

heroku git:remoto -a NOMBRE DE LA APLICACIÓN

En APPNAME pones el nombre que pusiste, que yo había creado, en el primero que informé.

_8 COMANDO :

git config --usuario global.email "tantofaz@gmail.com"
git config --usuario global.nombre "Lo que sea"

Pegue exactamente de esta manera, no es necesario editar nada...

_9 COMANDO :

agrega git

_10 COMANDO :

git commit -am "blabla"

_11 COMANDO :

git empuje maestro heroku

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

PRÓXIMO:

ENTRAR A LA WEB: heroku.com

ACCEDA A SU CUENTA QUE USTED CREÓ, INGRESE A LA APLICACIÓN QUE FUE CREADA, COMO MUESTRA ESTE ENLACE:

[https://telegra.ph/file/5c2bc8d1290914de5ddc3.jpg]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

DESPUÉS DE ENTRAR A LA APLICACIÓN

ACCEDE A ESTA PARTE QUE SE ENCUENTRA EN EL ENLACE ABAJO QUE MUESTRA LA IMPRESIÓN DE LA FOTO:

[https://telegra.ph/file/7e3b3f6b8f0a04118c8ac.jpg]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

HAGA LO MISMO QUE SE MUESTRA EN LA IMPRESIÓN Y ESCRITO.

IMPRIMIR ENLACE ACTIVACIÓN DEL BOTÓN:

[https://telegra.ph/file/e7538214885d688e4eb06.jpg]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

HAZ COMO TE EXPLIQUE PASO A PASO, SI CAMBIAS HASTA UNA COMA O PUNTAJE DE LO QUE ENSEÑÉ, PUEDE DAR UN ERROR, RECORDANDO TAMBIÉN QUE SI YA HAN DADO LOS COMANDOS BÁSICOS DE TERMUX, NO REPITAS PORQUE PUEDE CAUSAR UN ERROR EN TERMUX, Y TENDRÁS QUE REHACER TODOS LOS COMANDOS BÁSICOS DE TERMUX..

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

COMANDO PARA ACTUALIZAR, SI EDITA ALGUNA INFORMACIÓN, O NOMBRE DEL BOT:

ACCEDE A LA CARPETA BOT CON:

_1 COMANDO :

cd /sdcard/random-md

_2 COMANDO :

agrega git

3_ MANDO :

git commit -am "blabla"

4_ COMANDO :

git empuje maestro heroku

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
`
}

exports.hospedar = hospedar
