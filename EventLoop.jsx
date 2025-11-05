//JS questions

console.log(a); // undefined because var is hoisted
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization because let is hoisted but in temporal dead zone
let b = 20;

//--------------------------------

const c = "10";
const d = 10;
console.log("c == d", c == d); // true because == does type coercion
console.log("c === d", c === d); // false because === does not do type coercion

for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000); // prints 3,3,3 because var is function scoped to print 1,2,3 we need
	//  to replace var with let because var references the same i
}
for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1000); // prints 0,1,2
}

const obj = {
	a: 42,
	regular() {
		console.log(this.a);
	},
	arrow: () => console.log(this.a),
};
console.log("regular", obj.regular()); // 42 because this refers to obj in normal functions
console.log("arrow", obj.arrow()); // undefined because  arrow function dont bind with this as they use lexical scope here it is
// global scope

const arr = [1, 2, 3];
arr.push(4); // arr defined with const but we can modify the contents of the array
console.log("arr", arr); // [1,2,3,4]
const obj1 = {
	name: "aaish",
};
obj1.name = "nang"; // obj1 defined with const but we can modify the properties of the object
console.log("obj1", obj1); // {name: "nang"}

const [a1, b1, c1, d1] = [2, 3, 4, 5];
console.log("a1,b1,c1,d1", a1, b1, c1, d1); // 2 3 4 5
const user = {
	name: "sai",
	age: 24,
};
const { name: username, age: userAge } = user;
console.log("username,userAge", username, userAge); // sai 24

//spread opeartor
const arr3 = [1, 2, 3];
const copy = [...arr3]; // creates a shallow copy of arr3
console.log("copy", copy); // [1,2,3]

// async/await with error handling
async function test() {
	try {
		let res = await Promise.reject("error");
		console.log("res", res);
	} catch (err) {
		console.log("Caught:", err); // err error
	}
}
test(); //Caught: error

//object reference
const objA = { value: 10 };
const objB = objA;
objB.value = 20;
console.log("objA.value", objA.value); // 20 because objA and objB reference the same object
// --------------------------- EVENT LOOP QUESTIONS -------------------------------

/* 
console.log('A');
setTimeout(()=> console.log("B"),0);
Promise.resolve().then(()=> console.log("C"));
console.log("D")
*/
// A D C B

/*
Promise.resolve().then(()=> {
	console.log("A");
	Promise.resolve().then(()=> console.log("B"));
})
	Promise.resolve().then(()=> console.log("C"));
*/
// A C B - first promise runs , then before the nested one runs the C promise gets executed.

/*
async function test(){
console.log("A");
await Promise.resolve();
console.log("B")
}

test();
console.log("C")
setTimeout(()=> console.log("D"))
*/
// A C B D - a runs, by the time await is scheduled as a microtask and then goes to C , then consoles microtask and finally the macrotask.

/*
setTimeout(()=> console.log("timeout"), 0);
setImmediate(()=> console.log("immediate"))
*/
// immediate timeout -- setImmediate executes before timeout

/*
console.log("A") -- 1
process.nextTick(()=> console.log("B"));---3
Promise.resolve().then(()=> console.log("C"))---4
console.log("D") --2 
*/
// A D B C - process.nextTick is prioritized before promise microtask

/*
setTimeout(()=> { -- macro
	console.log("1")
	Promise.resolve().then(()=> console.log("2"))
},0);
Promise.resolve().then(()=>{ -- 1st micro
	console.log("3")
	setTimeout(()=> console.log("4"),0)
	
})
console.log("5")
*/
// 5 3 1 2 4

/*
function loop(){
Promise.resolve().then(loop)
}

loop();
console.log("A")

// prints A , then goes into infinite microtask loop
*/

/*
console.log("A")
let count = 0;

let id = setInterval(()=>{
console.log("B");
count++;
if(count===1){
clearInterval(id);
}
},0)
setTimeout(()=> console.log("C"),0);

Promise.resolve().then(()=> console.log("D"));
console.log("E")

// A E D C B -- setTimeout before interval. and after executing the interval is cleared as count becomes 1

*/

export const EventLoop = () => {
	return <div>Event Loop Component</div>;
};
