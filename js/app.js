//CHARACTER SHEET
//character  max health
let maxHealth = 50
//character current health
let currentHealth = 20
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
const playerName = 'Gygax'
//PLAYER INVENTORY STATS
//sword damage
let sword = 10
//player weapon stat. Each upgrade will increase this by 1. It is added to each attack
playerSwordBonus = 1
//fireball damage
let fireball = 30
//fireball magic cost
let fireballMagic = 5
//player spell stat. Each upgrade increases this by 2. It is added to each attack
let playerFireballBonus = 2
//player potion of health inventory
let healthPotionCount = 2
//player potion of magic inventory
let magicPotionCount = 1
//-----------------------------------
//world variables
let levelCounter = 0

//sword upgrade button increases swordBonus


//set up topBar
//grab elements
const healthBar = document.querySelector('#healthBar')
const magicBar = document.querySelector('#magicBar')
const goldBar = document.querySelector('#goldBar')
//fill elements with information
healthBar.innerText = currentHealth + "/" + maxHealth
magicBar.innerText = currentMagic + "/" + maxMagic
goldBar.innerText = gold


//function for health bar display
const updateHealth = () => {
    healthBar.innerText = currentHealth + "/" + maxHealth
    if (currentHealth <= 10) {
        healthBar.style.backgroundColor = 'yellow'
    } else if (currentHealth <= 20) {
        healthBar.style.backgroundColor = 'orange'
    }
}

//function for magic display bar
const updateMagic = () => {
    if (currentMagic <= 5) {
        magicBar.style.backgroundColor = 'red'
    } else if (currentMagic <= 10) {
        magicBar.style.backgroundColor = 'orange'
    }
    magicBar.innerText = currentMagic + "/" + maxMagic
}

//function to update gold
const updateGold = (loot) => {
    gold += loot
    goldBar.innerText = gold

}
//change color of status bars when values are low
//change healthBar color
// if (currentHealth <= 10) {
//     healthBar.style.backgroundColor = 'yellow'
// } else if (currentHealth <= 20) {
//     healthBar.style.backgroundColor = 'orange'
// }
//change magicBar color
// if (currentMagic <= 5) {
//     magicBar.style.backgroundColor = 'red'
// } else if (currentMagic <= 10) {
//     magicBar.style.backgroundColor = 'orange'
// }


//set up character sheet with info
//grab character name on character sheet
const characterName = document.querySelector('#characterName')
//set name on character sheet
characterName.innerText = "---" + playerName + "---"
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
//create enemies
//Scamps
const scamp = {
    name: 'Scamp',
    hitpoints: 10,
    monsterAC: 12,
    monsterAttack: 0,
    monsterDamage: 5,

}

//Adventurer 
const adventurer = {
    name: 'Adventurer',
    hitpoints: 25,
    monsterAC: 10,
    monsterAttack: 1,
    monsterDamage: 7,

}

//Troll
const troll = {
    name: 'Troll',
    hitpoints: 40,
    monsterAC: 8,
    monsterAttack: 0,
    monsterDamage: 14,

}

//Hero
const hero = {
    name: 'Hero',
    hitpoints: 35,
    monsterAC: 15,
    monsterAttack: 3,
    monsterDamage: 16,

}

//Lich King
const lich = {
    name: 'The Lich King',
    hitpoints: 75,
    monsterAC: 16,
    monsterAttack: 5,
    monsterDamage: 20,

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
    return ((rollD20() + attk) >= AC)

}

//function for sword button
const clickSword = () => {

}

//function for fireball button
const clickFireball = () => {

}

//function for health potion button
const clickHealth = () => {
    if (healthPotionCount > 0) {
        currentHealth = maxHealth
        healthPotionCount -= 1
        healthPotionButton.innerText = "Potion of Healing " + healthPotionCount
        updateHealth()
    }
}

//function for magic potion button
const clickMagic = () => {
    if (magicPotionCount > 0) {
        currentMagic = maxMagic
        magicPotionCount -= 1
        magicPotionButton.innerText = "Potion of Magic " + magicPotionCount
        updateMagic()
    }
}
//button events

//function for change screen to town

//function to change screen to combat

//on page load, load up start screen to accept name input
//button assigns name to playerName and loads into intro screen that listens to for mouse clicks to continue


//combat
// after player clicks an action game will check to see if enemy is alive and if so they will attack

//add listneners to all the buttons
swordButton.addEventListener('click', clickSword)
fireballButton.addEventListener('click', clickFireball)
healthPotionButton.addEventListener('click', clickHealth)
magicPotionButton.addEventListener('click', clickMagic)