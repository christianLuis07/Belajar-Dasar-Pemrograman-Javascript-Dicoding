// without object-composition
class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} bergerak ke ${this.position}`);
  }
}

class Monster extends Character {
  canAttack() {
    console.log(`${this.name} menyerang!`);
  }
}

class Guardian extends Character {
  canDefend() {
    console.log(`${this.name} melindungi diri!`);
  }
}

class Wizard extends Character {
  canCastSpell() {
    console.log(`${this.name} melancarkan magic spell!`);
  }
}

class Warrior extends Character {
  canDefend() {
    console.log(`${this.name} melindungi diri!`);
  }

  canAttack() {
    console.log(`${this.name} menyerang!`);
  }
}

// with object composition
class CharacterObjectComposition {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} bergerak ke ${this.position}`);
  }
}

function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character} menyerang!`);
    },
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character} melindungi diri!`);
    },
  };
}

function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character} melancarkan magic spell!`);
    },
  };
}

function createMonster(name) {
  const character = new CharacterObjectComposition(name, 100, 0);
  return Object.assign(character, canAttack(name));
}

function createGuardian(name) {
  const character = new CharacterObjectComposition(name, 100, 0);
  return Object.assign(character, canDefend(name));
}

function createWizard(name) {
  const character = new CharacterObjectComposition(name, 100, 0);
  return Object.assign(character, canCastSpell(name));
}

function createWarrior(name) {
  const character = new CharacterObjectComposition(name, 100, 0);
  return Object.assign(character, canAttack(name), canDefend(name));
}

console.log("=== Monster ===");
const monster = createMonster("Monster");
monster.canMove();
monster.attack();

console.log("=== Guardian ===");
const guardian = createGuardian("Guardian");
guardian.canMove();
guardian.defend();

console.log("=== Wizard ===");
const wizard = createWizard("Wizard");
wizard.canMove();
wizard.castSpell();

console.log("=== Warrior ===");
const warrior = createWarrior("Warrior");
warrior.canMove();
warrior.attack();
warrior.defend();
