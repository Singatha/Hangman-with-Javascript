let words = ["Chakra", "Haki", "Nen", "Spritual Pressure", "Mana", "Alchemy", "Trion", "Bending", "Soul", "Magic", "Quirk"];
let wildCard = [];
let word = [];

let output = "";
let caught = 0;
let missed = 0;
let score = 0;
let chances = 0;
let imageState = 1;

document.getElementById("a").addEventListener('click', alphaButtons);
document.getElementById("b").addEventListener('click', alphaButtons);
document.getElementById("c").addEventListener('click', alphaButtons);
document.getElementById("d").addEventListener('click', alphaButtons);
document.getElementById("e").addEventListener('click', alphaButtons);
document.getElementById("f").addEventListener('click', alphaButtons);
document.getElementById("g").addEventListener('click', alphaButtons);
document.getElementById("h").addEventListener('click', alphaButtons);
document.getElementById("i").addEventListener('click', alphaButtons);
document.getElementById("j").addEventListener('click', alphaButtons);
document.getElementById("k").addEventListener('click', alphaButtons);
document.getElementById("l").addEventListener('click', alphaButtons);
document.getElementById("m").addEventListener('click', alphaButtons);
document.getElementById("n").addEventListener('click', alphaButtons);
document.getElementById("o").addEventListener('click', alphaButtons);
document.getElementById("p").addEventListener('click', alphaButtons);
document.getElementById("q").addEventListener('click', alphaButtons);
document.getElementById("r").addEventListener('click', alphaButtons);
document.getElementById("s").addEventListener('click', alphaButtons);
document.getElementById("t").addEventListener('click', alphaButtons);
document.getElementById("u").addEventListener('click', alphaButtons);
document.getElementById("v").addEventListener('click', alphaButtons);
document.getElementById("w").addEventListener('click', alphaButtons);
document.getElementById("x").addEventListener('click', alphaButtons);
document.getElementById("y").addEventListener('click', alphaButtons);
document.getElementById("z").addEventListener('click', alphaButtons);

function handleStart(){
	let num = Math.random()*10;

	let val = Math.round(num);
	console.log(num);
	console.log(val);
	
	let secretWord = words[val];
	chances = secretWord.length/2;

	for (var j = 0; j < secretWord.length; j++){
		var temp = secretWord.charAt(j) + "";
		console.log(temp);
		word[j] = temp;
	}

	for (var i = 0; i < secretWord.length; i++){
		wildCard[i]= "?";
	}

	for (var k = 0; k < secretWord.length; k++){
		output += wildCard[k] + " ";
	}

	console.log(output);
	console.log(secretWord);
	
	document.getElementById("mystreyWord").innerHTML = output;
}

function handleQuit(){
	var flag = confirm("Are you sure you want to quit ?");
	if (flag) {
		console.log("User wants to continue !");	
	}

	else {
		console.log("User does not want to continue !");
	}
	
}

function handleReset(){
	wildCard = [];
	word = [];
	output = "";
	caught = 0;
	missed = 0;
	score = 0;
	chances = 0;
	imageState = 1;
	
	handleStart();
	// refresh score
	document.getElementById("score").innerHTML = score + "";
	document.getElementById("caught").innerHTML = caught + "";
	document.getElementById("missed").innerHTML = missed + "";

	// enable buttons
	document.getElementById("a").disabled = false;
	document.getElementById("b").disabled = false;
	document.getElementById("c").disabled = false;
	document.getElementById("d").disabled = false;
	document.getElementById("e").disabled = false;

	document.getElementById("f").disabled = false;
	document.getElementById("g").disabled = false;
	document.getElementById("h").disabled = false;
	document.getElementById("i").disabled = false;
	document.getElementById("j").disabled = false;

	document.getElementById("k").disabled = false;
	document.getElementById("l").disabled = false;
	document.getElementById("m").disabled = false;
	document.getElementById("n").disabled = false;
	document.getElementById("o").disabled = false;

	document.getElementById("p").disabled = false;
	document.getElementById("q").disabled = false;
	document.getElementById("r").disabled = false;
	document.getElementById("s").disabled = false;
	document.getElementById("t").disabled = false;

	document.getElementById("u").disabled = false;
	document.getElementById("v").disabled = false;
	document.getElementById("w").disabled = false;
	document.getElementById("x").disabled = false;
	document.getElementById("y").disabled = false;

	document.getElementById("z").disabled = false;
}

function compareArray(arr1, arr2){
	let counter = 0;
	for (var a = 0; a < arr1.length; a++){
		if (arr1[a] === arr2[a]){
			counter++;
		}
	}

	if (counter === (arr1.length-1)){
		return true;
	}

	else {
		return false;
	}
}

function update(letter, arr){
	let count = 0;
	for (var n = 0; n < arr.length; n++){
		if (letter === arr[n].toLowerCase()) {
			wildCard[n] = letter;
			count++;
		}
	}
	chances--;


	// checking and updating the score
	if (count === 0){
		missed++;
		score -= 2;
		if (compareArray(word, wildCard)){
			console.log("Game Over !, You Win !");
			alert("Game Over,You Win !");
			handleReset();
		}
		
		else {
			if (chances <= 0 && imageState != 9){
				console.log("Manipulate them images");
				
				if (imageState === 1){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state4.gif">';
					imageState++;	
				}

				else if (imageState === 2){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state5.gif">';
					imageState++;
				}

				else if (imageState === 3){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state6.gif">';
					imageState++;
				}

				else if (imageState === 4){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state7.gif">';
					imageState++;
				}

				else if (imageState === 5){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state8.gif">';
					imageState++;	
				}

				else if (imageState === 6){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state9.gif">';
					imageState++;
				}

				else if (imageState === 7){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state10.gif">';
					imageState++;
				}

				else if (imageState === 8){
					document.getElementById("image").innerHTML = '<img class="img-thumbnail" src="images/state11.gif">';
					imageState++;
				}
			}

			else if (chances > 0){
				console.log("Have mercy on him");
				//imageState++;
			}

			else {
				console.log("Game Over !, You Loose !");
				alert("Game Over,You Loose !");
				handleReset();
			}
		}
	}

	else {
		caught++;
		score += 4;
		if (compareArray(word, wildCard)){
			console.log("Game Over !, You Win !");
			alert("Game Over,You Win !");
		}
	}

	let output1 = "";
	for (var k = 0; k < arr.length; k++){
		output1 += wildCard[k] + " ";
	}

	document.getElementById("score").innerHTML = score + "";
	document.getElementById("caught").innerHTML = caught + "";
	document.getElementById("missed").innerHTML = missed + "";
	document.getElementById("mystreyWord").innerHTML = output1;	
}

function alphaButtons(e){
	//console.log(e.target);
	if (e.target.id === "a"){
		e.target.disabled = true;
		update("a", word);
	}

	else if (e.target.id === "b"){
		e.target.disabled = true;
		update("b", word);
	}

	else if (e.target.id === "c"){
		e.target.disabled = true;
		update("c", word);
	}

	else if (e.target.id === "d"){
		e.target.disabled = true;
		update("d", word);
	}

	else if (e.target.id === "e"){
		e.target.disabled = true;
		update("e", word);
	}

	else if (e.target.id === "f"){
		e.target.disabled = true;
		update("f", word);
	}

	else if (e.target.id === "g"){
		e.target.disabled = true;
		update("g", word);
	}

	else if (e.target.id === "h"){
		e.target.disabled = true;
		update("h", word);
	}

	else if (e.target.id === "i"){
		e.target.disabled = true;
		update("i", word);
	}

	else if (e.target.id === "j"){
		e.target.disabled = true;
		update("j", word);
	}

	else if (e.target.id === "k"){
		e.target.disabled = true;
		update("k", word);
	}

	else if (e.target.id === "l"){
		e.target.disabled = true;
		update("l", word);
	}

	else if (e.target.id === "m"){
		e.target.disabled = true;
		update("m", word);
	}

	else if (e.target.id === "n"){
		e.target.disabled = true;
		update("n", word);
	}

	else if (e.target.id === "o"){
		e.target.disabled = true;
		update("o", word);
	}

	else if (e.target.id === "p"){
		e.target.disabled = true;
		update("p", word);
	}

	else if (e.target.id === "q"){
		e.target.disabled = true;
		update("q", word);
	}

	else if (e.target.id === "r"){
		e.target.disabled = true;
		update("r", word);
	}

	else if (e.target.id === "s"){
		e.target.disabled = true;
		update("s", word);
	}

	else if (e.target.id === "t"){
		e.target.disabled = true;
		update("t", word);
	}

	else if (e.target.id === "u"){
		e.target.disabled = true;
		update("u", word);
	}

	else if (e.target.id === "v"){
		e.target.disabled = true;
		update("v", word);
	}

	else if (e.target.id === "w"){
		e.target.disabled = true;
		update("w", word);
	}

	else if (e.target.id === "x"){
		e.target.disabled = true;
		update("x", word);
	}

	else if (e.target.id === "y"){
		e.target.disabled = true;
		update("y", word);
	}

	else if (e.target.id === "z"){
		e.target.disabled = true;
		update("z", word);
	}
}