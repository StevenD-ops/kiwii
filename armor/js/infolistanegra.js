const infolistanegra = (prefix, pushname) => {
return `
Hola ${pushname} ¿quieres saber cómo funciona el comando blacklister?, vamos.

hay estos 3 comandos

${prefix}autoban

${prefix}lista negra

${prefix}tirador


--------------------------------

¿Cómo funciona eso?

este comando, por ejemplo, si alguien envía algo en tu grupo, digamos, un enlace, y sale rápido, escribirás lo siguiente

${prefix}número-de-lista-negra-a-persona

pondrá el número al lado de la persona que se fue, sin el + recordando, y sin el -.

Eliminarlo de la lista es simple:

${prefix}fragmento de número a persona

mismos detalles que agregar..

--------------------------------

Una vez que lo hayas añadido, tienes que activar la función por grupo, que es la siguiente.

${prefix}autoban 1

y para desactivar la acción de baneo de aquellos en la lista negra, simplemente ponga 0 en lugar de 1..

Eso es todo, buena suerte amigo.
`
}

exports.infolistanegra = infolistanegra
