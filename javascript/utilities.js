// Get Number Of Input By Using This Function
function getValueOfInput(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

// Get InnerText Of Elements By Using This Function
function numberFromElements(id){
    const innerText = parseFloat(document.getElementById(id).innerText);
    return innerText;
}