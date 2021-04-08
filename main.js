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
    let car = gates[n].split('')

    //remplace le mot goat du random par le mot car au hasard
    gates[randomInt] = "car"
    
    const input = readlineSync.keyInSelect(gates, `Quel portes choisies tu ?  \n ` )
    switch (input) {
      
      case 0:
        const porte1 = readlineSync.question(`tu as choisi la porte 1 \n donc la porte ${gates[n]} il y a une chèvre\n changer ou garder? ` )
        let choix = ['garder', 'changer']
        const input = readlineSync.keyInSelect(choix, `Que veut tu faire ?  \n ` )
        
      break
      case 1:
        const porte2= readlineSync.question(`tu as choisi la porte 2 \n donc la porte ${gates[n]} il y a une chèvre\n ` )
      break
      case 2:
        const poret3 = readlineSync.question(`tu as choisi la porte 3 \n donc la porte ${gates[n]} il y a une chèvre\n ` )
      break
    }

    //console.log(`Tu as choisis une porte${input} `)


    
    
    //let index = word.indexOf(gates)
    
  // let choice = ["gates1", "gates2", "gates3"]
  
  //   const input = readlineSync.keyInSelect(choice, `Quel portes choisies tu ? \n ` )

  //   const choix1 = readlineSync.question(`tu as choisis la porte ${choix1} il y as une chévre derriere la porte ${choice[n]} ` )
  //   if (input !== choix1) {

  //     const choix3 = readlineSync.question(`tu garde ta porte ${input} ou tu choisis l'autre porte cachée ? ` )
  //   }
    

  //   console.log(input)

    process.exit(1)
    
    














  }           
}
 startGame()
 