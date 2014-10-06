/**
 *  Simple Slide Show
 *  Pure JavaScript
 */

var images = [
               "Chrysanthemum.jpg",
               "Desert.jpg",
               "Hydrangeas.jpg",
               "Jellyfish.jpg",
               "Koala.jpg",
               "Lighthouse.jpg",
               "Penguins.jpg",
               "Tulips.jpg"
             ]
var delay = 3000 // 3 sec

window.onload = function() {
	
	var imageElement = document.getElementById("image_box");
	var captionElement = document.getElementById("caption");
	
	var imageNo = Math.floor(Math.random()*images.length);
	var timeHandler = null;
	var auto; 
	document.getElementById("left").addEventListener("click", moveLeft);
	document.getElementById("right").addEventListener("click", manualRight);
	
	manualRight();
	
	function moveLeft() {
		// decrement image no
		 imageNo = (imageNo - 1 + images.length) % images.length;
		 
		displayImage();
		auto = false;
		resetTimer();
	}
	
	function moveRight() {
		// increment image no
		imageNo = (imageNo + 1) % images.length;
			
		displayImage();
		
		if( ! auto ) {
			resetTimer();
			auto = true;
		}
	}
	
	function displayImage() {
		var imageFile = images[imageNo];
		var imageName = imageFile.split(".")[0];						
		
		imageElement.src = "images/" + imageFile;
		imageElement.alt = imageName;
		imageElement.title=imageFile;
		captionElement.innerHTML = imageName;
	}
	
	function resetTimer() {
		if(timeHandler) {
			window.clearInterval(timeHandler);
		}
		timeHandler = window.setInterval(autoRight, delay);
	}
	
	function manualRight() {
		auto = false;
		moveRight();
		
	}
	
	function autoRight() {
		auto = true;
		moveRight();
	}
}