var questions = [
 {
 question: 'Est-ce que tu aimes le JavaScript ?',
 reponse : 'Oui'
 },
 {
 question: 'Le JavaScript est une évolution du Java ?',
 reponse : 'Non'
 },
 {
 question: 'Le JavaScript est proche du Java ?',
 reponse : 'Non'
 },
 {
 question: 'Le JavaScript est un langage d\'objet par prototypage ?',
 reponse : 'Oui'
 },
 {
 question: 'Le JavaScript est souvent utilisé coté client ?',
 reponse : 'Oui'
 },
 {
 question: 'Le JavaScript peut être utilisé coté client et serveur ?',
 reponse : 'Oui'
 }
 ];

for (var index = 0; index < questions.length; index++) {
	if (prompt (questions[index].question).toLowerCase() == questions[index].reponse.toLowerCase())
		{console.log("Bonne réponse pour la question "+questions[index].question)}
	
	else {console.log("Faux! La bonne réponse à la question "+questions[index].question+" était " +questions[index].reponse)}}
