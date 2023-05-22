class BotaoTenteNovamente{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tente-novamente');
  }
  
 
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
    
  }
  
  _alteraCena(){
    this.botao.remove();
    window.location.reload();
    //document.location.reload(false);
   // somDoInicio.loop();
    
  }
}