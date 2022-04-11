const infosorteio = (prefix, pushname) => {
return`
Hola ${pushname}: ¿Quieres saber cómo funcionan los comandos Dibujar?

Hay 2 tipos de comando de dibujar.

[1]- ${prefix}dibujar

[2]- ${prefix}sorteenumber

------------------------------

El comando ${prefix}draw it extrae un número aleatorio de alguien del grupo y dice que él fue el afortunado.

Ponga algo, después del comando de rifa, por ejemplo ${prefix}rifa de 100 BRL

-------------------------------

El comando ${prefix}sorteionumero envía números aleatorios del 1 al 257

Ponga algo después del comando de rifa, por ejemplo ${prefix}rafflenumber de 100 BRL

--------------------------------

Ideas de estos 2 comandos, use para sorteos en su grupo, supongamos que 257 personas en su grupo hacen una lista del 1 al 257, y quieren realizar un sorteo, entonces se usará en estos comandos, sorteos por número de teléfono o por números.
`
}

exports.infosorteio = infosorteio
