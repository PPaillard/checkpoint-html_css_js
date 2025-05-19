/*
Écris une fonction qui peut déterminer si une année est une année bissextile. 
Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
  // si (année % 4 = 0) et (année % 100 n'est pas = 0) alors  // ! == 0
  // année bissextile = true
  // ou (année % 400 = 0) alors
  // année bissextile = true
  // Sinon année non bissextile = false

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isLeapYear;
