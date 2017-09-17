/**
 * Created by sophiasi on 9/13/17.
 */
var img_json;
var currentSession;
session1 = [1,2,3,4,5,6,7,8,9]

/*

HU: it seems like we cannot move the mouse pointer to a specific position. (Stackoverflow told me). So I decide to start tracing when the user click on Next button, and stop tracing when the user click on Female or Male button. 
For Details, please see onclock.js

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    doc = document.documentElement;
    body = document.body;
    console.log(event.clientX + " " + event.clientY);
}
*/

// HU: for changing images, I wrote a different functions in onclick.js file.....
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






