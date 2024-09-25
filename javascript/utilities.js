// Get Number Of Input By Using This Function
function getValueOfInput(id){
    const value = Number(document.getElementById(id).value);
    return value;
}

// Get InnerText Of Elements By Using This Function
function numberFromElements(id){
    const innerText = Number(document.getElementById(id).innerText);
    return innerText;
}

// Show Modal Function
function showModal(){
    document.getElementById('modal').showModal();
}

// Fresh Input
function refreshInput(id){
    document.getElementById(id).value = "";
}
