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
			console.log(r1[i].value);
			if(r2[i].value == 5) {
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
	
	// Affichage du score
	document.getElementById("score").style.color="blue";
	document.getElementById("score").innerHTML="Bonjour " + prenom + " " + nom + ", votre score est de : " + score + " / 3";
}

function question2() {
	let score;
	
}


const btn1 = document.getElementById("btn1");
let numberChanges = 0;

btn1.addEventListener("mouseenter", () => {
	if (numberChanges <= 10) {
		const x = Math.random() * 100;
		const y = Math.random() * 100;

		btn1.style.position = "absolute";
		btn1.style.top = `${x}%`;
		btn1.style.left = `${y}%`;

		numberChanges++;
	} else {
		alert("bon allez je rigole, ça bouge plus maintenant :)");
	}
});




