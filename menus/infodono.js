const infodono = (prefix, numerodn, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`╭───────────────
╎
┝ ⎙ Información del propietario/bot
╎
╰───────────────
╎
╎⩺ Propietario:
╎
╎⩺ [ wa.me/${numerodn} ]
╎
╎⩺ Prefijo: ${prefix}
╎
╎⩺ ${NombreBot}
╎
╰─────────────╯
`
}

exports.infodono = infodono
