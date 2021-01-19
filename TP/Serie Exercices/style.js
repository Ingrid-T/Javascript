
var fruits = ["banane", "raisin", "pomme"];
document.write(fruits);
console.log(fruits.join());
console.log(fruits);

var fruitchoisi = prompt('Saisissez un nom de fruits');
for (var index=0; index < fruits.length; index++){
	if(fruitchoisi == fruits[index]){
		console.log("Vous avez choisi "+fruitchoisi);
		fruits.splice(index, 1);
	}
}
console.log(fruits);


/*var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanc"];
delete semaine [6]; console.log (semaine);
semaine.push ("dimanche"); console.log (semaine);
semaine [1] = "mardi"; console.log (semaine);
console.log (semaine.length);
console.log (semaine [4])*/


/*var nombre = "";
console.log (nombre);
{alert (Saisissez un nombre entre "0" et "100")};
if (nombre == ) {alert ("C'est un nombre premier")}*/


/*var annee =2021
if ((annee % 4 == 0 && annéé % 100 > 0) || annee % 400 == 0) 
	{console.log (annee + "est bissextile")};
else {console.log (annee) + "n'est pas bissextile"}*/
