// 1. 
// function summ(x, y) {
	// return x + y;
// }

// console.log(summ(25, 10));
// console.log(summ(15, -50));
// console.log(summ(-10, 10.1));

// ************************************************
// 2. 
// function isPositive(x) {
	// return (typeof(x) === "number" && x > 0)
// }

// console.log(isPositive(25));
// console.log(isPositive("25"));
// console.log(isPositive(0));
// console.log(isPositive(-1));
// console.log(isPositive(0.1));

// ************************************************
// 3. 
// function toBoolean (x) {
	// return (!!x);
// }

// console.log(toBoolean(1));
// console.log(toBoolean(0));
// console.log(toBoolean("as"));
// console.log(toBoolean(""));
// console.log(toBoolean(null));
// console.log(toBoolean([]));
// console.log(toBoolean(undefined));

// ************************************************

// function greeting(name) {
	
	
	// if(typeof(name)=== "string" && name != ""){
	
		// return ("Hello, " + name);
	// }else {
		// return ("Wrong name!");
	// }
// }


// console.log(greeting("Sam"));


// ************************************************

// function square(x) {
	
	
	// if(typeof(x)=== "number"){
	
		// return ("Square x = " + x*x);
	// }else {
		// return ("Wrong x!");
	// }
// }


// console.log(square(2));
// console.log(square(""));
// console.log(square(null));
// console.log(square(0));
// console.log(square(-5));

// ************************************************
// ??????????????????????????????????????????????
// function powerOrNot(x) {
	
	// if(!x%2){
		// return x*x;
	// }
	// else if (!x%3) {
		// return x*x*x;
	// }
	// else {
		// return x;
	// }
// }

// console.log(powerOrNot(2));
// console.log(powerOrNot(3));
// console.log(powerOrNot(6));
// console.log(powerOrNot(5));

// вариант с тернарным оператором return x%2 == 0 ? x*x : x%3 == 0 ? x*x*x : x;
// ************************************************

// function getType(x) {
	// if(x != null && typeof(x) != "object") {
	// switch (typeof(x)) {
		// case "number":
			// return "number";
			// break;
		// case "string":
			// return "string";
			// break;
		// case "boolean":
			// return "boolean";
			// break;			
	// }
	// }else (x === null) {
		// return "null";
	// }
		// return "array";
// }

// console.log(getType(null));

// ************************************************

// function isTruePrimitive(x) {
	// if(typeof(x) != "object") {
		// return true;
	// }
	// return false;
// }

// console.log(isTruePrimitive("true"));

function isTruePrimitive(x) {
	return typeof(x) !== "object" && typeof(x) !== "function"  && !!x {

console.log(isTruePrimitive(""));
console.log(isTruePrimitive("tue"));
console.log(isTruePrimitive({}));
console.log(isTruePrimitive([]));
console.log(isTruePrimitive(function()));
console.log(isTruePrimitive(25));
console.log(isTruePrimitive(0));
console.log(isTruePrimitive(null));
console.log(isTruePrimitive(undefined));
console.log(isTruePrimitive(NaN));

// ************************************************

// x1,y1; x2,y2;
// L1 = sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) // вычисление длины первой стороны треугольника

// L1 = sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)) // вычисление длины второй стороны треугольника

// c = sqr(a*a + b*b)=
// =(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(sqr((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

// + (sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(sqr((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))

function getLenthOfHyp(x1, x2, x3, x4, y1, y2, y3, y4) {
	return (Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))*(Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))) + 

+ (Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)))*(Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4)));
}

// две точки должны быть с равными координатами: x1,x4 = 0, y1,y4 = 0; x2 = 5, y2 = 0; x3 = 0, y3 = 3.

console.log(getLenthOfHyp(0,5,0,0,0,0,3,0));
console.log(getLenthOfHyp());

// Math.pow - возведение в квадрат

// ************************************************

// function getLenthOfHyp(x1, x2, x3, x4, y1, y2, y3, y4) {
	// return (Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2)))*(Math.sqrt(Math.pow(x1-x2) + Math.pow(y1-y2))) + 

// + (Math.sqrt(Math.pow(x3-x4) + Math.pow(y3-y4)))*(Math.sqrt(Math.pow(x3-x4) + Math.pow(y3-y4)));
// }

// 




























