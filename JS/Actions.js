class Actions {
  constructor(botaoAcao = null, countdown = 5){
    this.estadoInterno = 0;
    this.pause = false;
    this.botaoAcao = botaoAcao; // container (div) que vai "segurar" o botão
    this.countdown = countdown;

    // cria o botão uma vez
    if (this.botaoAcao) {
      this._btn = document.createElement("button");
      this._btn.type = "button";
      this._btn.className = "botao-inativo";
      this._btn.textContent = "Agir";
      this.botaoAcao.appendChild(this._btn);

      // listener no botão estável
      this._btn.addEventListener("click", () => this._onClick());
    }

    this.continue();
  }

  mudarEstado(){
    if(!this.pause){
      let id = ChamadorAcao.getAcaoAtual();
      this.estadoInterno = id;
      this.alterarBotao();
    }
  }

  continue(){
    setInterval(() => this.mudarEstado(), 80);
  }

  alterarBotao(){
    if(!this._btn) return;

    if(this.estadoInterno == 0){
      this._btn.textContent = "Agir";
      this._btn.className = "botao-inativo";
    } else if(this.estadoInterno == 1){
      this._btn.textContent = "Coletar";
      this._btn.className = "botao-ativo";
    } else if(this.estadoInterno == 2){
      this._btn.textContent = "Atacar";
      this._btn.className = "botao-ativo";
    }
  }

  _onClick(){
    if(this.estadoInterno == 1){
      coletarRecompensa();
    } else if(this.estadoInterno == 2){
      atacarTarget();
      this.pause = true;

      // altera texto durante espera sem recriar o botão
      this._btn.textContent = `Espere (${this.countdown}s)`;
      this._btn.className = "botao-inativo";
      let currentTime = 1;
      const tempoEspera = setInterval(() => {
        this._btn.textContent = `Espere (${this.countdown - currentTime}s)`;
        currentTime++;
        if(currentTime == this.countdown){
          this.pause = false;
          clearInterval(tempoEspera);
          this.alterarBotao(); // restaura texto conforme estado atual
        }
      }, 1000);
    }
  }
}


let acao = new Actions(document.getElementById("action-button"), 5);

function getAcao(){
    return acao;
}