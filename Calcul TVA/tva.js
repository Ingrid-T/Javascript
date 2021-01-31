var titre = document.createElement('p')
var contenu_titre = document.createTextNode('Calculer une TVA')
titre.appendChild(contenu_titre)

var TVA = ['5.5','7','8.5','10','19.6','20']
for (index = 0; index<TVA.length; index++){


 document.getElementById('TVA1').onclick = function () {
 	var tauxTVA = document.createElement('input')
	var contenu_tauxTVA = document.createTextNode(TVA[index].value)
	tauxTVA.appendChild(contenu_tauxTVA)}

}


var montantHT =document.getElementById('montantHT').value
var montantTVA = document.getElementById('montantTVA').value
var montantTTC =document.getElementById('montantTTC').value



function calcul() {

	montantHT + montantTVA = montantTTC
}

var recap = document.createElement ('div')
var contenu_recap = document.createTextNode ('Montant HT: '+montantHT
	'Montant TVA: '+montantTVA 'avec un taux de TVA égal à '+ TVA[index].value
	'Montant TTC: '+montantTTC )
recap.appendChild(contenu_recap)