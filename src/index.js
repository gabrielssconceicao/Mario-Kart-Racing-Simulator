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
      result = "STRAIGHT"
      break;
    case random < 0.66:
      result = "CURVE"
      break;
    default:
      result = "CONFRONTATION"
      break;
  }
  return result
}

async function logRoollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName}🎲 rolled a ${block} ${diceResult} die`)
}
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`)

    let block = await getRandomBlock()
    console.log(`Block: ${block}`)


    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totaltestSkill1 = 0
    let totaltestSkill2 = 0

    if(block === "STRAIGHT") {
      totaltestSkill1 = character1.SPEED + diceResult1
      totaltestSkill2 = character2.SPEED + diceResult2

      await logRoollResult(character1.NAME, "speed", diceResult1, character1.SPEED)
      await logRoollResult(character2.NAME, "speed", diceResult2, character2.SPEED)
    }
    if(block === "CURVE") { 
      totaltestSkill1 = character1.MANEUVERABILITY + diceResult1
      totaltestSkill2 = character2.MANEUVERABILITY + diceResult2

      await logRoollResult(character1.NAME, "manueverability", diceResult1, character1.MANEUVERABILITY)
      await logRoollResult(character2.NAME, "manueverability", diceResult2, character2.MANEUVERABILITY)
    }
    if(block === "CONFRONTATION") { 
      let powerResult1 = diceResult1 + character1.POWER
      let powerResult2 = diceResult2 + character2.POWER
    }
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começando...\n`
  )
  await playRaceEngine(player1, player2)
})()

