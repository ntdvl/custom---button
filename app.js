function arttir() {

	var x = document.getElementById('test').value;

	var y = parseInt(x, 10);

	x = isNaN(x) ? 0 : x;

	x++;

	x = document.getElementById('test').value;

}