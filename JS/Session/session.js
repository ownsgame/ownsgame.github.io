function setSession(pos, save){
    localStorage.setItem("OwnsSession", JSON.stringify(save));
    localStorage.setItem("OwnsSessionNumber", JSON.stringify(pos));
}

function getSession(){
    return JSON.parse(localStorage.getItem("OwnsSession"));
}

function getSessionNumber(){
    return Number(localStorage.getItem("OwnsSessionNumber"));
}

function logoutSession(){
    localStorage.setItem("OwnsSession", JSON.stringify(null));
    localStorage.setItem("OwnsSessionNumber", JSON.stringify(null));
}

function saveSession(save){
    const POS = getSessionNumber();
    setSave(POS, save);
    setSession(POS, save);
}



