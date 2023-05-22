function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 1.25, height / 2);
  
  
  jogo.setup();
  telaInicial.setup;
  cenas = {
    jogo,
    telaInicial
  };
  
  frameRate(40);
  
  if(cenaAtual === 'telaInicial'){
    somDoInicio.loop();
  }
  
  
}

function keyPressed() {
  jogo.keyPressed(key);
  

}


function draw() {
  cenas[cenaAtual].draw();
/*  if(mouseIsPressed){
    personagem.pula();
  }*/
  
  }
  
function touchStarted() {
  click = false;
  event.code = 'Touch';
  if (cenaAtual === 'jogo')
    personagem.pula();
}

function mousePressed() {
  if (click) {
    if (cenaAtual === 'jogo')
      personagem.pula();
  }
}
