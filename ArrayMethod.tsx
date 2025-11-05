const a = ["HTML", "CSS", "JS", "React"];

//The toString() method converts the given value into the string with each element separated by commas.
console.log("toString:", a.toString()); // "HTML,CSS,JS,React"

// Join method creates and returns a new string by concatenating all of the elements in an array,
// separated by the specified separator.
// If no separator is specified, a comma (,) is used by default.
console.log("Join method:", a.join("|")); // "HTML|CSS|JS|React"

type Employee = {
	name: string;
	age: number;
	salary?: number;
};

const emp: Employee = {
	name: "John",
	age: 30,
	salary: 50000,
};

console.log("delete method:", delete emp.salary); // true - property deleted successfully
console.log(emp); // { name: 'John', age: 30 } - salary property is removed, changes the original object
// concat methods add new elements to the end of the array and returns a new array.
// It does not modify the original array.
console.log("concat method:", a.concat(["fruits", "vegetables"])); // ["HTML", "CSS", "JS", "React", "fruits", "vegetables"]
console.log("Original array after concat:", a); // ["HTML", "CSS", "JS", "React"] - original array remains unchanged

const a1 = [
	["1", "2"],
	["3", "4", "5", ["6"], "7"],
];
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up
// to the specified depth.
console.log("flatten array method:", a1.flat()); // ["1", "2", "3", "4", "5", "6", "7"] - flattens one level deep

// push - add element to end of array
// pop - removes element from end of the array
// shift - removes element from starting of the array
// unshift - add element from starting of the array

console.log("push method:", a.push("Angular")); // 5 - new length of the array
console.log("pop method:", a.pop()); // "Angular" - removes last element
console.log("shift method:", a.shift()); // "HTML" - removes first element
console.log("unshift method:", a.unshift("TypeScript")); // 4 - new length of the array
console.log("Final array:", a); // ["TypeScript", "CSS", "JS", "React"] - final state of the array

//splice - takes 3 args - one the index from where you want to remove the element, second the no of elements we want
// to remove , and third it takes any element that we want to add.
// It modifies the original array and returns the removed elements as a new array.
const arrSplice = [1, 2, 3, 4, 5];
console.log("splice method:", arrSplice.splice(1, 3)); // [2, 3, 4] - removes elements from index 1 to 3
console.log("Original array after splice:", arrSplice); // [1, 5]
console.log("splice method with add:", arrSplice.splice(1, 0, 6, 7)); // [] - no elements removed, but 6 and 7 added
console.log("Original array after adding elements:", arrSplice); // [1, 6, 7, 5]

// slice method - takes 2 args - start index and end index (exclusive) and the orginal array remains unchanged.
const arrSlice = [1, 2, 3, 4, 5];
console.log("slice method:", arrSlice.slice(1, 4)); // [2, 3, 4] - returns elements from index 1 to 3
console.log("Original array after slice:", arrSlice); // [1, 2, 3, 4, 5] - original array remains unchanged

//some - checks if atleast one value satisfies the condition then it returns true, else false. It exits as soon as
// it finds a match and efficient for large arrays.
// It does not modify the original array.

const arrSome = [1, 2, 3, 4, 5];
console.log(
	"some method:",
	arrSome.some((num) => num > 4) // true - at least one element is greater than 4
);

// map- iterates over all the elements and return a new array with the results of calling a
// provided function on every element in the calling array.
// map is an example of higher-order function because it takes a function as an argument.
const arrMap = [1, 2, 3, 4, 5];
console.log(
	"map method:",
	arrMap.map((value) => value * 2) // [2, 4, 6, 8, 10] - returns a new array with each element multiplied by 2
);

// Filter - creates a new array with all the elements that satisfy the provided condition.
const arrFilter = [1, 2, 3, 4, 5];
console.log(
	"filter method:",
	arrFilter.filter((num) => num > 2) // [3, 4, 5] - returns a new array with elements greater than 2
); // Find- Return the first element that satisfies the provided condition.
const arrFind = [1, 2, 3, 4, 5];
console.log(
	"find method:",
	arrFind.find((num) => num > 3) // 4 - returns the first element greater than 3
);

// Reduce - executes a reducer function on each element of the array, resulting in a single output value.
const arrReduce = [1, 2, 3, 4, 5];
console.log(
	"reduce method:",
	arrReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // 15 - sums up all elements
);

// reverse - reverses the order of the elements in the array in place. Mutates the original array.
const arrReverse = [1, 2, 3, 4, 5];
console.log("reverse method:", arrReverse.reverse()); // [5, 4, 3, 2, 1] - reverses the array
// sort - sorts the elements of an array in place and returns the sorted array. It mutates the original array.
const arrSort = [5, 3, 8, 1, 2];
console.log(
	"sort method:",
	arrSort.sort((a, b) => a - b)
); // [1, 2, 3, 5, 8] - sorts the array in ascending order
console.log(
	"descending sort:",
	arrSort.sort((a, b) => b - a)
); // [8, 5, 3, 2, 1] - sorts the array in descending order

// values() - returns a new Array Iterator object that contains the values for each index in the array.
const valuesArr = ["Apple", "Banana", "Cherry"];
const res = valuesArr.values();

for (const value of res) {
	console.log(value);
} // "Apple" "Banana" "Cherry"

export const ArrayMethod = () => {
	return (
		<div>
			<h1>Array Methods</h1>
			<p>Check the console for output of toString method.</p>
		</div>
	);
};
