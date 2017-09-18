//var images = document.getElementsByTagName('img');
var img_json;
var traject = [];
var trajectAgg = {}
$.getJSON("./json/img_json.json", function(json) {
	console.log(json);
    img_json = json;
});

var buttonfemale = document.getElementById('buttonfemale');
var buttonmale = document.getElementById('buttonmale');
var buttonnext = document.getElementById('buttonnext');
var index = 1000;
// array to store images
var images_list = [];

/*
// input images array
for (var i = 0; i < images.length; i++) {
	images_list[i] = images[i];
	var currentImage = images_list[i];
	// setup initial zIndex
	// positive number is closer
	currentImage.style.zIndex = -i;
}
*/
function handleMouseMove(event) {
    doc = document.documentElement;
    body = document.body;
    console.log(event.clientX + " " + event.clientY);
    traject.push({x: event.clientX, y: event.clientY});
}

function handleMouseMoveEnd(event) {
	// stop tracing
}

// setup count
var count = 0;
//click on next button, change pic and start tracing
buttonnext.onclick = function(){
	/*
	var showFirst = images_list.shift();
	// setup new zIndex
	showFirst.style.zIndex = - index + count;
	images_list.push(showFirst);
	*/
    trajectAgg = {};
    traject =[];
	console.log(count);
	document.getElementById("box").style.backgroundImage = "url(" + img_json[count] + ")";
	console.log(img_json[count]);
    document.getElementById("box").style.backgroundSize = "900px";
    document.getElementById("box").style.backgroundPosition = "center";
    document.getElementById("box").style.backgroundRepeat = "no-repeat";
	count++;

	document.onmousemove = handleMouseMove;
}


localStorage.setItem("XU", "SI");

//click on female or male button, stop tracing
buttonfemale.onclick = function(){
	document.onmousemove = handleMouseMoveEnd;

    trajectAgg["xy"] = traject;
    console.log(traject);
	console.log(trajectAgg);
	console.log('traject' + count);
    localStorage.setItem('traject' + count, JSON.stringify(trajectAgg));
}

buttonmale.onclick = function(){
	document.onmousemove = handleMouseMoveEnd;
}