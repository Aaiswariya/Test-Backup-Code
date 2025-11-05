/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
*/

// code for above pattern

const rightAngleTriangle = (rows) => {
	// pattern variable carries the final pattern in string format
	let pattern = "";
	// outer loop runs for `rows` no. of times
	for (let n = 1; n <= rows; n++) {
		// inner loop runs for n
		for (let num = 1; num <= n; num++) {
			pattern += num;
		}

		// Add a new line character after contents of each line
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
const rightAngleSameNumber = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			pattern += i;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/*
1
2 3
4 5 6
7 8 9 10
*/
const rightAngleIncremental = (rows) => {
	let pattern = "";
	let count = 1;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			pattern += count;
			count++;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/*
12345
1234
123
12
1
*/

const reverseRightAngleTriangle = (rows) => {
	let pattern = "";
	for (let n = 1; n <= rows; n++) {
		for (let num = 1; num <= rows + 1 - n; num++) {
			pattern += num;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/* Pyramid Pattern
    1
   123
  12345
 1234567
123456789
*/

const pyramidNumPattern = (rows = 5) => {
	// pattern variable carries the final pattern in string format
	let pattern = "";

	// outer loop runs for `rows` no. of times
	for (let n = 1; n <= rows; n++) {
		// Inner Loop - I -> for the spaces
		for (let space = 1; space <= rows - n; space++) {
			pattern += " ";
		}

		// Inner Loop - II -> for the numbers
		for (let num = 1; num <= 2 * n - 1; num++) {
			pattern += num;
		}

		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/*
  1
 234
56789
*/
const pyramidNumPattern2 = (rows) => {
	let pattern = "";
	let count = 1;
	for (let i = 1; i <= rows; i++) {
		for (let space = 1; space <= rows - i; space++) {
			pattern += " ";
		}
		for (let j = 1; j <= 2 * i - 1; j++) {
			pattern += count;
			count++;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/*
 ****
 ****
 ****
 ****
 ****
 */

const squarePattern = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j < rows; j++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/* Hollow Square Pattern
 *****
 *   *
 *   *
 *****
 */
const hollowSquarePattern = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= rows; j++) {
			if (i === 1 || i === rows) {
				pattern += "*";
			} else {
				if (j === 1 || j === rows) {
					pattern += "*";
				} else {
					pattern += " ";
				}
			}
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/* Right Angle Triangle
 *
 **
 ***
 ****
 *****
 */
const righAngleStarTriangle = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let space = 1; space <= rows - i; space++) {
			pattern += " ";
		}
		for (let j = 1; j <= i; j++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/* Left Triangle Pattern
 *
 **
 ***
 ****
 *****
 */
const leftTrianglePattern = (rows) => {
	let pattern = "";

	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/*
Pyramid Triangle Pattern
         *
        ***
       *****
      *******
     *********
*/
const pyramidTrianglePattern = (rows) => {
	let pattern = "";
	for (let n = 1; n <= rows; n++) {
		// Inner Loop - I -> prints spaces
		for (let space = 1; space <= rows - n; space++) {
			pattern += " ";
		}

		// Inner Loop - II -> prints stars
		for (let num = 1; num <= 2 * n - 1; num++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/*
54321
5432
543
54
5
*/

const reverseRightAngNumTriangle = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let j = rows; j >= i; j--) {
			pattern += j;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/*
54321
4321
321
21
1
*/
const reverseTraingleII = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let num = rows + 1 - i; num >= 1; num--) {
			pattern += num;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

/*

*****
****
***
**
*
*

*/

const reverseStarTriangle = (rows) => {
	let pattern = "";
	for (let i = 1; i <= rows; i++) {
		for (let j = rows + 1 - i; j >= 1; j--) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/*
A
AA
AAA
AAAA
AAAAA
*/

const alphabetPattern = (rows) => {
	let pattern = "";
	let char = "A";
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			pattern += char;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};

const reversePatterChar = (rows) => {
	let pattern = "";
	let char = "A";
	for (let i = 1; i <= rows; i++) {
		for (let j = rows; j >= i; j--) {
			pattern += char;
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
const diamondPattern = (rows) => {
	let pattern = "";

	for (let i = 1; i <= rows; i++) {
		// Inner Loop - I -> prints spaces
		for (let space = 1; space <= rows - i; space++) {
			pattern += " ";
		}

		// Inner Loop - II -> prints stars
		for (let num = 1; num <= 2 * i - 1; num++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	for (let i = rows; i >= 1; i--) {
		for (let space = 1; space <= rows - i; space++) {
			pattern += " ";
		}
		for (let j = 1; j <= 2 * i - 1; j++) {
			pattern += "*";
		}
		pattern += "\n";
	}
	console.log(pattern);
	return pattern;
};
/* Pre : Unlike regular HTML elements where multiple spaces are collapsed into a single space and line breaks are ignored,
 the <pre> tag maintains all the white space, including indentation and line breaks. */
export const Patterns = () => {
	return (
		<div>
			<h1>Patterns</h1>
			<div>
				<h2>Right Angle Triangle</h2>
				<pre>{rightAngleTriangle(5)}</pre>
				<h2>Right Angle Same Number</h2>
				<pre>{rightAngleSameNumber(5)}</pre>
				<h2>Right Angle Incremental</h2>
				<pre>{rightAngleIncremental(4)}</pre>
				<h2>Reverse Right Angle Triangle</h2>
				<pre>{reverseRightAngleTriangle(5)}</pre>
				<h2>Pyramid Number Pattern</h2>
				<pre>{pyramidNumPattern()}</pre>
				<h2>Pyramid Number Pattern 2</h2>
				<pre>{pyramidNumPattern2(3)}</pre>
				<h2>Square Pattern</h2>
				<pre>{squarePattern(5)}</pre>
				<h2>Hollow Square Pattern</h2>
				<pre>{hollowSquarePattern(5)}</pre>
				<h2>Right Angle Star Triangle</h2>
				<pre>{righAngleStarTriangle(5)}</pre>
				<h2>Left Triangle Pattern</h2>
				<pre>{leftTrianglePattern(5)}</pre>
				<h2>Pyramid Triangle Pattern</h2>
				<pre>{pyramidTrianglePattern(5)}</pre>
				<h2>Reverse Right Angle Number Triangle</h2>
				<pre>{reverseRightAngNumTriangle(5)}</pre>
				<h2>Reverse Triangle II</h2>
				<pre>{reverseTraingleII(5)}</pre>
				<h2>Reverse Star Triangle</h2>
				<pre>{reverseStarTriangle(5)}</pre>
				<h2>Alphabet Pattern</h2>
				<pre>{alphabetPattern(5)}</pre>
				<h2>Reverse Alphabet Pattern</h2>
				<pre>{reversePatterChar(5)}</pre>
				<h2>Diamond Pattern</h2>
				<pre>{diamondPattern(5)}</pre>
			</div>
		</div>
	);
};
