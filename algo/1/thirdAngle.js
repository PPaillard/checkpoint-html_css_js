/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // si la valeur de a est égale à 90
  // et si la valeur de b est égale à 30
  // Alors la valeur de a + b  + x est égale à 180
  // 180 = a + b + x
  return 180 - (a+b);
}

module.exports = thirdAngle;
