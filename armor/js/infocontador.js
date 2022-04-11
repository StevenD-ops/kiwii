const infocontador = (prefix, pushname) => {
return`
Hola ${pushname} -

Si estás leyendo esto, tienes curiosidad sobre el contador de mensajes grupales.

contiene algunos comandos

-
(1) ${prefix}clasificaciones

(Descripción: Muestra el top 5 con más mensajes y comandos ejecutados desde el bot, en el grupo, pero estos mensajes solo se contarán si el bot está activo en termux, almacenará los datos de cada uno que envíe el mensaje. )
 - - - - - -



-
(2) ${prefix}actividades

(Descripción: Este comando, muestra las actividades de todos los miembros del grupo, pero debo recordarte nuevamente que solo en el termux que almacena los datos.)
- - - - - - - - - -



-
(3) ${prefix}checkactive

(Descripción: Este comando, debes etiquetar a la persona, Ejemplo: ${prefix}checkactive @tag-the-person-of-gp, y así, es similar a los otros 2.)
- - - - - - - - - - -



(4) ${prefix}banghost

(Descripción: Preste mucha atención, este comando, debe escribirlo, más la cantidad de mensaje que es para banear a las personas que tienen menos de esa cantidad.

Ejemplo: ${prefix}banghost 0

desterrará a todos aquellos con 0 mensajes, pero no escriba este comando fuera de termux (EJEMPLO: ALOJADO EN SITIOS, NO EN TERMUX, COMO ERA UN COMANDO, EL COMANDO SE DEBE EJECUTAR EN WHATSAPP), ya que eliminará todos sin parar, que tiene 0 mensaje, ya en termux, banea a una persona por comando, lee esto atentamente, porque no me haré responsable de eliminar a todos de tu grupo, por tus errores, recomiendo dejar el bot encendido por 1 semana en el grupo, para usar este comando, y desterrar a aquellos que nunca enviaron mensajes al grupo.)
 `
}

exports.infocontador = infocontador
