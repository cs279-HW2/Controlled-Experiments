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
var sessionStartTime;
var sessionEndTime;

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
    var d = new Date();

	/*
	var showFirst = images_list.shift();
	// setup new zIndex
	showFirst.style.zIndex = - index + count;
	images_list.push(showFirst);
	*/
    var morph, gender, food, num;
    trajectAgg = {};
    traject =[];
    if((count!=0) && (count!=12) && (count!=24) && (count!=36) && (count!=48) && (count!=60) && (count!=72)) {
        $(buttonnext).attr("disabled", "disabled");
        document.onmousemove = handleMouseMove;
    }
	//console.log(count);
	document.getElementById("box").style.backgroundImage = "url(" + img_json[count] + ")";

    if((count!=0) && (count!=12) && (count!=24) && (count!=36) && (count!=48) && (count!=60) && (count!=72)) {
        sessionStartTime  = d.getTime();
        console.log("starting time.... " + sessionStartTime);
        //console.log(img_json[count].substring(6, 13));
        var infoArray = img_json[count].substring(6, 13).split("-");
        trajectAgg["food"] = infoArray[0];
        trajectAgg["num"] = infoArray[1];
        trajectAgg["gender"] = infoArray[2];
        trajectAgg["morph"] = infoArray[3];

    }
    //console.log(infoArray[0]);


    console.log(img_json[count]);
    document.getElementById("box").style.backgroundSize = "900px";
    document.getElementById("box").style.backgroundPosition = "center";
    document.getElementById("box").style.backgroundRepeat = "no-repeat";
    count++;

}


localStorage.setItem("XU", "SI");

//click on female or male button, stop tracing
buttonfemale.onclick = function(){
    var d = new Date();
    sessionEndTime  = d.getTime();
    console.log("ending time.... " + sessionEndTime);
    $(buttonnext).removeAttr("disabled");
	document.onmousemove = handleMouseMoveEnd;

    trajectAgg["xy"] = traject;
    console.log(traject);
	console.log(trajectAgg);
	console.log('traject' + count);
	console.log('Time:' + (sessionEndTime - sessionStartTime));
	trajectAgg["time"] = (sessionEndTime - sessionStartTime);
    localStorage.setItem('traject' + count, JSON.stringify(trajectAgg));
}

buttonmale.onclick = function(){
    var d = new Date();
    sessionEndTime  = d.getTime();
    console.log("ending time.... " + sessionEndTime);
    $(buttonnext).removeAttr("disabled");
    document.onmousemove = handleMouseMoveEnd;

    trajectAgg["xy"] = traject;
    console.log(traject);
    console.log(trajectAgg);
    console.log('traject' + count);
    console.log('Time:' + (sessionEndTime - sessionStartTime));
    trajectAgg["time"] = (sessionEndTime - sessionStartTime);
    localStorage.setItem('traject' + count, JSON.stringify(trajectAgg));
}