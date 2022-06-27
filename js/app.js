//CHARACTER SHEET
//character  max health
let maxHealth = 50
//character current health
let currentHealth = 50
//character max mana
let maxMagic = 20
//character current mana
let currentMagic = 20
//character armor class
let armorClass = 10
//character attack
let attack = 0
//character gold
let gold = 10
//player name
const playerName = input.value
//PLAYER INVENTORY STATS
//sword damage
let sword = 10
//player weapon stat. Each upgrade will increase this by 1. It is added to each attack
playerSwordBonus = 0
//fireball damage
let fireball = 30
//fireball magic cost
let fireballMagic = 5
//player spell stat. Each upgrade increases this by 2. It is added to each attack
let playerFireballBonus = 0
//player potion of health inventory
let healthPotionCount = 2
//player potion of magic inventory
let magicPotionCount = 1
//-----------------------------------
//world variables
let levelCounter = 0
let turnCounter = true
// submit form
const form = document.querySelector('#form')

//to keep track of enemy in encounter
let enemy = 0
let enemyRoll = 0

//sounds
const potionBuyingSound = new Audio('/sounds/RPG Sound Pack/inventory/bottle.wav')
const upgradeSwordSound = new Audio('/sounds/RPG Sound Pack/inventory/metal-small2.wav')
const upgradeArmorSound = new Audio('/sounds/RPG Sound Pack/inventory/chainmail1.wav')
const drinkPotionSound = new Audio('/sounds/RPG Sound Pack/inventory/bubble3.wav')
const innSound = new Audio('/sounds/RPG Sound Pack/inventory/coin.wav')
const swordHitSound = new Audio('/sounds/RPG Sound Pack/battle/sword-unsheathe5.wav')
const swordMissSound = new Audio('/sounds/RPG Sound Pack/battle/swing.wav')
const fireballSound = new Audio('sounds/RPG Sound Pack/battle/magic1.wav')
const upgradeAttackSound = new Audio('/sounds/RPG Sound Pack/interface/interface5.wav')
const scampSound = new Audio('sounds/RPG Sound Pack/NPC/gutteral beast/mnstr7.wav')
const adventurerSound = new Audio('sounds/Mp3/Human/Human_Good_26.mp3')
const trollSound = new Audio('sounds/RPG Sound Pack/NPC/ogre/ogre4.wav')
const heroSound = new Audio('sounds/Mp3/Human/Human_Good_11.mp3')
const lichSound = new Audio('sounds/RPG Sound Pack/NPC/shade/shade13.wav')
const goBackSound = new Audio('sounds/RPG Sound Pack/world/door.wav')


//art
const scampArt = 'img/scamp.PNG'
const adventurerArt = 'img/adventurer.PNG'
const trollArt = 'img/troll.PNG'
const heroArt = 'img/hero.PNG'
const lichArt = 'img/lich.PNG'
const goblinCityArt = 'img/goblin_city.jpeg'

//set up topBar
//grab elements
const healthBar = document.querySelector('#healthBar')
const magicBar = document.querySelector('#magicBar')
const goldBar = document.querySelector('#goldBar')
//fill elements with information
healthBar.innerText = currentHealth + "/" + maxHealth
magicBar.innerText = currentMagic + "/" + maxMagic
goldBar.innerText = gold

//grab screen divs
const textScreen = document.querySelector('#textScreen')
const artScreen = document.querySelector('#artScreen')
const gameScreen = document.querySelector('#gameScreen')
const startScreen = document.querySelector('#startScreen')
const introScreen = document.querySelector('#introScreen')
const text = document.querySelector('#text')

//grab elements of combat screen
//battle header that will display text
const battleHeader = document.querySelector('#battleHeader')
//next two lines will show actions by player and enemy
const playerActionText = document.querySelector('#playerActionText')
const enemyActionText = document.querySelector('#enemyActionText')
//final line shows results of battle
const resultText = document.querySelector('#resultText')
//continue button for after combat
const continueButton = document.querySelector('#continueButton')
//town button to go into town
const townButton = document.querySelector('#townButton')
//town places
const stayAtInnButton = document.querySelector('#stayAtInn')
const blacksmithButton = document.querySelector('#blacksmith')
const shamanButton = document.querySelector('#shaman')
const merchantButton = document.querySelector('#merchant')
//town screens
const blacksmithScreen = document.querySelector('#blacksmithScreen')
const shamanScreen = document.querySelector('#shamanScreen')
const merchantScreen = document.querySelector('#merchantScreen')
const townLocations = document.querySelector('#townLocations')
//town purchases
const swordUpgradeButton = document.querySelector('#upgradeSword')
const armorUpgradeButton = document.querySelector('#upgradeArmor')
const attackUpgradeButton = document.querySelector('#upgradeAttack')
const fireballUpgradeButton = document.querySelector('#upgradeFireball')
const buyHealthPotionButton = document.querySelector('#buyHealthPotion')
const buyMagicPotionButton = document.querySelector('#buyMagicPotion')
const buyGoodLuckCharmButton = document.querySelector('#buyGoodLuckCharm')
const buySolutionOfHealthButton = document.querySelector('#buySolutionOfHealth')
const buySolutionOfMagicButton = document.querySelector('#buySolutionOfMagic')
//town go back buttons
const goBackBlacksmithButton = document.querySelector('#goBackBlacksmith')
const goBackShamanButton = document.querySelector('#goBackShaman')
const goBackMerchantButton = document.querySelector('#goBackMerchant')
//button for starting game in intro screen
const startGameButton = document.querySelector('#killTheLich')

//function for health bar display
const updateHealth = () => {
    if (currentHealth <= 10) {
        healthBar.style.backgroundColor = 'red'
    } else if (currentHealth <= 20) {
        healthBar.style.backgroundColor = 'orange'
    } else {
        healthBar.style.backgroundColor = 'green'
    }
    healthBar.innerText = currentHealth + "/" + maxHealth
}

//function for magic display bar
const updateMagic = () => {
    if (currentMagic <= 5) {
        magicBar.style.backgroundColor = 'red'
        magicBar.style.color = 'black'
    } else if (currentMagic <= 10) {
        magicBar.style.backgroundColor = 'orange'
        magicBar.style.color = 'black'
    } else {
        magicBar.style.backgroundColor = 'blue'
        magicBar.style.color = 'red'
    }
    magicBar.innerText = currentMagic + "/" + maxMagic
}

//function to update gold
const updateGold = (loot) => {
    gold += loot
    goldBar.innerText = gold
    console.log(loot)

}



//set up character sheet with info
//grab character name on character sheet
const characterName = document.querySelector('#characterName')
//set name on character sheet
//characterName.innerText = "---" + playerName + "---"
//grab armor and attack value
const armor = document.querySelector('#armor')
armor.innerText = "Armor: " + armorClass
const attackBonus = document.querySelector('#attack')
attackBonus.innerText = "Attack Bonus: " + attack

//show attack button upgrade levels
const swordButton = document.querySelector('#swordButton')
const fireballButton = document.querySelector('#fireballButton')
if (playerSwordBonus > 0) {
    swordButton.innerText = "+ " + playerSwordBonus + " Sword"
}

if (playerFireballBonus > 0) {
    fireballButton.innerText = "+ " + playerFireballBonus + " Fireball"
}


//show inventory of potions
const healthPotionButton = document.querySelector('#healthPotion')
const magicPotionButton = document.querySelector('#magicPotion')
healthPotionButton.innerText = "Potion of Healing " + healthPotionCount
magicPotionButton.innerText = "Potion of Magic " + magicPotionCount




let enemyHP = 1

//create enemies
//Scamps
const scamp = {
    name: 'Scamp',
    hitpoints: 10,
    monsterAC: 12,
    monsterAttack: 0,
    monsterDamage: 5,
    drop: 7,
    sound: scampSound,
    art: scampArt

}

//Adventurer 
const adventurer = {
    name: 'Adventurer',
    hitpoints: 25,
    monsterAC: 10,
    monsterAttack: 1,
    monsterDamage: 7,
    drop: 10,
    sound: adventurerSound,
    art: adventurerArt

}

//Troll
const troll = {
    name: 'Troll',
    hitpoints: 40,
    monsterAC: 8,
    monsterAttack: 0,
    monsterDamage: 14,
    drop: 15,
    sound: trollSound,
    art: trollArt

}

//Hero
const hero = {
    name: 'Hero',
    hitpoints: 35,
    monsterAC: 15,
    monsterAttack: 3,
    monsterDamage: 14,
    drop: 25,
    sound: heroSound,
    art: heroArt

}

//Lich King
const lich = {
    name: 'The Lich King',
    hitpoints: 75,
    monsterAC: 16,
    monsterAttack: 5,
    monsterDamage: 20,
    sound: lichSound,
    art: lichArt

}
//function to roll for damage
const rollForDamage = () => {
    return (Math.floor(Math.random() * (15 - 5 + 1)) + 5)
}

//function to roll d20
const rollD20 = () => {
    return (Math.floor(Math.random() * 20) + 1)
}

//function to check for hit
const rollForHit = (AC, attk) => {
    let roll = rollD20()
    if (roll === 20) {
        return true
    } else {
        if ((roll + attk) >= AC) {
            return true
        } return false
    }

}

//function for sword button
const clickSword = () => {
    let rolledDamage = 0
    enemyActionText.innerText = ''
    if (rollForHit(enemy.monsterAC, attack)) {
        rolledDamage = rollForDamage()
        enemyHP -= (rolledDamage + playerSwordBonus)
        swordHitSound.play()
        playerActionText.innerText = 'You slash with your sword for ' + (rolledDamage + playerSwordBonus) + ' damage!'
    } else {
        playerActionText.innerText = 'You slash with you sword but miss!'
        swordMissSound.play()
    }
    if (enemyHP < 1) {
        playerActionText.innerText = 'You slash with your sword for ' + (rolledDamage + playerSwordBonus) + ' damage!'
        resultText.innerText = `You have defeated the ${enemy.name}!`
        continueButton.style.display = 'block'
    }
    if (enemyHP > 0) {
        enemyAttack()
    } else if (enemyHP < 1) {
        enemyDefeated()
    }
}

//function for fireball button
const clickFireball = () => {
    if (currentMagic >= 5) {
        currentMagic -= 5
        updateMagic()
        enemyActionText.innerText = ''
        playerActionText.innerText = 'You cast Fireball! It burns the enemy for ' + (20 + playerFireballBonus) + ' damage!'
        enemyHP -= (20 + playerFireballBonus)
        fireballSound.play()
        if (enemyHP < 1) {
            resultText.innerText = `You have defeated the ${enemy.name}!`
            continueButton.style.display = 'block'
        }
        if (enemyHP > 0) {
            enemyAttack()
        } else if (enemyHP < 1) {
            enemyDefeated()
        }

    }
}

//function for health potion button
const clickHealth = () => {
    if (healthPotionCount > 0) {
        currentHealth = maxHealth
        healthPotionCount -= 1
        healthPotionButton.innerText = "Potion of Healing " + healthPotionCount
        updateHealth()
        drinkPotionSound.play()
        playerActionText.innerText = 'You take a quick drink of a healing potion. Your stamina is replenished as your wounds are healed'
        if (enemyHP > 0) {
            enemyAttack()
        }
    }
}

//function for magic potion button
const clickMagic = () => {
    if (magicPotionCount > 0) {
        currentMagic = maxMagic
        magicPotionCount -= 1
        magicPotionButton.innerText = "Potion of Magic " + magicPotionCount
        updateMagic()
        drinkPotionSound.play()
        playerActionText.innerText = 'You take a quick drink of a magic potion. Your magic reserves are restored as power flows through your body'
        if (enemyHP > 0) {
            enemyAttack()
        }
    }
}

// function to pull up next encounter after battle
const nextEncounter = () => {
    //increment level counter
    levelCounter++
    enemyRoll = (Math.floor(Math.random() * 20) + 1)

    if (levelCounter < 10) {

        if (enemyRoll < 13) {
            enemy = scamp
        } else {
            enemy = adventurer
        }
    } else if (levelCounter < 20) {
        if (enemyRoll < 6) {
            enemy = scamp
        } else if (enemyRoll < 15) {
            enemy = adventurer
        } else {
            enemy = troll
        }
    } else if (levelCounter < 60) {
        if (enemyRoll < 2) {
            enemy = scamp
        } else if (enemyRoll < 10) {
            enemy = adventurer
        } else if (enemyRoll < 16) {
            enemy = troll
        } else {
            enemy = hero
        }
    } else if (levelCounter < 80) {
        if (enemyRoll < 3) {
            enemy = scamp
        } else if (enemyRoll < 10) {
            enemy = adventurer
        } else if (enemyRoll < 16) {
            enemy = troll
        } else {
            enemy = hero
        }
    } else {
        if (enemyRoll < 2) {
            enemy = scamp
        } else if (enemyRoll < 10) {
            enemy = adventurer
        } else if (enemyRoll < 16) {
            enemy = troll
        } else if (enemyRoll < 19) {
            enemy = hero
        } else {
            enemy = lich
        }
    }
    //set up screens and buttons
    swordButton.style.display = 'inline-block'
    fireballButton.style.display = 'inline-block'
    continueButton.style.display = 'none'
    townButton.style.display = 'none'
    blacksmithScreen.style.display = 'none'
    shamanScreen.style.display = 'none'
    merchantScreen.style.display = 'none'
    townScreen.style.display = 'none'
    //set up text screen
    playerActionText.innerText = ''
    enemyActionText.innerText = ''
    resultText.innerText = ''
    if (enemy !== lich) {
        battleHeader.innerText = "You have encountered " + enemy.name + "!"
    } else {
        battleHeader.innerText = "The Lich King, taking notice of your growing power, has decided to put an end to you itself!"
    }
    enemyHP = enemy.hitpoints
    enemy.sound.play()
    artScreen.innerHTML = ''
    let enemyArt = document.createElement('img')
    artScreen.appendChild(enemyArt)
    enemyArt.classList.add('enemyArt')
    enemyArt.src = enemy.art


}


//function to attack player 
const enemyAttack = () => {
    if (rollForHit(armorClass, enemy.monsterAttack)) {
        currentHealth -= enemy.monsterDamage
        updateHealth()
        enemyActionText.innerText = `The ${enemy.name} swipes at you for ${enemy.monsterDamage} damage!`
    } else {
        enemyActionText.innerText = `You block the ${enemy.name}\'s attack!`
    }
    if (currentHealth < 1) {
        gameScreen.style.display = 'none'
        introScreen.style.display = 'block'
        text.innerText = 'You have been defeated. As you fall to the cold, dark dungeon floor, your last thoughts are of your family...'
        startGameButton.style.display = 'none'
    }
}

//function for defeated enemy
const enemyDefeated = () => {
    resultText.innerText = `You have defeated the ${enemy.name}!`
    continueButton.style.display = 'block'
    townButton.style.display = 'block'
    updateGold(enemy.drop)
    swordButton.style.display = 'none'
    fireballButton.style.display = 'none'
    artScreen.innerHTML = ''
    if (enemy === lich) {
        gameScreen.style.display = 'none'
        introScreen.style.display = 'block'
        text.innerText = 'The Lich King falls before you. You manage to catch a look of surprise on its shriveled, sunken face as its body crumples to ash. You pick up the Staff of Greater Restoration, feeling relief wash over you, as you turn to head back to your soon to be healed family.'
        startGameButton.style.display = 'none'
    }
}

//function for changing to town instead of combat
const goToTown = () => {
    continueButton.style.display = 'block'
    townButton.style.display = 'none'
    playerActionText.innerText = ''
    enemyActionText.innerText = ''
    resultText.innerText = ''
    battleHeader.innerText = ''
    townScreen.style.display = 'block'
    blacksmithScreen.style.display = 'none'
    shamanScreen.style.display = 'none'
    merchantScreen.style.display = 'none'
    townLocations.style.display = 'block'
    artScreen.innerHTML = ''
    let townArt = document.createElement('img')
    artScreen.appendChild(townArt)
    townArt.classList.add('townArt')
    townArt.src = goblinCityArt
}

//function for staying at inn
const stayAtInn = () => {
    if (gold > 4) {
        updateGold(-5)
        currentHealth = maxHealth
        updateHealth()
        currentMagic = maxMagic
        updateMagic()
        innSound.play()
    }
}

//function for going to blacksmith
const goToBlacksmith = () => {
    townLocations.style.display = 'none'
    blacksmithScreen.style.display = 'block'
    goBackSound.play()
}
//function for going to shaman
const goToShaman = () => {
    townLocations.style.display = 'none'
    shamanScreen.style.display = 'block'
    goBackSound.play()
}
//function for going to merchant
const goToMerchant = () => {
    townLocations.style.display = 'none'
    merchantScreen.style.display = 'block'
    goBackSound.play()
}

//function to upgrade sword stats
const upgradeSword = () => {
    if (gold > 19) {
        updateGold(-20)
        playerSwordBonus += 1
        swordButton.innerText = "+ " + playerSwordBonus + " Sword"
        upgradeSwordSound.play()
    }
}
//function to upgrade armor class
const upgradeArmor = () => {
    if (gold > 49) {
        updateGold(-50)
        armorClass += 1
        armor.innerText = "Armor: " + armorClass
        upgradeArmorSound.play()
    }
}
//function to upgrade attack
const upgradeAttack = () => {
    if (gold > 29) {
        updateGold(-30)
        attack += 1
        attackBonus.innerText = `Attack Bonus: ${attack}`
        upgradeAttackSound.play()
    }
}

//function to upgrade fireball spell
const upgradeFireball = () => {
    if (gold > 29) {
        updateGold(-30)
        playerFireballBonus += 2
        fireballButton.innerText = "+ " + playerFireballBonus + " Fireball"
    }
}

//function to upgrade health
const upgradeHealth = () => {
    if (gold > 49) {
        updateGold(-50)
        maxHealth += 10
        currentHealth += 10
        updateHealth()
    }
}

//function to upgrade magic
const upgradeMagic = () => {
    if (gold > 49) {
        updateGold(-50)
        maxMagic += 10
        currentMagic += 10
        updateMagic()
    }
}
//function to go back from town locations
const goBack = () => {
    townLocations.style.display = 'block'
    blacksmithScreen.style.display = 'none'
    shamanScreen.style.display = 'none'
    merchantScreen.style.display = 'none'
    goBackSound.play()

}

//functions to buy potions
const buyHealthPotion = () => {
    if (gold > 9) {
        updateGold(-10)
        healthPotionCount += 1
        healthPotionButton.innerText = "Potion of Healing " + healthPotionCount
        potionBuyingSound.play()
    }
}

const buyMagicPotion = () => {
    if (gold > 14) {
        updateGold(-15)
        magicPotionCount += 1
        magicPotionButton.innerText = "Potion of Magic " + magicPotionCount
        potionBuyingSound.play()
    }
}

//function for start screen
const startGame = () => {
    gameScreen.style.display = 'none'
    introScreen.style.display = 'none'

}

//start intro function
const startIntro = () => {
    startScreen.style.display = 'none'
    introScreen.style.display = 'block'
}

const exitIntro = () => {
    introScreen.style.display = 'none'
    gameScreen.style.display = 'block'
    townScreen.style.display = 'none'
    townLocations.style.display = 'none'
    blacksmithScreen.style.display = 'none'
    shamanScreen.style.display = 'none'
    merchantScreen.style.display = 'none'
    swordButton.style.display = 'none'
    fireballButton.style.display = 'none'
}

//button events

//function for change screen to town

//function to change screen to combat

//on page load, load up start screen to accept name input
//button assigns name to playerName and loads into intro screen that listens to for mouse clicks to continue

//add listneners to all the buttons
swordButton.addEventListener('click', clickSword)
fireballButton.addEventListener('click', clickFireball)
healthPotionButton.addEventListener('click', clickHealth)
magicPotionButton.addEventListener('click', clickMagic)
continueButton.addEventListener('click', nextEncounter)
townButton.addEventListener('click', goToTown)
stayAtInnButton.addEventListener('click', stayAtInn)
blacksmithButton.addEventListener('click', goToBlacksmith)
swordUpgradeButton.addEventListener('click', upgradeSword)
armorUpgradeButton.addEventListener('click', upgradeArmor)
attackUpgradeButton.addEventListener('click', upgradeAttack)
fireballUpgradeButton.addEventListener('click', upgradeFireball)
goBackBlacksmithButton.addEventListener('click', goBack)
shamanButton.addEventListener('click', goToShaman)
goBackShamanButton.addEventListener('click', goBack)
merchantButton.addEventListener('click', goToMerchant)
goBackMerchantButton.addEventListener('click', goBack)
buyHealthPotionButton.addEventListener('click', buyHealthPotion)
buyMagicPotionButton.addEventListener('click', buyMagicPotion)
buySolutionOfHealthButton.addEventListener('click', upgradeHealth)
buySolutionOfMagicButton.addEventListener('click', upgradeMagic)
//buyGoodLuckCharmButton.addEventListener('click', buyGoodLuckCharm)
//event listrener for submit button
//add event listener to form to listen for submit
form.addEventListener('submit', (event) => {
    //prevent default refresh
    event.preventDefault()
    characterName.innerText = "---" + input.value + "---"
    startIntro()
})
startGameButton.addEventListener('click', exitIntro)

document.addEventListener('DOMContentLoaded', updateHealth(), updateMagic(), startGame())