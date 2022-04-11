const menudono = (prefix) => {


// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `
╭───────────────
╎
┝ ⎙ Menú de propietario
╎
╎⩺ Info sobre cómo configurar el Bot > Escriba:
╎
╎⩺ ${prefix}config-bot
╎
╰───────────────
╎
╎⩺ ${prefix}fotomenú (etiqueta-img)
╎⩺ ${prefix}bloquecmd (cmd)
╎⩺ ${prefix}desbloquearcmd (cmd)
╎⩺ ${prefix}legendabv (qué qr)
╎⩺ ${prefix}subtitlesout (qué qr)
╎⩺ ${prefix}subtítulos2 (qué qr)
╎⩺ ${prefix}legendabv2 (qué qr)
╎⩺ ${prefix}fondo de bienvenida (mark-img)
╎⩺ ${prefix}fundosaiu (marca-img)
╎⩺ ${prefix}serpremium
╎⩺ ${prefix}listabt
╎⩺ ${prefix}listagp
╎⩺ ${prefix}limparmsg (chat de bot)
╎⩺ ${prefix}anti-improperio 1 / 0
╎⩺ ${prefix}antillamada 1 / 0
╎⩺ ${prefix}antipv 1 / 0 (este del bloque)
╎⩺ ${prefix}addword (improperio)
╎⩺ ${prefix}delpalavra (improperio)
╎⩺ ${prefix}antipvon
╎⩺ ${prefix}antipvoff
╎⩺ ${prefix}activo
╎⩺ ${prefix}faltante (di-lo-que-haces)
╎⩺ ${prefix}delpremium @(marca)
╎⩺ ${prefix}addpremium @(marca)
╎⩺ ${prefix}clon [@] (roba pies de prf)
╎⩺ ${prefix}fotobot (img, = foto BT)
╎⩺ ${prefix}descripcióngp (tipo-algo)
╎⩺ ${prefix}clear (borra todas las conversaciones)
╎⩺ ${prefix}bloquear [@] (bloquear el uso de cmds)
╎⩺ ${prefix}desbloquear [@] (desbloquear)
╎⩺ ${prefix}setprefix (prefix-nuevo)
╎⩺ ${prefix}bangp
╎⩺ ${prefix}unbangp
╎⩺ ${prefix}propietario2 @marca
╎⩺ ${prefix}propietario3 @marca
╎⩺ ${prefix}propietario4 @marca
╎⩺ ${prefix}propietario5 @marca
╎⩺ ${prefix}bcgp (TM-PRA-PV-MEMBERS)
╎⩺ ${prefix}transmitir (MSG-GROUPS)
╎
╰─────────────╯
`

}
exports.menudono = menudono
