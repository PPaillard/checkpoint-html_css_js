/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
  // Your code here !
  // si l'années modulo 4 agal de zero et l'annee est modulo de 400 et egal du zero l'annee sera bissextiles
  //si non l'annéé ne sera pas bissextille
  return ( year % 4 === 0 && year % 100 !== 0 ) || (year % 400 ===0);
  }
  const year = 2024
  if (estBissextile (year)) {
    console.log (`$(year) est une annee est bissexetile`);
  }else {
    console.log(`$(year) n'est pas bissextile`);
  }
 


module.exports = isLeapYear;
