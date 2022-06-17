//CHARACTER SHEET
//character  max health
let maxHealth = 50
//character current health
let currentHealth = 50
//character armor class
let armorClass = 10
//character attack
let attack = 0
//character gold
let gold = 10
//player name
//------------------------------
//PLAYER INVENTORY STATS
//sword damage
let sword = 10
//player weapon stat. Each upgrade will increase this by 1. It is added to each attack
playerSwordBonus = 0
//fireball damage
let fireball = 30
//fireball mana cost
let fireballMana = 5
//player spell stat. Each upgrade increases this by 2. It is added to each attack
let playerFireballBonus = 0
//player potion of health inventory
let healthPotionCount = 1
//player potion of mana inventory
let manaPotionCount = 1
//-----------------------------------
//world variables
let levelCounter = 0

//sword upgrade button increases swordBonus


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
