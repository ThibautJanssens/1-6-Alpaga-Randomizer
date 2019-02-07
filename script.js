
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
import images from "./images/*.jpg";

let nbrImg = countKeys(images);

//create a array with all the keys from the object, then get the length of this arr.
function countKeys(obj) {
  return Object.keys(obj).length;
}

//load pictures on the as the page load
window.addEventListener("load", ()=>{
	showImage();
});

// randomize array
function randomizer(arr){
	let index, index2, value;
	for (index = nbrImg-1; index > 0; index--) {
    index2 = Math.floor(Math.random() * (index-1))+1;
		value = arr["alpaga"+index];
		arr["alpaga"+index] = arr["alpaga"+index2];
		arr["alpaga"+index2] = value;
	}
	return arr;
}

//adding all pictures in array in the HTML
function showImage() {
	let toAdd = "";
	for (let i = 1; i < nbrImg; i++) {
		toAdd += "<img src='"+images["alpaga"+i]+"'/>"
	}
	document.querySelector("#AlpagaImg").innerHTML = toAdd;
}

//Deleting all pictures on the HTML 
function deleteImage(){
	let cuteImg = document.querySelector('#AlpagaImg');

	while (cuteImg.firstChild) {
		cuteImg.removeChild(cuteImg.firstChild);
	};
}

//when click, randomize array, delete all elements on the page, then print the new array
document.querySelector("#btn").addEventListener("click", () => {
	randomizer(images);
	deleteImage();
	showImage();
});