function preload() {
  // put preload code here
}

function setup() {
  createCanvas(600, 700);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
  background(255, 10, 180);
  noStroke();

  // OMBRA TAZZA
  fill(200, 0, 155, 150); 
  ellipse(300, 430, 260, 30);

  // VAPORE
  // SX
  fill(255, 255, 255, 90);  ellipse(245, 190, 25, 25);
  fill(255, 255, 255, 60);  ellipse(260, 150, 20, 20);
  fill(255, 255, 255, 30);  ellipse(255, 110, 12, 12);
  // CX
  fill(255, 255, 255, 100); ellipse(300, 180, 30, 30);
  fill(255, 255, 255, 70);  ellipse(310, 130, 22, 22);
  fill(255, 255, 255, 45);  ellipse(305, 90, 15, 15);
  // DX
  fill(255, 255, 255, 90);  ellipse(345, 190, 25, 25);
  fill(255, 255, 255, 60);  ellipse(360, 150, 18, 18);
  fill(255, 255, 255, 30);  ellipse(355, 110, 12, 12);

  // MANICO TAZZA
   fill(255, 255, 255); 
  ellipse(410, 330, 90, 90);
  fill(255, 10, 180); // FORO 
  ellipse(410, 330, 50, 50)

  // TAZZA
  fill(255, 255, 255); 
  rect(190, 250, 220, 180, 0, 0, 40, 40);
  
  // CIOCCOLATA CALDA
  fill(139, 69, 19); 
  ellipse(300, 250, 220, 40);

   // MARSHMALLOWS
   // SX
  fill(210, 210, 210);        // OMBRA
  rect(230, 238, 40, 22, 8); 
  fill(255, 255, 255);        // BIANCO
  rect(230, 235, 40, 22, 8); 
  
  // DX
  fill(210, 210, 210);        // OMBRA
  rect(320, 241, 45, 24, 8); 
  fill(255, 255, 255);        // BIANCO
  rect(320, 238, 45, 24, 8); 
  
  // CX
  fill(210, 210, 210);        // OMBRA
  rect(280, 233, 35, 20, 8); 
  fill(255, 255, 255);        // BIANCO
  rect(280, 230, 35, 20, 8); 
}

