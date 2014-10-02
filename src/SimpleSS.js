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

window.onoload = function() {
	var imageElement = document.getElementById("Single Image")
	var captionElement = document.getElementById("caption")
	
	var imageNo = Math.random()*images.length;
	displayImage();
	
	document.getElementById("left").addEventListener("click", moveLeft, useCapture);
	document.getElementById("right").addEventListener("click", moveRight, useCapture);
	
	function moveLeft() {
		// decrement image no
		
		
		displayImage();
	}
	
	function moveRight() {
		// increment image no
	
		displayimage();
	}
	
	function displayImage() {
		var imageFile = images[imageNo];
		var imageName = imageFile.split(".")[0];
		
		imageElement.src = "../images/" + imageName;
		imageElement.alt = imageName;
		captionElement.innerHTML = imageName;
	}
}