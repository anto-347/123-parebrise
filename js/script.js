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
	
	// Vérification des cases à cocher
	var r1 = document.getElementsByName("q1");
	for (let i = 0; i < r1.length; i++) {
		if (r1[i].checked) {
			//alert(r1[i].value);
			console.log(r1[i].value);
			if(r1[i].value == 5) {
				score++;
				q1.classList.add('bonne_reponse');
			}
			else {
				q1.classList.add('mauvaise_reponse');
			}
			break;
		}
	}
	
	// Affichage du score
	document.getElementById("score").style.color="blue";
	document.getElementById("score").innerHTML="Bonjour " + prenom + " " + nom + ", votre score est de : " + score + " / 1";
	document.getElementById("q1").classList.add("hidden");
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




