const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonuseLifeEl = document.getElementById("bonus-life");
const attackButton = document.getElementById("attack-btn");
const strongAttackButton = document.getElementById("strong-attack-btn");
const healButton = document.getElementById("heal-btn");
const logBtn = document.getElementById("heal-btn");

const adjustHealthBars = (maxLife) => {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
};

// ez ugyanaz mint a function dealMonsterDamage() {}
const dealMonsterDamage = (damage) => {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
};

const dealPlayerDamage = (damage) => {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
};

const increasePlayerHealth = (healthAmount) => {
  playerHealthBar.value = +playerHealthBar.value + healthAmount;
};

const resetGame = (value) => {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
};

const removeBonusLife = () => {
  bonuseLifeEl.parentNode.removeChild(bonuseLifeEl);
};

const setPlayerHealth = (health) => {
  playerHealthBar.value = health;
};
