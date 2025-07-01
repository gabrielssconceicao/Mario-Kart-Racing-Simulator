const {getRandomCharacters} = require('./characters')
const {playRaceEngine, declareWinner} = require('./gameEngine')


async function main() {
  const [player1, player2] = await getRandomCharacters()
  console.log(`🏁🚨 Race between ${player1.NAME} and ${player2.NAME} is starting...\n`);

  await playRaceEngine(player1, player2)
  await declareWinner(player1, player2)
}

main()

