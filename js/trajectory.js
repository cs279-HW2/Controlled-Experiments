/**
 * Created by sophiasi on 9/13/17.
 */

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    doc = document.documentElement;
    body = document.body;
    console.log(event.clientX + " " + event.clientY);
}