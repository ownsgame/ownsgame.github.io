function getAtualCutscene(){
    return getSessionItem("cutscene");
}

function cancellAtualCutscene(){
    setSessionItem("cutscene", null);
}

function setAtualCutscene(cutsceneId){
    setSessionItem("cutscene", cutsceneId);
}