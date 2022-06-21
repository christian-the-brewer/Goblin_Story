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
let healthPotionCount = 1
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

//change color of status bars when values are low
//change healthBar color
if (currentHealth <= 10) {
    healthBar.style.backgroundColor = 'yellow'
} else if (currentHealth <= 20) {
    healthBar.style.backgroundColor = 'orange'
}
//change magicBar color
if (currentMagic <= 5) {
    healthBar.style.backgroundColor = 'red'
} else if (currentHealth <= 10) {
    healthBar.style.backgroundColor = 'orange'
}


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
document.querySelector('#healthPotion').innerText = "Potion of Healing " + healthPotionCount
document.querySelector('#magicPotion').innerText = "Potion of Magic " + magicPotionCount
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

//function for change screen to town

//function to change screen to combat

//on page load, load up start screen to accept name input
//button assigns name to playerName and loads into intro screen that listens to for mouse clicks to continue


//combat
// after player clicks an action game will check to see if enemy is alive and if so they will attack

