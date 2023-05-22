class Jogo {
  constructor() {
    this.indice = 0;
    this.inimigoAtual = 0;
    this.mapa = fita.mapa;
    
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 10, 220, 270);
    
    

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 20, 10, 104, 104, 10, 0.6, 0.7);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 20, -10, 400, 400, 9, 0.7, 0.3);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 20, 200 * 0.8, 200, 150, 13, 0.6, 0.7);

  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (keyCode == 32) {
     personagem.pula();
    }
  }
  


  draw() {
    cenario.exibe();
    cenario.move();
    pontuacao.exibe();
    pontuacao.adicionaPonto();
    vida.draw();
    

    personagem.exibe();
    personagem.aplicaGravidade();


    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigoVem];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();
    inimigo.velocidade = linhaAtual.velocidade;

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
        inimigo.velocidade = inimigo.velocidade + 50;
      }
      
    }
    if (personagem.colidiu(inimigo)) {
      personagem.ficaInvencivel();
      
      vida.perdeVida();
      
    }
  }
  
  _tenteNovamente(){
    botaoTenteNovamente = new BotaoTenteNovamente('Tente Novamente', width / 2 - 200, height / 1.7);
    botaoTenteNovamente.draw();
    
  }
}