var utilisateur = prompt('Saisissez votre nom')
console.log(utilisateur);
document.getElementById('titre').innerHTML = utilisateur

document.getElementById('formulaire').style.background ='blue';
document.getElementById('formulaire').style.width = '50%'
document.getElementById('formulaire').style.height = '100px'
document.getElementById('formulaire').style.margin = 'auto'
document.getElementById('formulaire').style.padding = '30px'



document.getElementById('ok').onclick = function() {
	document.getElementById('formulaire').style.display = 'block'; return false}

document.getElementById('ko').onclick = function() {
	document.getElementById('formulaire').style.display = 'none'; return false}


document.getElementById('number1').onmouseover = function () {
	document.getElementById('mouseover1').style.background = 'yellow'}

document.getElementsByTagName('select').onmouseover = function () {
	document.getElementById('mouseover2').style.background = 'yellow'}

document.getElementById('number2').onmouseover = function () {
	document.getElementById('mouseover1').style.background = 'yellow'}