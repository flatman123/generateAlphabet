//Generate Alphabet

function generateAlphabet(charCode=97){
	if (charCode === 122) return 'z';
	return ''.concat(String.fromCharCode(charCode))
					.concat(generateAlphabet(++charCode));
};
console.log(generateAlphabet());
