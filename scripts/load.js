function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  salem = loadImage('imagens/assets/salem.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/cereja.png');
  bruxa = loadImage('imagens/assets/bruxa.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json')
  somDoInicio = loadSound('sons/sonoplastia.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}