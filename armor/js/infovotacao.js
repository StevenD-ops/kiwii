const infovotacao = (prefix, pushname) => {
return`

Hola ${pushname}

Comando: ${prefix}voto


¿Quieres saber cómo funcionan los comandos de votación?, es simple, tienes que etiquetar a una persona al lado de un / y escribir una oración como pregunta, y luego / y los minutos,

Ejemplo: ${prefix}vote @marca-pessoa/Vamos a comer un pastel hoy??/1

para votar o negar, hay que teclear sin prefix:

voto o devoto


1 puse es 1 minuto de votación, así que hazlo exactamente así.

y también contienen el comando:

${prefix}delvoto

anula su voto.

`
}

exports.infovotacao = infovotacao
