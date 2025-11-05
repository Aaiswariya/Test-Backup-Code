//Time Complexity: O(n2)
// Auxiliary Space: O(1)

/*
In Bubble Sort, adjacent elements are compared, and they swap only if the first element is greater than the second. If two elements are 
equal, they remain in the same order as they were in the original list because there is no unnecessary swapping of equal elements.
*/
const bubbleSort = (arr) => {
	let swapped = false;
	for (let i = 0; i <= arr.length - 1; i++) {
		swapped = false;
		for (let j = 0; j <= arr.length - i - 2; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return arr;
};

/*
Time Complexity: O(n2)
Auxiliary Space: O(1)

Selection Sort is a simple comparison-based algorithm. It divides the array into two parts: sorted and unsorted. In each iteration,
it selects the smallest (or largest) element from the unsorted part and moves it to the sorted part. It is in place algorithm.
*/
const selectionSort = (arr) => {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) minIndex = j;
		}
		let temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
};

/*
Time Complexity: O(n2)
Auxiliary Space: O(1)

Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced
algorithms such as quicksort, heapsort, or merge sort.
Insertion Sort is considered a stable sorting algorithm. Stability in sorting means that if two elements have the same value,
their relative order in the sorted array will be the same as their relative order in the original array.

Insertion sort is efficient for small data values
*/

const insertionSort = (arr) => {
	let n = arr.length;
	for (let i = 1; i < n; i++) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr;
};

/* Merge sort -
Merge Sort is a divide-and-conquer algorithm that splits the list into two halves, recursively sorts each half, 
and then merges the sorted halves back together. It is an efficient, stable, and comparison-based sorting algorithm.

Time Complexity: O(n log n)- best, average, and worst case
Auxiliary Space: O(n) - because it requires additional space for the temporary arrays used during the merge process.
*/

const merge = (left, right) => {
	let leftIndex = 0;
	let rightIndex = 0;
	const result: number[] = [];
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
};

/*
Quick Sort -
Quick Sort is another divide-and-conquer algorithm that is highly efficient and widely used for sorting. It works by selecting 
a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than 
or greater than the pivot. The sub-arrays are then sorted recursively.

Time Complexity: O(n log n) - best and average case
Auxiliary Space: O(log n) - due to the recursive stack space.
*/
const quickSort = (arr) => {
	if (arr.length <= 1) return arr;
	const pivot = arr[Math.floor(arr.length / 2)];
	const left: number[] = [];
	const right: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (i !== Math.floor(arr.length / 2)) {
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

export const SortingAlgorithms = () => {
	return (
		<div>
			<h1>Sorting Algorithms</h1>
			<h2>Bubble Sort</h2>
			<pre>{JSON.stringify(bubbleSort([5, 3, 8, 4, 2]), null, 2)}</pre>
			<h2>Selection Sort</h2>
			<pre>{JSON.stringify(selectionSort([5, 3, 8, 4, 2]), null, 2)}</pre>
			<h2>Insertion Sort</h2>
			<pre>{JSON.stringify(insertionSort([5, 3, 8, 4, 2]), null, 2)}</pre>
			<h2>Merge Sort</h2>
			<pre>{JSON.stringify(mergeSort([5, 3, 8, 4, 2]), null, 2)}</pre>
			<h2>Quick Sort</h2>
			<pre>{JSON.stringify(quickSort([5, 3, 8, 4, 2]), null, 2)}</pre>
		</div>
	);
};
