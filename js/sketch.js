/* var WidthRect = 70;
var heightRect = 70;
var particles = []; */

var c1 = function(p){

    var WidthRect = 70;
var heightRect = 70;

    p.setup = function() {
    p.cursor(CROSS,32,32)
    var canvas = createCanvas(80,80);
    canvas.parent('#sketch1');
    p.background(0)
    frameRate(fr);
        let fr = 165;
}

let colorPicker;
p.setup = function() {
    myColor =  p.createColorPicker(p.color(0));
  p.createCanvas(80, 80);
  colorPicker = p.createColorPicker('#ffffff');
  colorPicker.position(230, p.height);
  myColor.position(280, p.height);
  p.cursor(p.CROSS,32,32)
    var canvas = p.createCanvas(800,800);
    canvas.parent("sketch1");
    p.background(colorPicker.color());

//creates the button
  button = p.createButton('Press to Randomise Background');
  button.position(130, 120);
  button.mousePressed(changeBG)

  button = p.createButton('Press "Enter" to Clear Page');
  button.position(150, 180);

  button = p.createButton('Press "T" to Toggle Bubble Filter');
  button.position(120, 240);

  button = p.createButton('Press "C" to Capture');
  button.position(175, 300);
}

p.draw = function(){
    if(p.mouseIsPressed === true){
        p.fill(myColor.color());

        if (shape === "circle"){
            p.ellipseMode(p.CENTER)
            p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);
        }

        else if (shape === "square"){
            p.rectMode(p.CENTER)
            p.rect(p.mouseX, p.mouseY, WidthRect, heightRect );
        }
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        
    }
}

p.mousePressed = function() {
    if(p.mouseButton == p.LEFT){
    p.noStroke()
    shape = document.getElementById("shape").value;
    p.fill(myColor.color());
    console.log(shape);
    
    if (shape === "circle"){
        p.ellipseMode(p.CENTER)
        p.ellipse(p.mouseX, p.mouseY,WidthRect, heightRect);
    }
    else if (shape === "square"){
        p.rectMode(p.CENTER)
        p.rect(p.mouseX, p.mouseY, WidthRect, heightRect);
    }
    // p.ellipseMode(p.CENTER)
    // p.ellipse(p.mouseX, p.mouseY, WidthRect, heightRect);
    }
   
}

function screenShot(){
    html2canvas(document.querySelector("#canvasDiv")).then(canvas => {
        var dataURL = canvas.toDataURL( "image/png" );
        var data = atob( dataURL.substring( "data:image/png;base64,".length ) ),
            asArray = new Uint8Array(data.length);

        for( var i = 0, len = data.length; i < len; ++i ) {
            asArray[i] = data.charCodeAt(i);    
        }

        var blob = new Blob( [ asArray.buffer ], {type: "image/png"} );
        saveAs(blob, "photo.png");
    });
}

p.keyPressed = function() {
    if(p.keyCode == p.ENTER){
        p.background(colorPicker.color());
    }
    if(p.key === 'c'){
        screenShot();

    }

    if(p.key === 'n'){
    //    delete sketch1 and sketch2

        
        document.getElementById("sketch1").remove();
        document.getElementById("sketch2").remove();

        var sketch1 = new p5(c1);

        var sketch2 = new p5(c2);

    }

        // p.saveCanvas(canvases, 'canvas', 'jpg');
    
    if(p.key === 't'){
        let sketch2 = document.getElementById("sketch2");
        if (sketch2.style.display === "none") {
            sketch2.style.display = "block";
          }
        else {
            sketch2.style.display = "none";
        }
    }
}
//changes the background colour
function changeBG() {
    let val = p.random(255);
    p.background(val);
  }
}

//Drawing Canvas
var c2 = function(p){
    p.setup = function() {
        var canvas = p.createCanvas(800,800);
        shape = document.getElementById("shape").value;
        canvas.parent('#sketch2');   
        p.colorMode(p.HSB);

        console.log(`shape: ${shape}`)

        if (shape === "circle"){
            for(var i = 0; i < 500; i++){
                p.circles();  
            }
        }
        else if (shape === "square"){
            for(var i = 0; i < 500; i++){
                p.squares();  
            }
        }
        else if (shape === "triangle"){
            for(var i = 0; i < 500; i++){
                p.triangles();  
            }
        }
    }
    
    // p.draw = function() {
    // }
    
    p.circles = function() {
        var x = p.random(p.width);
        var y = p.random (p.height);
        var d = p.random(5, 150);
        var hue = p.random(110, 255)
        p.noStroke();
        p.fill(hue, 255, 255, 0.1);
        p.circle(x, y, d);
    }

    p.squares = function() {

        var x = p.random(p.width);
        var y = p.random (p.height);
        var d = p.random(5, 150);
        var hue = p.random(110, 255)
        p.noStroke();
        p.fill(hue, 255, 255, 0.1);
        p.square(x, y, d);
    }

}

let sketch1 = new p5(c1);

let sketch2 = new p5(c2);