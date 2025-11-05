import "./App.css";
// import { Counter } from "./Counter";
// import { ToggleTheme } from "./ToggleTheme";
import { useEffect } from "react";
import { ParentRef } from "./ParentRef";
// import { DropdownToTextBox } from "./DropdownToTextBox";
// import { SingleToggleAccordion } from "./SingleToggleAccordion";
// import Timer from "./Timer";
// import { PaginatedUsers } from "./PaginationWithAPI";
// import { ResponsiveCardLayout } from "./ResponsiveCardLayout";
// import { HoverableText } from "./HigherOrderComponent";
// import { Patterns } from "./Patterns";
// import { SortingAlgorithms } from "./SortingAlgorithms";
// import { ArrayMethod } from "./ArrayMethod";
// import { FormElementwithFormData } from "./FormElementWithFormData";
// import { JavascriptCode } from "./JavascriptCode";
// import { EventLoop } from "./EventLoop";
// import { InfiniteScrollNormal } from "./InfiniteScrollNormal";
// import { ParentComponent } from "./ParentComponent";
// import { InfiniteScrollInterSection } from "./InfiniteScrollInterSection";
// import { InfiniteScrolling } from "./InfiniteScrolling";
// import { MultiToggleAccordion } from "./MultilLevelAccordion";
// import { FormElement } from "./FormElement";

function App() {
	// const [count, setCount] = useState(0);
	// const [theme, setTheme] = useState("light");

	// let test;
	// console.log("test", typeof test); // undefined
	console.log("minand max", Math.max() < Math.min()); // false
	console.log("minand max", Math.max() > Math.min()); // true
	console.log("minand max", Math.max() === Math.min()); // false

	// example of useEffect
	useEffect(() => {
		console.log("test normally to be executed only once");
		return () => console.log("test cleanup");
	}, []);
	// const obj = {
	// 	a: 1,
	// 	b: 2,
	// 	sum() {
	// 		return this.a + this.b;
	// 	},
	// };
	// const res = obj.sum;
	// console.log("res", res()); // NaN because this is not bound to obj here
	// const res1 = obj.sum.bind(obj);
	// console.log("res1", res1()); // 3 because this is bound to obj here

	//factorial of a number
	const factorial = (n) => {
		if (n === 0 || n === 1) {
			return 1;
		} else {
			return n * factorial(n - 1);
		}
	};
	console.log("factorial of 5", factorial(5));

	//genarte fibonacci series
	const fibonacci = (n) => {
		if (n <= 0) return [];
		if (n === 1) return [0];
		if (n === 2) return [0, 1];
		const series = fibonacci(n - 1); // recursive call
		series.push(series[series.length - 1] + series[series.length - 2]);
		return series;
	};
	console.log("fibonacci series", fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
	//reverse a string

	const reverseString = () => {
		const str = "Hello World";
		const reverse = str.split(" ").reverse().join(" ");
		console.log("reverse str", reverse);
		return reverse;
	};

	const reverseStrWithoutMethod = (str) => {
		let reversed = "";
		for (let i = str.length - 1; i >= 0; i--) {
			reversed += str[i];
		}
		return reversed;
	};

	console.log("reverse without method", reverseStrWithoutMethod("Hello World")); // dlroW olleH
	// remove duplicates from array

	const removeDuplicate = () => {
		const arr = [1, 2, 3, 4, 5, 1, 2, 3];
		const uniqArray = [...new Set(arr)];
		console.log("uniqArray", uniqArray);
		console.log("uniqArray", typeof uniqArray); // object
		return uniqArray;
	};
	// sum of a  nested array
	const sumNested = (arr) => {
		let total = 0;
		arr.forEach((item) => {
			if (Array.isArray(item)) {
				total += sumNested(item); // recursive call
			} else if (typeof item === "number") {
				total += item;
			}
		});
		return total;
	};

	console.log("sumNested", sumNested([1, [2, 3], [4, [5, 6]]])); // Output: 21
	//flatten a nested array

	const flattenArray = (arr) => {
		let result = [];
		arr.forEach((item) => {
			if (Array.isArray(item)) {
				// recursive call
				result = result.concat(flattenArray(item));
			} else {
				result.push(item);
			}
		});
		return result;
	};

	//using reduce to flatten an array
	const flattenArrayUsingReduce = (arr) => {
		return arr.reduce((acc, item) => {
			if (Array.isArray(item)) {
				return acc.concat(flattenArrayUsingReduce(item));
			} else {
				return acc.concat(item);
			}
		}, []);
	};

	// longest word in a string
	const longestWord = (str) => {
		const words = str.split(" ");
		let longest = "";

		words.forEach((word) => {
			if (word.length > longest.length) {
				longest = word;
			}
		});
		return longest;
	};

	// Capitalize the first letter of each word in a string
	const capitalizeFirstLetterOfEachWord = (str) => {
		return str
			.split(" ")
			.map((item) => {
				return item.charAt(0).toUpperCase() + item.slice(1);
			})
			.join(" ");
	};

	//Capitalize the first letter of the sentence
	const capitalizeFirstLetterOfSentence = (str) => {
		const trim = str.trim();
		return trim.charAt(0).toUpperCase() + trim.slice(1);
	};

	const groupByKey = (arr, key) => {
		return arr.reduce((acc, item) => {
			if (!acc[item[key]]) {
				acc[item[key]] = [];
			}
			acc[item[key]].push(item);
			return acc;
		}, {});
	};
	//count elements in an array
	const countElements = (arr) => {
		return arr.reduce((acc, item) => {
			if (!acc[item]) {
				acc[item] = 1;
			} else {
				acc[item]++;
			}
			return acc;
		}, {});
	};

	const largestNumber = (arr) => {
		let largest = arr[0];
		arr.forEach((item) => {
			if (item > largest) {
				largest = item;
			}
		});
		return largest;
	};

	const secondLargestNumber = (arr) => {
		const uniqArray = [...new Set(arr)];
		const largestNum = Math.max(...uniqArray);
		const filteredArray = arr.filter((item) => item !== largestNum);

		if (arr.length < 2) {
			return null; // or throw an error if you prefer
		}
		return Math.max(...filteredArray);
	};

	const twoSumProblem = (arr, target) => {
		const map = new Map(); // to store the numbers we have seen so far
		// iterate through the array
		for (let i = 0; i < arr.length; i++) {
			const difference = target - arr[i];
			// Check if the complement exists in the map
			if (map.has(difference)) {
				return [map.get(difference), i]; // return indices of the two numbers
			}
			// If not, add the current number to the map
			map.set(arr[i], i);
		}
		return null; // or throw an error if no pair found
	};

	const checkUniqueChar = (str) => {
		const charSet = new Set();
		for (const char of str) {
			if (charSet.has(char)) {
				return false; // Duplicate character found
			}
			charSet.add(char);
		}
		return true; // All characters are unique
	};

	const mostFrequentElement = (arr) => {
		const frequencyMap = {};
		let maxCount = 0;
		let mostFrequent;

		arr.forEach((item) => {
			frequencyMap[item] = (frequencyMap[item] || 0) + 1;
			if (frequencyMap[item] > maxCount) {
				maxCount = frequencyMap[item];
				mostFrequent = item;
			}
		});

		return mostFrequent; // Return the most frequent element
	};
	//cloning an array

	const clonedArray = (value) => {
		if (value === null || typeof value !== "object") {
			return value; // Return the value if it's not an object or array
		}
		if (Array.isArray(value)) {
			const result = [];
			for (let i = 0; i <= value.length; i++) {
				result[i] = clonedArray(value[i]);
			}
			return result;
		}
		let result = {};
		for (let key in value) {
			if (Object.prototype.hasOwnProperty.call(value, key)) {
				// to check if the key is a direct property of the object
				result[key] = clonedArray(value[key]);
			}
		}
		return result;
	};
	const closure = () => {
		let count = 0;
		return function () {
			// inner function not neccessarily needs a name or should be arrow function
			count++;
			console.log("Count:", count);
			return count;
		};
	};

	// count occurences in an string
	const countOccuranceInString = (str) => {
		const words = str.trim().toLowerCase().split(" ");
		let freq = {};
		words.forEach((word) => {
			freq[word] = (freq[word] || 0) + 1;
		});
		console.log("words:", words);
		return freq;
	};

	const uniqElementInString = (str) => {
		const words = str.split("");
		let freq = {};
		for (let char of words) {
			freq[char] = (freq[char] || 0) + 1;
		}
		for (let char of words) {
			if (freq[char] === 1) {
				return char; // Return the first unique character
			}
		}
		return null; // Return null if no unique character found
	};

	// count occurances of a particular character in a string

	const countOccur = (str, target) => {
		let count = 0;
		for (let char of str) {
			if (char === target) {
				count++;
			}
		}
		return count;
	};
	const mergeTwoSortArrays = (arr1, arr2) => {
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
	const validParenthesis = (str) => {
		const stack = [];
		const map = {
			"(": ")",
			"{": "}",
			"[": "]",
		};
		for (let char of str) {
			if (map[char]) {
				// if it's an opening bracket
				stack.push(map[char]); // push the expected closing bracket onto the stack
			} else {
				// if it's a closing bracket, check if it matches the last expected closing bracket
				if (char !== stack.pop()) {
					// mismatched or unbalanced
					return false;
				}
			}
		}
		return stack.length === 0; // if stack is empty, all parentheses are balanced
	};
	const maxRepeatConsCharacter = (str) => {
		let maxChar = str[0];
		let maxCount = 1;
		let currentCount = 1;
		if (!str) return {};
		for (let i = 1; i < str.length; i++) {
			if (str[i] === str[i - 1]) {
				currentCount++;
				maxCount = Math.max(maxCount, currentCount);
			} else {
				currentCount = 1;
			}
			if (currentCount > maxCount) {
				maxCount = currentCount;
				maxChar = str[i];
			}
		}
		return { [maxChar]: maxCount };
	};
	const sumArr = () => {
		const arr = [1, 2, 3, 4, 5];
		const sum = arr.reduce((acc, item) => acc + item, 5); // initial value is 5
		return sum; // 20
	};
	const findMissingNumber = (arr) => {
		const n = arr.length + 1; // since one number is missing
		const expectedSum = (n * (n + 1)) / 2; // sum of first n natural numbers
		const actualSum = arr.reduce((acc, num) => acc + num, 0);
		return expectedSum - actualSum;
	};
	const fizzBuzz = (n) => {
		for (let i = 0; i <= n; i++) {
			if (i % 15 === 0) {
				console.log("FizzBuzz");
			} else if (i % 3 === 0) {
				console.log("Fizz");
			} else if (i % 5 === 0) {
				console.log("Buzz");
			} else {
				console.log(i);
			}
		}
	};
	const lengthofLongestSubstrwithoutRepeatingChar = (str) => {
		let set = new Set();
		let left = 0;
		let maxLength = 0;
		let longestSubstr = "";
		for (let right = 0; right < str.length; right++) {
			while (set.has(str[right])) {
				// if char is already in set, move the left pointer
				set.delete(str[left]); // remove char at left pointer from set
				left++; // move left pointer to right
			}
			set.add(str[right]); // add char at right pointer to set
			// update maxLength and longestSubstr if needed
			if (set.size > maxLength) {
				// new max found
				maxLength = set.size;
				longestSubstr = str.substring(left, right + 1);
			}
		}
		return { [longestSubstr]: maxLength };
	};

	const sortArr = (arr) => {
		const n = arr.length;
		// bubble sort algorithm to sort the array in ascending order
		for (let i = 0; i < n - 1; i++) {
			// n-1 passes

			for (let j = 0; j < n - i - 1; j++) {
				// compare adjacent elements
				if (arr[j] > arr[j + 1]) {
					// swap
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
		return arr; // return the sorted array
	}; // time complexity O(n^2) space complexity O(1)
	const sortArrDesc = (arr) => {
		const n = arr.length;
		// bubble sort algorithm to sort the array in ascending order
		for (let i = 0; i < n - 1; i++) {
			// n-1 passes

			for (let j = 0; j < n - i - 1; j++) {
				// compare adjacent elements
				if (arr[j] < arr[j + 1]) {
					// swap
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
		return arr; // return the sorted array
	}; // time complexity O(n^2) space complexity O(1)

	const arrSubset = (arr) => {
		const result = [];
		const backtracking = (start, curr) => {
			result.push(...curr);
			for (let i = start; i < arr.length; i++) {
				curr.push(arr[i]);
				backtracking(i + 1, curr);
				curr.pop();
			}
		};

		backtracking(0, []);
		return result;
	};
	//get sorted unique object from an array of objects based on a key
	const getSortedUniqueObjects = (arr, key) => {
		const unique = [];
		for (let item of arr) {
			if (!unique.some((uni) => uni[key] === item[key])) {
				unique.push(item);
			}
		}
		return unique.sort((a, b) => a[key] - b[key]); // ascending order sort
	};

	console.log(
		"getSortedUniqueObjects",
		getSortedUniqueObjects(
			[
				{ id: 3, name: "John" },
				{ id: 1, name: "Jane" },
				{ id: 2, name: "Jim" },
				{ id: 1, name: "Jake" },
			],
			"id"
		)
	); // [ { id: 1, name: 'Jane' }, { id: 2, name: 'Jim' }, { id: 3, name: 'John' } ]

	console.log("test", arrSubset([1, 2, 3])); //[[], [1],[2],[3],[1,2],[1,2,3],[1,3],[2,3]]
	function test1() {
		var x = 10;
		let y = 20;
		console.log("x", x); //10
		console.log("y", y); //20
	}
	test1();
	{
		var x = 10;
		let y = 20;
		console.log("x", x); //10
		console.log("y", y); //20
	}
	console.log("x", x); //10
	// console.log("y", y); // ReferenceError: y is not defined
	// Testing the functions
	console.log("sortArr", sortArr([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
	console.log("sortArrDesc", sortArrDesc([64, 34, 25, 12, 22, 11, 90])); // [90, 64, 34, 25, 22, 12, 11]
	console.log(
		"lengthofLongestSubstrwithoutRepeatingChar",
		lengthofLongestSubstrwithoutRepeatingChar("abcabcbb")
	); // { abc: 3 }
	console.log("fizzBuzz", fizzBuzz(6));
	console.log("findMissingNumber", findMissingNumber([3, 0, 1])); // 2
	console.log(
		"maxRepeatConsCharacter",
		maxRepeatConsCharacter("aaabbbccddeee")
	); // { a: 3 }
	console.log("validParenthesis", validParenthesis("(){}[")); // false
	console.log(
		"merge two sort arrays",
		mergeTwoSortArrays([1, 3, 5], [2, 4, 6])
	); // [1,2,3,4,5,6]
	console.log("count occur", countOccur("Hello World", "l")); // 3
	console.log("uniq element in string", uniqElementInString("ttessty")); //
	console.log(
		"count occur in string",
		countOccuranceInString(
			"The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
		)
	); // { the: 4, quick: 2, brown: 2, fox: 2, jumps: 2, over: 2, lazy: 2, dog.: 2 }

	console.log("sum of array", sumArr()); // 20 as initial value is 5
	let testArr = [1, 2, 3];
	testArr[10] = 99;
	console.log("testArr", testArr); // [1, 2, 3, <7 empty items>, 99]
	console.log("reverse a string", reverseString()); // world Hello
	removeDuplicate();
	const increment = closure();
	increment(); // count1
	increment(); // count2

	console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
	console.log(flattenArrayUsingReduce([1, [2, 3], [4, [5, 6]]]));
	console.log(longestWord("The quicker brown fox jumps over the lazy dog"));
	console.log(
		capitalizeFirstLetterOfEachWord(
			"the quick brown fox jumps over the lazy dog"
		)
	);
	console.log(
		capitalizeFirstLetterOfSentence(
			"the quick brown fox jumps over the lazy dog"
		)
	);
	console.log(
		groupByKey(
			[
				{ id: 1, name: "John", age: 25 },
				{ id: 2, name: "Jane", age: 30 },
				{ id: 3, name: "John", age: 35 },
			],
			"name"
		)
	); // { John: [ { id: 1, name: 'John', age: 25 }, { id: 3, name: 'John', age: 35 } ],
	// Jane: [ { id: 2, name: 'Jane', age: 30 } ] }

	console.log(countElements([1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3])); // { '1': 3, '2': 3, '3': 3, '4': 1, '5': 1 }
	console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
	console.log(secondLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

	console.log(twoSumProblem([1, 2, 3, 4, 5], 6)); // [0, 4] (indices of 1 and 5)

	console.log("testuniq", checkUniqueChar("abcdefggg")); // false
	console.log(mostFrequentElement([1, 2, 2, 2, 4])); // 2
	console.log(clonedArray([1, 2, 3, 4, 5]));
	console.log("type of", typeof typeof "Hello"); // string
	console.log("type of", typeof typeof true); // string
	console.log("type of nm", typeof typeof 1); // string
	console.log("type of", typeof typeof {}); // string
	console.log("type of", typeof typeof []); // string
	console.log("type of", typeof typeof null); // string
	console.log("type of", typeof typeof undefined); // string
	console.log("type of", typeof {}); // object
	console.log("type of", typeof []); // object
	console.log("type of", typeof null); // object
	console.log("type of", typeof undefined); // undefined
	console.log("type of", typeof true); // boolean
	console.log("type of", typeof 1); // number

	async function test() {
		console.log("1");
		await Promise.resolve();
		console.log("2");
	}

	console.log("3");
	test();
	console.log("4"); // ans is 3 1 4 2
	// const handleTheme = () => {
	// 	setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	// };
	return (
		<div>
			{/* <ButtonComponent
				buttonProps={{
					color: "primary",
					onClick: () => console.log("Button clicked!"),
				}}
			>Hello
				</ButtonComponent> */}

			{/* <Counter
				count={count}
				setCount={setCount}
			/>
			<ToggleTheme
				theme={theme}
				setTheme={handleTheme}
			/> */}
			{/* <UserSearch /> */}
			{/* <FormElement /> */}
			{/* <SingleToggleAccordion /> */}
			{/* <Timer /> */}
			{/* <MultiToggleAccordion /> */}
			{/* <PaginatedUsers /> */}
			{/* <ResponsiveCardLayout /> */}
			{/* <HoverableText /> */}
			{/* <Patterns />
			<SortingAlgorithms />
			<ArrayMethod /> */}
			{/* <InfiniteScrolling /> */}
			{/* <FormElementwithFormData /> */}
			{/* <JavascriptCode /> */}
			{/* <InfiniteScrollNormal /> */}
			{/* <InfiniteScrollInterSection /> */}
			{/* <ParentComponent /> */}
			{/* <DropdownToTextBox /> */}
			<ParentRef />
		</div>
	);
}

export default App;
