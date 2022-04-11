const ttthelp = (prefix) => {
    return `
    「 \u{1F4AE} Tres en raya \u{1F4AE} 」
    Por: Resen
    ◪ VERSIÓN BETA, PUEDE CONTENER VARIOS ERRORES..

    ◪ SOLO PARA GRUPOS

    ◪ COMENZAR
      │
      ├─ ❏ Para comenzar escriba:
      │ └「 ${prefix}ttt [ DIFICULTAD ] 」
      └─ ❏ Solo una persona a la vez

    ◪ DIFICULTAD
      │
      ├─ ❏ fácil: totalmente aleatorio
      │ (Simplemente mala suerte perder en este)
      ├─ ❏ normal: 66% de probabilidad
      │ bloquear y ganar
      ├─ ❏ difícil: 100% de probabilidad
      │ bloquear y ganar
      └─ ❏ imposible: Solo Kuuhaku
               para vencer esto

    ◪ TEMPORIZADOR
      │
      ├─ ❏ Un juego nuevo solo puede
      │ comenzar después de un intervalo
      │ 4 minutos desde el principio
      │ del juego anterior
      │
      └─ ❏ El partido terminará
               automáticamente después de 4 minutos

    ◪ COMANDOS
      │
      ├─ ❏ Para marcar escriba:
      │ └「 ${prefix}reproducir [ COORDENADAS ] 」
      │
      └─ ❏ Ejemplo:
    └「 ${prefix}jugar a1
    ----------------------
    🌀1️⃣2️⃣3️⃣
    🅰️❌🔲🔲
    🅱️🔲🔲🔲
    ©️🔲🔲🔲」

    ◪ SU ESTADO
      │
      └─ ❏ Para ver tu estado escribe:
              └「${prefix}tttme」

    ◪ RECOMPENSAS
      │
      ├─ ❏ FÁCIL
      │ ├ Victoria: +「25/50」
      │ └ Derrota: -「200 / 200」
      │
      ├─ ❏ NORMALES
      │├ Victoria: +「75/150」
      │ └ Derrota: -「75 / 150」
      │
      ├─ ❏ DURO
      │ ├ Victoria: +「200/400」
      │ └ Derrota: -「 25 / 50 」
      │
      ├─ ❏ IMPOSIBLE
      │ ├ Victoria: +「1000/2000」
      │ └ Derrota : -「 0 / 0 」
      │
      ├─ ❏ SORTEO
      │ └「0 / 0」
      │
      └─ ❏ PARTIDO INACABADO
              └ -「75 / 150」
`
}

exports.ttthelp = ttthelp
