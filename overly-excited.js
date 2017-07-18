
let sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];


let output = " ";

let bang = "!";

function addExcitment(placeholder) {
	for(let i = 0; i < placeholder.length; i++){
	let currentWord = placeholder[i]
	output += " " + currentWord;
		if ((i + 1 ) % 3 === 0) {
		output += bang;
		bang += "!";

		}



	console.log(output);

	}
}

addExcitment(sentence);


