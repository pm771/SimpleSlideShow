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

//window.onoload = function() {
	
	var imageElement = document.getElementById("image_box");
	var captionElement = document.getElementById("caption");
	
	var imageNo = Math.floor(Math.random()*images.length);
	displayImage();
	
	document.getElementById("left").addEventListener("click", moveLeft);
	document.getElementById("right").addEventListener("click", moveRight);
	
	function moveLeft() {
		// decrement image no
		 imageNo = (imageNo - 1 + images.length) % images.length;
		
		displayImage();
	}
	
	function moveRight() {
		// increment image no
		imageNo = (imageNo + 1) % images.length;
	
		displayImage();
	}
	
	function displayImage() {
		var imageFile = images[imageNo];
		var imageName = imageFile.split(".")[0];
		
		imageElement.src = "images/" + imageFile;
		imageElement.alt = imageName;
		imageElement.title=imageFile;
		captionElement.innerHTML = imageName;
	}
//}