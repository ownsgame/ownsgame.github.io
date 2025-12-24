function setSession(pos, save) {
    console.log(save);
    try {
        const dataToSave = JSON.stringify(save);
        localStorage.setItem("OwnsSession", dataToSave);
        localStorage.setItem("OwnsSessionNumber", pos);
        console.log(dataToSave);
    } catch (e) {
        console.error("Erro ao salvar no localStorage:", e);
    }
}

function getSession(){
    return JSON.parse(localStorage.getItem("OwnsSession"));
}

function getSessionNumber(){
    return Number(localStorage.getItem("OwnsSessionNumber"));
}

function logoutSession(){
    localStorage.removeItem("OwnsSession");
    localStorage.removeItem("OwnsSessionNumber");
}

function saveSession(save){
    const POS = getSessionNumber();
    
    setSession(POS, save);
    setSave(POS, save);
}



