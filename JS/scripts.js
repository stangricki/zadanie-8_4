
var a = " ";
var b = "#";
var size = 40
var board ="";

for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
		if ((x+y) % 2 == 0) {
			board += a;
		}
		else {
			board += b;
		}
	}
	board +="\n"
}	

console.log (board);