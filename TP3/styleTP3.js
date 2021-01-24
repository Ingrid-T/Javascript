/*var div =document.getElementsByClassName('paragraphe');

for ( var index = 0; index < div.length; index++) {
	if (index%2 == 0) {div[index].style.background='red'}
		else {div[index].style.background='pink'}
}*/

/*var chiffre1 =document.getElementById ('chiffre1')
var chiffre2= document.getElementById ('chiffre2')
var signe =document.getElementById ('opérateur')

document.getElementById('calculer').onclick = function (){
	if (opérateur.value == '+') {
		alert (chiffre1.value+""+operateur.value+""+chiffre2.value+'='+
			(parseInt(chiffre1.value)+parseInt(chiffre2)))
	}
}*/

var nom =document.getElementById ('nom')
var prenom=document.getElementById ('prenom')
var adresse=document.getElementById ('adresse')
var message=document.getElementById ('message')
var champs= ['nom', 'prenom', 'adresse', 'message']

for (var index = 0; index < champs.length ; index++) {
	champs[index]
}
document.getElementById('Envoi').onclick = function () {
if (nom.value == ""|| prenom.value ==""|| adresse.value==""|| message.value==""){
	alert ('Au moins un champ est vide'); return background = 'red';}
else return true;} 