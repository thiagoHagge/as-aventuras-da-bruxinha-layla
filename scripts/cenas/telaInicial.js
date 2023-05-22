class TelaInicial {
  constructor(){
    this.tamanhoGato = 100;
    
  }
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
    this._bruxa();
    this._salem();
    
  }
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, 100);
    textSize(150);
    text('Layla', width / 2, 220);
    textSize(40);
    text('a bruxinha pulante', width / 2, 260);
  }
  
  _botao(){
    
    botaoGerenciador.y = height / 1.333;
    botaoGerenciador.draw();
  }
  
  _bruxa(){
    image(bruxa, width / 1.25, height / 7, 130, 130)
  }
  
  _salem(){
    image(salem, width / 2 - 50, height / 1.333 - 87, this.tamanhoGato, this.tamanhoGato)
  }
  
}