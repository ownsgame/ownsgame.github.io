
function mostrarSaves(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-comum animated-aparecer">Selecione seu Save...</h1>
        <div class="saves-conteiner">
    `;

    for(let i = 0; i < 3; i ++){
        if(saves[i] == null){
            stringHTML +=`
                <button class="empty animated-aparecer" onclick="createSaveAt(${i})">
                    <i class="fa-solid fa-floppy-disk"></i> Novo Save
                </button>
            `;
        }
        else{
            const SAVE = saves[i];
            stringHTML +=
            `
                <div class="save-conteiner pointer animated-aparecer" onclick="jogar(${i})">
                    <h2 class="fonte-comum">${i + 1} - ${saves[i].nome}</h2>
                    <button onclick="deletar(event, ${i})" class="red-button">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        }
    }

    stringHTML += 
    `
        </div>
        <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;
    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function fecharTelaPrincipal(){
    const TELA = document.getElementById("index-popup");
    fecharTela("index-popup");
    blurBoxClose();
}

function mostrarOpcoes(saves){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="animated-aparecer fonte-comum">Configurar</h1>
        <div class="column-buttons animated-buttons">
    `;

    stringHTML += 
    `
            <p class="animated-aparecer fonte-comum">Opções como configurar <b>Som, Apresentação de Salas e demais</b> viram em breve....</p>
            <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>
    `;
    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function mostrarSobre(){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-comum animated-aparecer">Sobre</h1>
        <p class="texto-padrão"><b>Versão:</b> Teste 1.0.0</p>
        <p class="texto-padrão">
            <i>Owns é um jogo onde mundo carrega o destino de um herói
            à uma possível catastrofe. Será que no fim deixarás ela acontecer?</i> <br>
            <b>Feito por:</b> 
            <a href="https://github.com/SamuelDevelop" target="_blank"><b>@SamuelDevelop</b></a> <i class="fa-brands fa-github"></i>
         - 2025/26 Projeto Pessoal</p>
        <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;

    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function tutorial(){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="fonte-comum animated-aparecer">Sobre o Tutorial</h1>
        <p class="texto-padrão">
            Como deve ter dado pra perceber eu não coloquei um tutorial aí isso porquê vocês são meus testadores
            vão tentar descobrir as mecânicas/estrategias (falando assim até parece que é muita coisa, ou muito complexo),
            para ver como tá essa experiencia da descoberta, mas depois eu pretendo botar um tutorialzinho, embora a fase do Reino dos Espelhos meio que já seja um tutorial.
        </p>

        <button class="animated-aparecer red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;

    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}

function mostrarAcesso(){
    const TELA = document.getElementById("index-popup");

    let stringHTML = 
    `
        <h1 class="animated-aparecer fonte-comum">Versão de Teste</h1>
        <div class="animated-aparecer over-flow txt-left">
    `;

    stringHTML += 
    `
            <h2 class="animated-aparecer fonte-comum tx-yellow">Bem Vindo ao Acesso Antecipado:</h2>
            <p class="fonte-comum">
                Olá meu Betinha! Parabéns por estar aqui, isso significa que você foi escolhido pelo Samuel
                para poder testar de ante mão o Goty de 2016, ou seja ele te considera uma pessoa muito maneira para tal experimento!!!
            </p>
            <h2 class="animated-aparecer fonte-comum tx-yellow">O que está pronto?</h2>
            <p class="fonte-comum">
                O jogo obviamente está bem longe de estar pronto então, podemos esperar muitos bugs...
                falhas ou problemas de mecânicas e etc... e é por isso que você está aqui!
                <br>
                <br>
                <i class="fa-solid fa-book"></i> <b>Capítulo Um e Capítulo Dois</b>
                <br>
                <i class="fa-solid fa-skull"></i> <b>Bosses dos capitulos Um e Dois</b>
                <br>
                <i class="fa-solid fa-chess-rook"></i> <b>Três fases de cada capítulo</b>
            </p>
            <br>
            <h2 class="animated-aparecer fonte-comum tx-yellow">O que falta?</h2>
            <p class="fonte-comum">
                4 capítulos e umas quests aí... tem muito conteudo pra por mas eu quero testar mecanicas atuais e molhorar a gameplay do jogo
            </p>

            <h2 class="animated-aparecer fonte-comum tx-yellow">O que Eu estou fazendo Aqui?</h2>
            <p class="fonte-comum">
                Você está aqui para jogar. (espero ter respondido),  ou também (principal): caçar bugs, erros
                me passar o feedback para que eu possa melhorar, você também pode dar sujestões ou sei lá mais o que,
                embora isso não signifique que suas ideias viram pro jogo :(, erros de escrita também, eu saí digitando algumas falas muito rápido então pode haver erros de portguês
                <br>
                A propósito: Eu não to nem programando direito então imagine desenhar e animar kkkkkk....peguem leve nas críticas.
            </p>

            <h2 class="animated-aparecer fonte-comum tx-yellow">Recomendações:</h2>
            <p class="fonte-comum">
                <i class="fa-solid fa-computer"></i> <b>Versão de Computador:</b>
                <br>
                <i>Jogue no <b>F11</b> é sério em tela cheia é muito melhor</i>
                <br>
                <i class="fa-solid fa-mobile"></i> <b>Versão de Celular:</b>
                <br>
                <i>O jogo é um pouco mais rápido aqui e talvez isso o torne mais dificil em relação ao
                    computador, a velocidade de carregamento das páginas pode ser um pouco mais lenta então paciência...
                </i>
                <br>
                <br>
            </p>
        </div>

        <button class="red-button" onclick="fecharTelaPrincipal()">
            <i class="fa-solid fa-x"></i>
        </button>
    `;
    TELA.innerHTML = stringHTML;
    abrirTela("index-popup");
    blurBoxOpen();
}
mostrarAcesso();