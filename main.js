const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { randomInt } = require('crypto')

const startGame = () => {
  let tab1 = ''
  //const start = readlineSync.question(`Tu as le choix entre trois portes : \n ` )
while (tab1 !== -1) { 
    //tableau de 3 éléments pour représenter les portes 
    let gates = ['porte1', 'porte2', 'porte3']

    // choisi un nombre aléatoire entre index 0 - 1 et 2
    const n = randomInt(1, 4) 

    //choisi une porte chevre au hasard assigné a variable car
    let car = gates[n]

    //remplace le mot goat du random par le mot car au hasard
    gates[randomInt] = "car"
    
    const input = readlineSync.keyInSelect(gates, `Quel portes choisies tu ?  \n ` )
    switch (input) {
      
      case 0:
        const porte1 = readlineSync.question(`tu as choisi la porte 1 \n donc la porte ${randomInt(1, 4)} il n y a pas une chèvre\n ` )
        let choix1 = ['garder', 'changer']
        const input1 = readlineSync.keyInSelect(choix1, `Que veut tu faire ?  \n ` )
        console.log(`la${car} il y a la `)
      break
      case 1:
        const porte2= readlineSync.question(`tu as choisi la porte 2 \n donc la porte ${randomInt(1, 4)} il n y a pas une chèvre\n ` )
         let choix2 = ['garder', 'changer']
        const input2 = readlineSync.keyInSelect(choix2, `Que veut tu faire ?  \n ` )
        console.log(`la${car} il y a la `)
      break
      case 2:
        const poret3 = readlineSync.question(`tu as choisi la porte 3 \n donc la porte ${randomInt(1, 4)} il n y a pas une chèvre\n ` )
         let choix3 = ['garder', 'changer']
        const input3 = readlineSync.keyInSelect(choix3, `Que veut tu faire ?  \n ` )
        console.log(`la${car} il y a la `)
      break
    }
    process.exit(1)
  }           
}
 startGame()
 