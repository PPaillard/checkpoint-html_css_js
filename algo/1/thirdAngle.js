/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/
// total de degre de une traingele sera 180°
// A + B + C = 180°
// A  plus B moins 180° ca sera le reslutat de total de une traingle 


function thirdAngle(a, b) {
  return 180 - (a+b);
}

module.exports = thirdAngle;
