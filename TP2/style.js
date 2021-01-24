do {var valeur1 = prompt ("Saisissez une valeur1")}
while (isNaN(valeur1))

do {var valeur2 = prompt ("Saisissez une valeur2")}
while (isNaN(valeur2))

do {var valeur3 = prompt ("Saisissez une valeur3")}
while (isNaN(valeur3))

console.log (valeur1+" "+valeur2+" "+valeur3);

if (valeur1 == valeur2 && valeur2 == valeur3) {alert("Les trois valeurs sont identiques")}
else if (valeur2 == valeur3 || valeur1 == valeur2 || valeur1 == valeur3) {alert("Deux valeurs sont identiques")}
else {alert("Toutes les valeurs sont differentes")}