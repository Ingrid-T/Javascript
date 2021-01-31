
var tableau = [{'nom':'Tompouce','prenom':'Ingrid','moyenne':'15'},
{'nom':'Camara','prenom':'Moussa','moyenne':'10'},
{'nom':'X','prenom':'Rim','moyenne':'12'},
{'nom':'Y','prenom':'Nadia','moyenne':'08'},
{'nom':'Z','prenom':'Sonia','moyenne':'16'}]

var liste = document.createElement('li');
var newetudiant = document.createTextNode (tableau[index]);
liste.appendChild(newetudiant)


for (var index = 0; index < tableau.length; index++) {
	if (tableau[index].moyenne >=10) {alert ('admis')}
	else {alert ('non-admis')}
}

document.getElementById('admis').onclick = function () { }