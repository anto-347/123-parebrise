// Kayzox53

function traitement_score()
{
	var score = 0;
	
	var nom = document.getElementById("nom").value;
	nom = nom.toUpperCase();
	var prenom = document.getElementById("prenom").value;
	prenom = prenom.toLowerCase();
	prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1);

	// Question 1

	// Remise à zéro du style
	var q1 = document.getElementById("q1")
	q1.classList.remove('bonne_reponse');
	q1.classList.remove('mauvaise_reponse');

	let q2 = document.getElementById("q2")
	q2.classList.remove('bonne_reponse');
	q2.classList.remove('mauvaise_reponse');

	let q3 = document.getElementById("q3")
	q3.classList.remove('bonne_reponse');
	q3.classList.remove('mauvaise_reponse');

	let q4 = document.getElementById("q4")
	q4.classList.remove('bonne_reponse');
	q4.classList.remove('mauvaise_reponse');

	let q5 = document.getElementById("q5")
	q5.classList.remove('bonne_reponse');
	q5.classList.remove('mauvaise_reponse');

	let q6 = document.getElementById("q6")
	q6.classList.remove('bonne_reponse');
	q6.classList.remove('mauvaise_reponse');
	
	// Vérification des cases à cocher
	var r1 = document.getElementsByName("q1");
	for (let i = 0; i < r1.length; i++) {
		if (r1[i].checked) {
			console.log(r1[i].value);
			if(r1[i].value == 7) {
				score++;
				q1.classList.add('bonne_reponse');
			}
			else {
				q1.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	let r2 = document.getElementsByName("q2");
	for (let i = 0; i < r2.length; i++) {
		if (r2[i].checked) {
			console.log(r2[i].value);
			if(r2[i].value == 1) {
				score++;
				q2.classList.add('bonne_reponse');
			}
			else {
				q2.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	
	let r3 = document.getElementsByName("q3");
	for (let i = 0; i < r3.length; i++) {
		if (r3[i].checked) {
			console.log(r3[i].value);
			if(r3[i].value == 7) {
				score++;
				q3.classList.add('bonne_reponse');
			}
			else {
				q3.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	let r4 = document.getElementsByName("q4");
	for (let i = 0; i < r4.length; i++) {
		if (r4[i].checked) {
			console.log(r4[i].value);
			if(r4[i].value == 7) {
				score++;
				q4.classList.add('bonne_reponse');
			}
			else {
				q4.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	let r5 = document.getElementsByName("q5");
	for (let i = 0; i < r5.length; i++) {
		if (r5[i].checked) {
			console.log(r5[i].value);
			if(r5[i].value == 7) {
				score++;
				q5.classList.add('bonne_reponse');
			}
			else {
				q5.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	let r6 = document.getElementsByName("q6");
	for (let i = 0; i < r6.length; i++) {
		if (r6[i].checked) {
			console.log(r6[i].value);
			if(r6[i].value == 7) {
				score++;
				q6.classList.add('bonne_reponse');
			}
			else {
				q6.classList.add('mauvaise_reponse');
			}
			break;
		}
	}

	let sentence;
	
	if (score <= 2) {
		sentence = "Bon les résultats ne sont pas concluants, le conseil a décidé de ne pas vous prendre...";
	} else if (score > 2 && score < 5) {
		sentence = "les résultats sont mitigés... on vous prend que si vous êtes vraiment motivé";
	} else {
		sentence = "Bravo ! vous êtes pris par le NYPD !!";
	
	// Affichage du score
	document.getElementById("score").style.color="blue";
	document.getElementById("score").innerHTML="Bonjour " + prenom + " " + nom + ", votre score est de : " + score + " / 3";
	document.getElementById("resultat").innerText = sentence;
}


const btn1 = document.getElementById("btn1");
let numberChanges = 0;
let done = false;

btn1.addEventListener("click", () => {
	traitement_score();
})

btn1.addEventListener("mouseenter", () => {
	if (numberChanges <= 10) {
		const x = Math.random() * 100;
		const y = Math.random() * 100;

		btn1.style.position = "absolute";
		btn1.style.top = `${x}%`;
		btn1.style.left = `${y}%`;

		numberChanges++;
	} else if (!done) {
		alert("bon allez je rigole, ça bouge plus maintenant :)");
		done = true;
	}
});
