function loadSaveSystem(){
    const SAVES = [null, null, null];

    localStorage.setItem("OwnsSaves", JSON.stringify(SAVES));
}

function getSaves(){
    const saves = JSON.parse(localStorage.getItem("OwnsSaves")) || null;
    return saves;
}

function setSaves(saves){
    localStorage.setItem("OwnsSaves", JSON.stringify(saves));
}

function addSave(pos, save){
    const SAVES = getSaves();

    if(SAVES == null){
        console.log("Erro: Saves Nulo");
        return;
    }
    if(SAVES[pos] != null || pos >= 3){
        console.log("Erro: local incorreto");
        return;
    }

    SAVES[pos] = save;
    setSaves(SAVES);
}

function getSave(pos){
    const SAVES = getSaves();

    if(SAVES == null){
        console.log("Erro: Saves Nulo");
        return;
    }
    if(SAVES[pos] != null || pos >= 3){
        console.log("Erro: local incorreto");
        return;
    }

    return SAVES[pos];
}

function setSave(pos, save){
    const SAVES = getSaves();

    if(SAVES == null){
        console.log("Erro: Saves Nulo");
        return;
    }
    if(SAVES[pos] != null || pos >= 3){
        console.log("Erro: local incorreto");
        return;
    }

    SAVES[pos] = save;
    setSaves(SAVES);
}

function deleteSave(pos){
    const SAVES = getSaves();

    if(SAVES == null){
        console.log("Erro: Saves Nulo");
        return;
    }
    if(SAVES[pos] != null || pos >= 3){
        console.log("Erro: local incorreto");
        return;
    }

    SAVES[pos] = null;
    setSaves(SAVES);
}

if(!localStorage.getItem("OwnsSaves")){
    loadSaveSystem();
} 