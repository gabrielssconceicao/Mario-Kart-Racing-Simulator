function createCharacter(name, speed, manueverability, power) {
  return {
    NAME: name,
    SPEED: speed,
    MANEUVERABILITY: manueverability,
    POWER: power,
    POINTS: 0
  }
  
}

const characters = [
  createCharacter("Mario",4,3,3),
  createCharacter("Peach",3,4,2),
  createCharacter("Yoshi",2,4,3),
  createCharacter("Bowser",5,2,5),
  createCharacter("Luigi",3,4,4),
  createCharacter("Donkey Kong",2,2,5),
]

function getRandomCharacters() {
  const copy = [...characters]
  const index1 = Math.floor(Math.random() * copy.length);
  const character1 = copy.splice(index1,1)[0];

  const index2 = Math.floor(Math.random() * copy.length);
  const character2 = copy[index2];

  return [character1, character2]
}

module.exports = {getRandomCharacters}