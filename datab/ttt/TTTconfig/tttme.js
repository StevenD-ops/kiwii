const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
  「 🌀💮 Tres en raya 💮🌀 」
  por: Resen
  ❖ NOMBRE: ${pushname}

       ➣ Gana: ${userWins} 🎊
       ➣ Pérdidas: ${userDefeats} 💥
       ➣ Corbatas: ${userTies} 🌀
       ➣ Puntos: ${userPoints} ✨
    `
}

exports.tttme = tttme
