function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("orange"); // cor de fundo laranja
  fill("blue"); // cor do rosto azul
  circle(200, 200, 300); // rosto
  fill("white"); // cor globo ocular
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 270); // boca
  fill("red"); // cor do nariz vermelho
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(121, 107, 172, 105); // sobrancelha esquerda
  line(231, 104, 280, 105); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  // circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); //nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
