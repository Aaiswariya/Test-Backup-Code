import { useEffect, useState } from "react";

//Program to find longest word in a given sentence ?
const longestSentence = (str) => {
	let longest = "";
	const words = str.split(" ");

	words.forEach((word) => {
		if (word.length > longest.length) {
			longest = word;
		}
	});
	return longest;
};
console.log(
	"longest word",
	longestSentence("The quick brown fox jumped over the lazy dog")
); // jumped

//How to check whether a string is palindrome or not ?
const isPallindrome = (str) => {
	const reversed = str.split(" ").reverse().join(" ");
	return str === reversed;
};
console.log("isPallindrome", isPallindrome("madam")); // true

// Write a program to remove duplicates from an array ?

const isUnique = (arr) => {
	return [...new Set(arr)];
};
console.log("isUnique", isUnique([1, 2, 2, 3, 4, 4, 5])); // [1,2,3,4,5]

//Program to find Reverse of a string without using built-in method ?

const reverseString = (str) => {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};

console.log("reverseString", reverseString("hello")); // olleh

// Find the max count of consecutive 1’s in an array ?
const findMaxConsecutiveOnes = (arr) => {
	let currcount = 1;
	let maxCount = 1;
	let maxstr = "";
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === arr[i - 1]) {
			currcount++;
		} else {
			currcount = 1;
		}
		if (currcount > maxCount) {
			maxCount = currcount;
			maxstr = arr[i];
		}
	}
	return { [maxstr]: maxCount };
};
console.log(
	"findMaxConsecutiveOnes",
	findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
); // {1:3}

// Find the max count of consecutive characters in a string ?
//calculate all the characters if 2 has same count return both

const findMaxConsecutiveCharsInString = (s) => {
	let maxCount = 0;
	let currCount = 0;
	let result = [];
	for (let i = 0; i <= s.length; i++) {
		if (s[i] === s[i - 1]) {
			currCount++;
		} else {
			if (currCount > maxCount) {
				maxCount = currCount;
				result = [{ [s[i - 1]]: maxCount }];
			} else if (currCount === maxCount) {
				result.push({ [s[i - 1]]: maxCount });
			}
			currCount = 1;
		}
	}
	return result;
};

console.log(
	"findMaxConsecutiveCharsInString",
	findMaxConsecutiveCharsInString("aabbcbdddeeeefff")
); // [{e:4}]

//Find the factorial of given number ?
const factorial = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
};
console.log("factorial", factorial(5)); // 120

//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

const mergeSortedarr = (arr1, arr2) => {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) result.push(arr1[i++]);
	while (j < arr2.length) result.push(arr2[j++]);
	return result;
};
console.log("mergeSortedarr", mergeSortedarr([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31] time complexity O(n)

//Create a function which will accepts two arrays arr1 and arr2. The function should
// return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
const same = (arr1, arr2) => {
	const frequencyCounter1 = {};
	const frequencyCounter2 = {};
	if (arr1.length !== arr2.length) return false;

	for (let key of arr1) {
		frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
	}
	for (let key of arr2) {
		frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
	}

	//comparision
	for (let key in frequencyCounter1) {
		let squared = Number(key) ** 2;
		if (!(squared in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[squared] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
};
console.log("same", same([1, 2, 3], [1, 4, 9])); // true
console.log("same", same([1, 2, 3], [1, 4, 4])); // false

// Given two strings. Find if one string can be formed by rearranging the letters of other string.
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	return str1.split("").sort().join("") === str2.split("").sort().join("");
};
console.log("validAnagram", validAnagram("listen", "silent")); // true
console.log("validAnagram", validAnagram("hello", "world")); // false

// Write logic to get unique objects from below array ?
//I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"},{name: "111111"}];

const getUniqueObjects = (arr, key) => {
	const uniqueNames = new Set();
	return arr.filter((item) => {
		if (!uniqueNames.has(item[key])) {
			uniqueNames.add(item[key]);
			return true;
		}
		return false;
	});
};
console.log(
	"getUniqueObjects",
	getUniqueObjects(
		[
			{ name: "sai" },
			{ name: "Nang" },
			{ name: "sai" },
			{ name: "Nang" },
			{ name: "111111" },
		],
		"name"
	)
); // [{name: "sai"},{name:"Nang"},{name: "111111"}

//Write a JavaScript program to find the maximum number in an array.
const maximumNumber = (arr) => {
	let maximum = arr[0];

	arr.forEach((item) => {
		if (item > maximum) {
			maximum = item;
		}
	});
	return maximum;
};
console.log("maximumNumber", maximumNumber([1, 2, 3, 4, 5])); // 5
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const getEvenNumbers = (arr) => {
	return arr.filter((item) => item % 2 == 0); // filter even numbers
	//and for odd numbers use item % 2 != 0
};
console.log("getEvenNumbers", getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

// Write a JavaScript function to check if a given number is prime.

const checkPrime = (num) => {
	if (num <= 1) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
};

console.log("checkPrime", checkPrime(5)); // true
console.log("checkPrime", checkPrime(4)); // false

// Write a JavaScript program to find the largest element in a nested array.
// Input: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
// Output: 9

const findLargestInNestedArray = (arr) => {
	let largest = arr[0][0] | arr[0]; // Initialize with the first element
	// Iterate through each sub-array
	for (let i = 0; i < arr.length; i++) {
		// Check if the current element is an array
		for (let j = 0; j < arr[i].length; j++) {
			// If the element is an array, recurse into it
			if (Array.isArray(arr[i][j])) {
				largest = Math.max(largest, findLargestInNestedArray(arr[i][j]));
			} else {
				largest = Math.max(largest, arr[i][j]); // Update largest if current element is greater
			}
		}
	}
	return largest;
};
console.log(
	"findLargestInNestedArray",
	findLargestInNestedArray([
		[1, 2, 3],
		[4, 5],
		[6, 7, 8, 9],
	])
); // 9
console.log(
	"findLargestInNestedArray 2",
	findLargestInNestedArray([1, 2, 3, [4, 5], [6, 7, 8, 9]])
); // 9

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

const generateFibonacci = (n) => {
	if (n === 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	const series = generateFibonacci(n - 1);
	series?.push(series[series.length - 1] + series[series.length - 2]);
	return series;
};
console.log("generateFibonacci", generateFibonacci(7)); // [0,1,1,2,3,5,8]

//Given a string, write a javascript function to count the occurrences of each character in the string.
const countCharOccurences = (str) => {
	let freq = {};
	for (let char of str) {
		freq[char] = (freq[char] || 0) + 1;
	}
	return freq;
};
console.log("countCharOccurences", countCharOccurences("hello")); // {h:1,e:1,l:2,o:1}

//Write a javascript function that sorts an array of numbers in ascending order.
const sortAscending = (arr) => {
	return arr.sort((a, b) => a - b);
};
console.log("sortAscending", sortAscending([5, 3, 8, 1, 2])); // [1,2,3,5,8]

// Write a javascript function that sorts an array of numbers in descending order.
const sortDescending = (arr) => {
	return arr.sort((a, b) => b - a);
};
console.log("sortDescending", sortDescending([5, 3, 8, 1, 2])); // [8,5,3,2,1]

//Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
const reverseWordsInSentence = (str) => {
	const words = str.split(" ");
	let reversed = "";
	for (let i = words.length - 1; i >= 0; i--) {
		reversed += words[i] + (i !== 0 ? " " : ""); // Add space between words except after the last word
	}
	return reversed;
};
console.log(
	"reverseWordsInSentence",
	reverseWordsInSentence("Hello World from JavaScript")
); // "JavaScript from World Hello"

//Implement a javascript function that flattens a nested array into a single-dimensional array.
const flattenArr = (arr) => {
	arr.reduce((acc, item) => {
		Array.isArray(item) ? acc.concat(flattenArr(item)) : acc.concat(item);
		return acc;
	}, []);
};
console.log("flattenArr", flattenArr([1, [2, [3, 4], 5], 6, [7, 8]])); // [1,2,3,4,5,6,7,8]
//Write a function which converts string input into an object
const stringToObject = (str, value) => {
	return str
		.split(".")
		.reverse()
		.reduce((acc, key) => ({ [key]: acc }), value);
};
console.log("stringToObject", stringToObject("a.b.c.d", 5)); // {a:{b:{c:{d:5}}}}
console.log("stringToObject", stringToObject("x.y.z", 42)); // {x:{y:{z:42}}}

//Write a function that returns all the keys in an object that match a given value.
const findKeysByValue = (obj, value) => {
	return Object.keys(obj).filter((item) => obj[item] === value);
};

console.log("findKeysByValue", findKeysByValue({ a: 1, b: 2, c: 1, d: 3 }, 1)); // ['a','c']

//simulate a api call using promises
const simulateApiCall = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					name: "John Doe",
				},
				{
					id: 2,
					name: "Jane Smith",
				},
			]);
		}, 1000);
	});
};

// type ApiData = { id: number, name: string }[] | null;

// IIFE - Immediately invoked function expression - the function is wrapped in () and
// then followed by one more ()to invoke it immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

var counter = (function () {
	let counter = 0;
	return {
		increment: function () {
			return counter++;
		},
		decrement: function () {
			return counter--;
		},
		getcount: function () {
			return counter;
		},
	};
})();
console.log(counter.increment()); //0
console.log(counter.increment()); //1
console.log(counter.getcount()); //1
console.log(counter.decrement()); //0
console.log(counter.getcount()); //0

// Trying to access the private count variable directly
//console.log(counter.count); // Output: undefined (cannot access private variable)

//find the duplicates in an array of numbers
const findDuplicates = (arr) => {
	let seen = new Set();
	let duplicate = new Set();
	for (let n of arr) {
		seen.has(n) ? duplicate.add(n) : seen.add(n);
	}
	return [...duplicate];
};
console.log("findDuplicates", findDuplicates([1, 2, 3, 4, 4, 5, 5, 6])); // [4,5]

//Implement custom reducer function

Array.prototype.customReduce = function (callback, initialValue) {
	let acc = initialValue !== undefined ? initialValue : this[0]; // if no initial value use first element as accumulator
	for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
		// if no initial value start from index 1 else start from 0
		acc = callback(acc, this[i], initialValue, this); // pass the array as 4th argument to match native reduce
	}
	return acc;
};
//how to use this
console.log([1, 2, 3, 4].customReduce((acc, item) => acc + item, 0)); // 10 -with initial value
console.log([1, 2, 3, 4].customReduce((acc, item) => acc * item)); // 24-- without initial value

// Implement polyfill for Promise.allSettled

const customPromiseAll = (promises) => {
	return new Promise((res, rej) => {
		let results = []; // to store results for each promise
		let count = 0; // to keep track of settled promises
		promises.forEach((promise, i) => {
			Promise.resolve(promise)
				.then((value) => {
					// in case the item is not a promise we convert it to promise using Promise.resolve
					results[i] = value; // store the result at the correct index
					if (++count === promises.length) {
						// if all promises are settled resolve the main promise
						res(results); // resolve with all results
					}
				})
				.catch(rej); // if any promise rejects reject the main promise
		});
	});
};

console.log(
	"customPromiseAll",
	customPromiseAll([
		Promise.resolve(1),
		Promise.resolve(2),
		Promise.resolve(3),
	]).then(console.log)
); // [1,2,3]

// In development mode only react strict mode is enabled which causes useEffect to run twice in dev mode only to help identify side effects
//React intentionally mounts, unmounts, and then remounts components to help identify side effects in components.
//This only happens in development mode and is not present in production builds.
//To avoid this behavior in development mode, you can remove the <React.StrictMode> wrapper from your component tree in index.js or App.js.
// However, it's generally recommended to keep Strict Mode enabled during development to catch potential issues early.
export const JavascriptCode = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		simulateApiCall()
			.then((data) => {
				setData(data);
				console.log("API data", data);
			})
			.catch((error) => {
				console.error("API error", error);
			});
	}, []);
	return (
		<div>
			{data
				? data.map((item) => (
						<table key={item.id}>
							<tr>
								<th>{item.name}</th>
							</tr>
							<tr>
								<td>{item.name}</td>
							</tr>
						</table>
				  ))
				: "Loading..."}
		</div>
	);
};
