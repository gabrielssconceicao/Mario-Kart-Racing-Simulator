const player1 = {
  NAME: "Mario",
  SPEED: 4,
  MANEUVERABILITY: 3,
  POWER: 3,
  POINTS:0
}

const player2 = {
  NAME: "Bowser",
  SPEED: 5,
  MANEUVERABILITY: 2,
  POWER: 5,
  POINTS:0
}

function rollDice() {
  return Math.floor(Math.random() *6) +1
}

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break;
    case random < 0.66:
      result = "CURVA"
      break;
    default:
      result = "CONFRONTO"
      break;
  }
  return result
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começando...\n`
  )
  await playRaceEngine(player1, player2)
})()

