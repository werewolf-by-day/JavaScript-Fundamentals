
function magic_multiply(x, y) {
	if(Array.isArray(x) === true) {
		let z = [];
		for(let i = 0; i < x.length; i++) {
			z.push(x[i] * y)}
		}else if(typeof x === "string") {
			let z = "";
			for(let i = 1; i <= y; i++) {
				z += x;
			}
		}else{
	let z = x * y;
	return z;
	}	
}

magic_multiply(5,2)
		