class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite, velocidade, precisaoLargura, precisaoAltura){
    super(matriz, imagem, x, variacaoY, larguraSprite, alturaSprite)
    this.velocidade = velocidade;
    this.x = width;
    this.precisaoLargura = precisaoLargura;
    this.precisaoAltura = precisaoAltura;
  }
  
  move(){
    this.x = this.x - this.velocidade;
       
    }
  
  aparece(){
    this.x = width;
  }
}  