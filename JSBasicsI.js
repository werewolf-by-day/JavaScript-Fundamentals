//Basic 1
/*  
var x = [];
console.log(x); //undefined
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x[1]); //dojo
*/

//Basic 2
/*
const y = [];
console.log(y); //undefined
y.push(88); //breaks-unable to change the value of a const once defined.
*/

//Basic 3
		
var z = [9,10,6,5,-1,20,13,2];
for(let i=0; i < z.length; i++) {
	console.log(z[i]);
}
for(let i=0; i < z.length-1; i++) {
	console.log(z[i]);
}
		

//Basic 4
/*
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(let i =0; i < names.length; i++) {
	console.log(names[i].length);
}
for(let i =0; i < names.length; i++) {
	if(names[i].length === 5) {
		console.log(names[i]);
	}
}
*/

//Basic 5
/*
function yell(string) {
	let loud = string.toUpperCase();
	return loud;
}
yell("hello world");		
*/