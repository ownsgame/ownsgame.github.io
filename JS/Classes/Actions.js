class Actions {
  constructor(botaoAcao = null, countdown = 5){
    this.estadoInterno = 0;
    this.pause = false;
    this.botaoAcao = botaoAcao;
    this.countdown = countdown;

    if (this.botaoAcao) {
      this._btn = document.createElement("button");
      this._btn.type = "button";
      this._btn.className = "botao-inativo";
      this._btn.textContent = "Agir";
      this.botaoAcao.appendChild(this._btn);

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

    if(this.pause){
      return;
    }
    
    if(this.estadoInterno == 1){
      coletarRecompensa();
    } else if(this.estadoInterno == 2){
      atacarTarget();
      this.pause = true;

      this._btn.textContent = `Espere (${this.countdown - 1}s)`;
      this._btn.className = "botao-inativo";
      let currentTime = 1;
      const tempoEspera = setInterval(() => {
        this._btn.textContent = `Espere (${this.countdown - currentTime - 1}s)`;
        currentTime++;
        if(currentTime == this.countdown){
          this.pause = false;
          clearInterval(tempoEspera);
          this.alterarBotao(); 
        }
      }, 1000);
    }
  }
}


let acao = new Actions(document.getElementById("action-button"), 5);

function getAcao(){
    return acao;
}