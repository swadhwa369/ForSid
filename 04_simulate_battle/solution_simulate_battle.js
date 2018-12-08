
function Pokemon (name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}
Pokemon.prototype.biteAttack = function () {
  return this.attackBonus+2
};
Pokemon.prototype.isDefeated = function (){
  if (this.health > 1) {
    return false;
  }
  else {
    return true;
  }
  /* Good job! A shorter version of this function would be:

Pokemon.prototype.isDefeated = function(){
  return this.health <= 0;
};

With boolean logic, if you return an evaluation, it will return true/false given the statement

 */
};
/* Here's the answer to the extra credit, if you're curious!

    function simulateBattle(pokeOne, pokeTwo, firstAttacker) {
      let first = firstAttacker === pokeOne.name ? pokeOne : pokeTwo,
        second = first === pokeOne ? pokeTwo : pokeOne,
        fight = true;

      while (first.isDefeated() === second.isDefeated()) {
        if (fight) {
          second.health -= first.biteAttack();
          fight = false;
        } else {
          first.health -= second.biteAttack();
          fight = true;
        }
      }

      return (first.isDefeated() ? second.name : first.name) + ' Wins!';
    }
 */

