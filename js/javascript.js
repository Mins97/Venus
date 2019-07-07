var imageArray=["img/1.png", "img/2.png", "img/3.png", "img/4.png"];
var imageArraySub=["img/11.png", "img/22.png", "img/33.png"];
var imageIndex=1;
var imageIndexSub=1;

function changeImage(){
	document.getElementById("mainImage").setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex=0;
	}
};

function changeImage2(){
	document.getElementById("subImage").setAttribute("src",imageArraySub[imageIndexSub]);
	imageIndexSub++;
	if(imageIndexSub>=imageArraySub.length){
		imageIndexSub=0;
	}
};
setInterval(changeImage,4000);
setInterval(changeImage2,5000);