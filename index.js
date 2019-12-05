function changeBlue () {
    document.getElementById("change-from-js").style.backgroundColor = "blue";
}

class Car  {
    name
    model
    weight
    color
    started = false
    isDriving = false

    constructor(name, model, weight, color) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }

    start() {
        return this.started = true;
    }

    stop() {
        return this.started = false;
    }
}


window.onload = function() {
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "CLICK ME";   
    btn.onclick = () => {
        car = new Car('Fit', 'Honda', '950', 'gray');
        car.start();
        alert('Car name: ' + car.name + ' Car model: ' + car.model + ' Car color: ' + car.color + ' Is Started: ' + car.started);
    }        
    document.body.appendChild(btn); 
};




