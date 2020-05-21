function getCircumference(){
    var diameter = parseInt(document.getElementById("diameter").value);
    var radius = diameter/2;
    var pi = Math.PI;
    var circumference = 2*pi*radius;
    var round = Math.round(circumference)


    document.getElementById('answer').innerHTML = "Result: " + circumference + "<br>" + "Round: " + round;
    alert('fuck yeah...\n get those calulations son')
};
