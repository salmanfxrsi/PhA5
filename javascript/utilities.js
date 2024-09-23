// Get Number Of Input By Using This Function
function getValueOfInput(id){
    const value = document.getElementById(id).value;
    return value;
}

// Get InnerText Of Elements By Using This Function
function numberFromElements(id){
    const innerText = document.getElementById(id).innerText;
    const number = parseFloat(innerText);
    return number;
}