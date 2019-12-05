function changeBlue () {
    document.getElementById("change-from-js").style.backgroundColor = "blue";
}

window.onload = function() {
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "CLICK ME";                 
    document.body.appendChild(btn); 
};
