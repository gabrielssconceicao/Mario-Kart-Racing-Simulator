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
  console.log(`${characterName} rolled a ${block} die 🎲: ${diceResult} + ${attribute} = ${diceResult+attribute}`)
}
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`)

    let block = await getRandomBlock()
    console.log(`Track segment: ${block}`)


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

      console.log(`${character1.NAME} confronted ${character2.NAME}!🥊`)
      await logRoollResult(character1.NAME, "power", diceResult1, character1.POWER)
      await logRoollResult(character2.NAME, "power", diceResult2, character2.POWER)

      if(powerResult1 > powerResult2 && character2.POINTS > 0 ) {
        console.log(`${character1.NAME} won the confrontation! ${character2.NAME} lost a point`)
        character2.POINTS--
      }
      if(powerResult2 > powerResult1 && character1.POINTS > 0) {
        console.log(`${character2.NAME} won the confrontation! ${character1.NAME} lost a point`)
        character1.POINTS--
      }
      if(powerResult1 === powerResult2) {
        console.log('Its a draw! No points were lost')
      }
      
    }

    if(totaltestSkill1 > totaltestSkill2) {
      console.log(`${character1.NAME} scored a point`)
      character1.POINTS++
    }
    else if(totaltestSkill2 > totaltestSkill1) {
      console.log(`${character2.NAME} scored a point`)
      character2.POINTS++
    } else {
      console.log('Its a draw! No points were won')
    }
    

    console.log('--------------------------------------------------------')
  }
}

async function declareWinner(character1,character2) {
  console.log('Final Result:')
  console.log(`${character1.NAME}: ${character1.POINTS} point(s)`)
  console.log(`${character2.NAME}: ${character2.POINTS} point(s)`)

  if(character1.POINTS > character2.POINTS) {
    console.log(`${character1.NAME} won the race! 🏆`)
  } else if(character2.POINTS > character1.POINTS) {
    console.log(`${character2.NAME} won the race! 🏆`)
  } else {
    console.log('Its a draw!')
  }
}

module.exports = { playRaceEngine, declareWinner }