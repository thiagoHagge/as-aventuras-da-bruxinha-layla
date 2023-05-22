class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite)
    this.piso = height - this.altura - this.variacaoY;
    this.velocidadePulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -40
    this.pulos = 0;
    this.invencivel = false;
    
  }
  
  pula(){
    this.pulos++;
    if(this.pulos < 3){
      this.velocidadePulo = this.alturaDoPulo;
      somDoPulo.play();
    }
  
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.piso){
      this.y = this.piso;
      this.velocidadePulo = 0;
      this.pulos = 0;
    }
    
  }
  
  ficaInvencivel(){
  this.invencivel = true;
    setTimeout(() => {this.invencivel = false;}, 1000);
  }
  
  
  colidiu(inimigo) {
    
    if(this.invencivel){return false;}
    
   
    /*noFill();
    rect(this.x, this.y, this.largura * inimigo.precisaoLargura, this.altura * inimigo.precisaoAltura);
    rect(inimigo.x, inimigo.y, inimigo.largura * inimigo.precisaoLargura, inimigo.altura * inimigo.precisaoAltura);*/
    
    const colisao = collideRectRect(this.x, this.y, this.largura * inimigo.precisaoLargura, this.altura * inimigo.precisaoAltura, inimigo.x, inimigo.y, inimigo.largura * inimigo.precisaoLargura, inimigo.altura * inimigo.precisaoAltura);
    return colisao;
    
  }
  
  
    
}
