/**
 * Created by sophiasi on 9/13/17.
 */
var img_json;
var currentSession;
session1 = [1,2,3,4,5,6,7,8,9]

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    doc = document.documentElement;
    body = document.body;
    console.log(event.clientX + " " + event.clientY);
}

function nextImg() {
    currentSession
}



$.getJSON("./json/img_json.json", function(json) {
    img_json = json;
    console.log(img_json);
    // for (i = 0; i < 66; i++) {
    //     console.log(json[i])
    // }
    console.log(img_json[0])
    document.getElementById("box").style.backgroundImage = "url(" + img_json[0] + ")";
    document.getElementById("box").style.backgroundSize = "1350px";
    currentSession = session1;
});






