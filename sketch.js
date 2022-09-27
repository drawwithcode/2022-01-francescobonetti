function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER)
  noFill()  
}


function draw() {

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
  }

  windowResized();
  
  translate(width/2, height/2);
  background(0);

  //Crea un array vuoto che conterrà i cerchi
  let Myellipse = []
  
  
  //Crea una serie di cerchi concentrici dall'interno verso l'esterno, in modo che i cerchi più piccoli siano sotto a quelli più grandi (perchè scritti dopo)
  for(let radius = 10; radius <=width; radius= radius*1.2) {
  
    //Crea una nuova variabile che viene aggiunta all'Array, cambiandone la lunghezza
    let Newellipse;
    Myellipse.push(Newellipse);
    
    //Crea una variabile colore che vari in base al tempo e all'ellisse a cui si riferisce
    let MyColor = lerpColor(color(20), color(255), sin(frameCount/10+Myellipse.length/6));

    //Crea una variabile che determini se un cerchio è in posizione pari o dispari e cambia il colore del cerchio di conseguenza
    
    let OddorEven = Myellipse.length % 2;
          if (OddorEven == 1) {
          stroke(MyColor)} else {stroke(0)}
    
    //Crea un cerchio
    strokeWeight(radius/5)
    ellipse(lerp(mouseX-(width/2), 0, Myellipse.length/27), lerp(mouseY-(height/2), 0, Myellipse.length/27), radius)
    }
  }
