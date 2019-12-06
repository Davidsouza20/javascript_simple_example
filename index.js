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


window.onload = async function() {
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "CLICK ME";   
    btn.onclick = () => {
        car = new Car('Fit', 'Honda', '950', 'gray');
        car.start();
        stringCar = JSON.stringify(car);
        alert(stringCar);
        alert('Car name: ' + car.name + ' Car model: ' + car.model + ' Car color: ' + car.color + ' Is Started: ' + car.started);
    }        
    document.body.appendChild(btn); 

    //JSON Stringfy and Parse Fluency evidence
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const myJson = await response.json();
    stringData = JSON.stringify(myJson);
    parsedData = JSON.parse(stringData);
    console.log(parsedData.title);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.moveTo(0, 0);
    context.lineTo(2000, 100);
    context.stroke();


}




