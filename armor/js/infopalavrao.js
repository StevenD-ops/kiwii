const infopalavrao = (prefix, pushname) => {
return `
Hola ${pushname}

Te dejaré saber cómo funciona el anti-improperio..

el anti-improperio lo crea usted mismo, "¿Cómo es eso?", Existen los siguientes comandos:

${prefix}añadir palabra

${prefix}delpalavra

${prefix}anti-improperio

-------------------------------

Primero, daré un ejemplo:

${prefix}añadirpalabra basura

esto se incluirá como una palabrota, "pero, ¿cómo hago para que esto funcione ahora?"

debes activar la función por grupo, ejemplo:

${prefix}anti-improperio 1

1 es para habilitar, 0 es para deshabilitar.

y si desea eliminar la palabra de inclusión de las malas palabras, simplemente escriba:

${prefix}delgarbageword

"basura" es solo la palabra que usas como ejemplo, pero tienes que crear y elegir qué frases no quieres que se hablen en tu grupo.

eso es todo suerte..
`
}

exports.infopalavrao = infopalavrao
