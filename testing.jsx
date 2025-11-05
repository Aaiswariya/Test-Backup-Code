export const reverseString = (str) => {
	return str.split(" ").reverse().join(" ");
};

export const reverseWithoutMethod = (str) => {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i]; // if we want to reverse the letters
		// reversed += str[i] + (i !== 0 ? " " : ""); // if we want to reverse the words
	}
	return reversed;
};

export const isAnagram = (str1, str2) => {
	return str1.split("").sort().join("") === str2.split("").sort().join("");
};

// infinite scroll using intersection observer and normal dropdown menu  , new dsa coding and revise all the new code before sleeping .