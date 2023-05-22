class Vida {
  constructor(maximo, inicial){
  this.maximo = maximo;
  this.inicial = inicial;
  
  this.vida = this.inicial;
  this.largura = 50;
  this.altura = 50;
  this.y = 10;
  }
  
  draw(){
    for(let i = 0; i < this.vida ;i++){
      const margem = 20 * (i + 1);
      const posicao = i * 50;
      image(imagemVida, width - 200 - margem - posicao, this.y, this.largura, this.altura)
  
    }
  }
  
  ganhaVida(){
    if(this.vida < this.maximo){
      this.vida++;
    }
  }
  
  
  perdeVida(){
    this.vida--;
    if(this.vida == 0){
      somDoJogo.stop();
      image(imagemGameOver, width / 2 - 200, height / 3.5);
      jogo._tenteNovamente();
      noLoop();
    }
  }
}