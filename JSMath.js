
//Math 1
function zero_negativity(x) {
	for(let i = 0; i < x.length; i++) {
		if(x[i] < 0) {
			return false;
		} else {
			continue;
		}
	return true;
	}
}
zero_negativity([1,2,3]);
zero_negativity([1,-2,3]);

//Math 2
function is_even(y) {
	if(y%2 == 0) {
		return true;
	} else {
		return false;
	}
}
is_even(4);
is_even(5);

//Math 3
function how_many_even(z) {
	let count = 0;
	for(let i=0; i < z.length; i++) {
		if(is_even(z[i]) === true) {
		count ++;
	} else {
		continue;
		}
	}
	return count;
}
how_many_even([1,2,3,4,5,6]);

//Math 4
function create_dummy_array(n) {
	let rando = [];
	for(let i = 0; i <= n-1; i++) {
		rando.push(Math.floor(Math.random() * 10));
	}
}
create_dummy_array(5);

//Math 5
function random_choice(arrr) {
	return arrr[Math.floor(Math.random() * arrr.length)];
}
random_choice([1,2,3,4,5,6]);
		