export const ReactQuest = () => {
	//css questions

	// 1. Block vs Inline

	/*
    Block elements always start on a new line and take up the full width available, stretching from the left to right of their container. 
    They create a "block" of content that pushes any content after them to the next line. Typical examples are <div>, <p>, <h1>-<h6>, 
    and <section>. For instance:

    <div>This is a block element</div>
    <div>Another block element</div>
    These will appear stacked vertically because each <div> starts on a new line.

    Inline elements, on the other hand, do not start on a new line. They take only as much width as their content needs and 
    flow horizontally within a line of text. Examples include <span>, <a>, and <strong>. For example:

    <span>This is inline</span>
    <span>Inline again</span>
    These appear side-by-side on the same line if there's enough space.

    When to use them :: 

    1. Use block elements when you want to group 
    larger sections or containers that should appear on separate lines, like paragraphs, div containers, headers, or list items.

    2. Use inline elements when you want to style a small portion of text within a block element without breaking the flow of content. 
    This is useful for links, emphasized text, or any other inline-level styling.

    */

	// 2. Padding vs margin
	/*  Padding is the space inside a div (between the content and the border),
    while margin is the space outside the div (between the border and other elements).
    If you add padding to a div, by default, the width of the div will increase by the amount of padding because 
    padding adds space inside the element and extends its total size beyond the content width.

    To prevent the width from increasing when adding padding, you can use the CSS property:

        css
        box-sizing: border-box;
    This changes the box model calculation so that padding and border are included within the specified width, rather than added outside it. 
    That way, the width of the div stays the same even when you add padding, and the content area inside shrinks accordingly

    Summary:
        Padding: space inside the element, affects element size.

        Margin: space outside the element, does not affect element size.

        Adding padding normally increases width.

        Use box-sizing: border-box to keep width unchanged when adding padding.
    */

	function greet(action: () => void) {
		console.log("Hello!");
		return action();
	}

	function sayGoodbye() {
		console.log("Goodbye!");
	}
	console.log("Greet function:", greet(sayGoodbye));
	return (
		<div>
			<h1>React Quest</h1>
			<p>Welcome to the React Quest!</p>
			<p>Here you can explore various React components and features.</p>
		</div>
	);
};
// “What’s the difference between 𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗗𝗢𝗠 updates and 𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸? Do they solve the same thing?”

/* 𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗗𝗢𝗠
React maintains a lightweight copy of the DOM (Virtual DOM).
When state/props change, React creates a new Virtual DOM, compares it with the previous one (diffing), and updates only what’s changed in the real DOM.
🎯 Goal: Efficient 𝗨𝗜 𝗿𝗲𝗻𝗱𝗲𝗿𝗶𝗻𝗴.

🔹 𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗛𝗼𝗼𝗸
Every re-render, React recreates functions defined inside components.
Passing these functions to child components can cause unnecessary re-renders.
𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 memoizes the function reference so it only changes when its dependencies do.
🎯 Goal: Efficient 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗿𝗲𝘂𝘀𝗲 and avoiding wasted renders.

✅ What I learned:
𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗗𝗢𝗠 → Optimizes UI updates (diffing & patching the real DOM).
𝘂𝘀𝗲𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 → Optimizes function references (avoids unnecessary re-renders in children).
⚡ Key takeaway: Both improve performance, but they tackle different bottlenecks. Don’t mix them up like I did! 😅 */

/*
React leverages the Virtual DOM to enhance performance through a series of optimizations that minimize direct manipulation of the actual DOM, which is typically slow and resource-intensive. Here’s how it works:

Virtual DOM Representation: React creates a lightweight copy of the actual DOM, known as the Virtual DOM. This representation is a JavaScript object that mirrors the structure of the real DOM.

Efficient Updates: When a component's state changes, React updates the Virtual DOM first instead of the real DOM. This allows React to batch updates and minimize the number of changes that need to be made to the actual DOM.

Diffing Algorithm: React uses a diffing algorithm to compare the previous Virtual DOM with the new one. It identifies what has changed by comparing the two representations. This process is efficient because it only checks the parts of the DOM that have changed, rather than re-rendering the entire DOM.

Reconciliation: After identifying the changes, React updates only the parts of the real DOM that need to be changed. This process is called reconciliation. By updating only the necessary elements, React reduces the number of direct manipulations of the DOM, which enhances performance.

Batching Updates: React can batch multiple state updates into a single re-render, further reducing the number of times the real DOM is updated. This is particularly useful in scenarios where multiple state changes occur in quick succession.

Optimized Rendering: React components can implement lifecycle methods like shouldComponentUpdate to control when a component re-renders, further improving performance.
*/

/*
Building a web app using React is considered efficient for several reasons:

Component-Based Architecture: React promotes a modular approach through reusable components. This allows developers to build encapsulated components that manage their own state, making it easier to develop, test, and maintain the application.

Virtual DOM: React's use of the Virtual DOM minimizes direct manipulation of the actual DOM, which is slow. By updating the Virtual DOM first and then efficiently reconciling changes with the real DOM, React enhances performance and responsiveness.

Declarative Syntax: React's declarative syntax allows developers to describe what the UI should look like for a given state. This makes the code more predictable and easier to debug, as the UI automatically updates when the underlying state changes.

Efficient Updates: React's diffing algorithm efficiently determines what has changed in the Virtual DOM and updates only those parts of the real DOM that need to be changed. This selective rendering reduces the overhead associated with full re-renders.

Strong Ecosystem: React has a rich ecosystem of libraries and tools (like React Router for routing, Redux for state management, and various UI component libraries) that streamline development and enhance functionality, allowing developers to build complex applications more efficiently.

Community and Support: With a large community and extensive documentation, developers can easily find resources, tutorials, and third-party libraries. This support accelerates the learning curve and problem-solving process.

Performance Optimization Features: React provides features like code splitting, lazy loading, and memoization (using React.memo and useCallback) that help optimize performance, especially in large applications.

Cross-Platform Development: React Native, a framework based on React, allows developers to build mobile applications using the same principles and components, enabling code reuse across web and mobile platforms.
*/
