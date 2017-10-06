//Part I
function starString(x) {
	let stripe = "";
	for(let i = 0; i < x; i++){
		stripe += "*";
	}
	return stripe;
}

starString(8);

//Part II/III
function drawStars(arr) {
	let new_arr = [];
	for(let i = 0; i < arr.length; i++) {
		if(typeof arr[i] === "number") {
			new_arr.push(starString(arr[i]));
		}else if(typeof arr[i] === "string") {
			let new_str = "";
			for(let s = 0; s < arr[i].length; s++) {
				new_str += arr[i][0].toLowerCase();
			}
			new_arr.push(new_str);
		}
	}
	return new_arr;
}

let y = [4, 6, 1, 3, 5, 7, 25]
let z = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
        
console.log(drawStars(y));
console.log(drawStars(z));