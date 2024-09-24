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

// Show Modal Function
function showModal(){
    document.getElementById('modal').showModal();
}

// Fresh Input
function refreshInput(id){
    document.getElementById(id).value = "";
}


// History 
function history(inputDonation,text){
    const context = document.getElementById(text).innerText.split("for");
    const lastIndex = context[1];
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
    <p class="font-bold text-xl text-[#111111]">${inputDonation} Taka Donated For ${lastIndex}</p>
    <p class="font-bold text-xl text-[#111111]">${new Date().toLocaleTimeString}</p>
    `
    document.getElementById('history-container').appendChild(historyDiv);
}