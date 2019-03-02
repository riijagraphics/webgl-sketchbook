var img = document.getElementById('outputImg');
var imageName;
var step = 1;

var PATH_CIRCLE = "img/circle/";
var SIZE_CIRCLE = 100;
var COUNT_CIRCLE = 24;
var PATH_PIKACHU = "img/pikachu/";
var SIZE_PIKACHU = 200;
var COUNT_PIKACHU = 12;

main();

function main() {
	// Add event listeners for keydown and dropdown change
	window.addEventListener('keydown', onKeyDown);
	document.getElementById("imageSelect").addEventListener('change', function() {
		loadImage(true);
	});

	// Load first image
	loadImage(true);
}

function onKeyDown (e) {
	// When 'l' key was pressed, go one step back
	if (e.keyCode === 76) {
		if (step > 1) {
			step--;
		} else {
			step = maxCount;
		}

		loadImage(false);
	}

	// When 'r' key was pressed, go one step further
	if (e.keyCode === 82) {
		if (step < maxCount ) {
			step++;
		} else {
			step = 1;
		}

		loadImage(false);
	}
}

function loadImage(reset) {
	if (reset) {
		readDropdown();
	}

	// Set path and image count depending on the value set for the image name
	switch(imageName){
		case 'Circle':
			img.src = PATH_CIRCLE + "img" + step + ".svg";
			img.width = SIZE_CIRCLE;
			maxCount = COUNT_CIRCLE;
			break;
		case 'Pikachu':
			img.src = PATH_PIKACHU + "img" + step + ".png";
			img.width = SIZE_PIKACHU;
			maxCount = COUNT_PIKACHU;
			break;
	}
}

function readDropdown() {
	// Cache selected image name in global variable
	var dropdown = document.getElementById("imageSelect");
	imageName = dropdown.options[dropdown.selectedIndex].label;

	// Reset step to prevent different clip length problems
	step = 1;
}