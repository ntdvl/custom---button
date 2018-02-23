function arttir() {

	var x = document.getElementById('test').value;

	var y = parseInt(x, 10);

	x = isNaN(x) ? 0 : x;

	x++;

	document.getElementById('test').value = x;

}

function eksilt() {

	var q = document.getElementById('test').value;

	var t = parseInt(q, 10);

	q = isNaN(q) ? 0 : q;

	q--;

	document.getElementById('test').value = q;

}