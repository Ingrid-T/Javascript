var boutons = document.getElementsByTagName('button');

for(var index = 0; index < boutons.length; index++) {

	boutons[index].onclick = function() {
	console.log(this.innerHTML);
	var tauxTVA = parseFloat(this.innerHTML);
	console.log(tauxTVA);
	document.querySelector('#tauxTVA').value = tauxTVA;

	var montantHT = document.querySelector('#montantHT').value;
	var montantTVA = Math.round(tauxTVA/100) * montantHT;
	var montantTTC = montantHT + montantTVA;

	document.querySelector('#montantTVA').value = montantTVA;
	document.querySelector('#montantTTC').value = montantTTC;
	}
}

