// Blog Button Event
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})


// Donation & History Button Event

// Donation Button
document.getElementById('donation').addEventListener('click', function(){
    document.getElementById('donation').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('bg-[#B4F461]');
    document.getElementById('history').classList.add('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('donation').classList.remove('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('card-container').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')
}) 
// History Button
document.getElementById('history').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.add('bg-[#B4F461]');
    document.getElementById('donation').classList.add('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('history').classList.remove('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('card-container').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')
})


// Donate for Flood at Noakhali, Bangladesh Function
document.getElementById('c1-donation-button').addEventListener('click', function(){
    const donationInput = getValueOfInput('c1-donation-input');
    const balance = numberFromElements('balance');
    const totalDonation = numberFromElements('c1-total-donation');
    if(typeof(donationInput) === "number" && donationInput > 0){
        const donation = totalDonation + donationInput;
        const latestBalance = balance - donationInput;
        if(latestBalance >= 0){
        document.getElementById('c1-total-donation').innerText = donation;
        document.getElementById('balance').innerText = latestBalance;
        refreshInput('c1-donation-input');
        showModal();
        const context = document.getElementById("c1-donation-context").innerText.split("for");
        const lastIndex = context[1];
        const historyDiv = document.createElement('div');
        historyDiv.classList = "p-8 border border-[#1111111a] rounded-xl mb-6";
        historyDiv.innerHTML = `
        <p class="font-bold text-xl text-[#111111]">${donationInput} Taka Donated For ${lastIndex}</p>
        <p>${new Date()}</p>
        `
        document.getElementById('history-container').append(historyDiv);
        }
        else{
            alert('Add Money For Donation');
            refreshInput('c1-donation-input');
        }
    }
    else{
        alert('Invalid Donation Amount!');
        refreshInput('c1-donation-input');
    }
})

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('c2-donation-button').addEventListener('click', function(){
    const donationInput = getValueOfInput('c2-donation-input');
    const balance = numberFromElements('balance');
    const totalDonation = numberFromElements('c2-total-donation');
    if(typeof(donationInput) === "number" && donationInput > 0){
        const donation = totalDonation + donationInput;
        const latestBalance = balance - donationInput;
        if(latestBalance >= 0){
        document.getElementById('c2-total-donation').innerText = donation;
        document.getElementById('balance').innerText = latestBalance;
        refreshInput('c2-donation-input');
        showModal();
        const context = document.getElementById("c2-donation-context").innerText.split("for");
        const lastIndex = context[1];
        const historyDiv = document.createElement('div');
        historyDiv.classList = "p-8 border border-[#1111111a] rounded-xl mb-6";
        historyDiv.innerHTML = `
        <p class="font-bold text-xl text-[#111111]">${donationInput} Taka Donated For ${lastIndex}</p>
        <p>${new Date()}</p>
        `
        document.getElementById('history-container').append(historyDiv);
        }
        else{
            alert('Add Money For Donation');
            refreshInput('c1-donation-input');
        }
    }
    else{
        alert('Invalid Donation Amount!');
        refreshInput('c2-donation-input');
    }
})

// Aid for Injured in the Quota Movement
document.getElementById('c3-donation-button').addEventListener('click', function(){
    const donationInput = getValueOfInput('c3-donation-input');
    const balance = numberFromElements('balance');
    const totalDonation = numberFromElements('c3-total-donation');
    if(typeof(donationInput) === "number" && donationInput > 0){
        const donation = totalDonation + donationInput;
        const latestBalance = balance - donationInput;
        if(latestBalance >= 0){
        document.getElementById('c3-total-donation').innerText = donation;
        document.getElementById('balance').innerText = latestBalance;
        refreshInput('c3-donation-input');
        showModal();
        const context = document.getElementById("c3-donation-context").innerText.split("for");
        const lastIndex = context[1];
        const historyDiv = document.createElement('div');
        historyDiv.classList = "p-8 border border-[#1111111a] rounded-xl mb-6";
        historyDiv.innerHTML = `
        <p class="font-bold text-xl text-[#111111]">${donationInput} Taka Donated For ${lastIndex}</p>
        <p>${new Date()}</p>
        `
        document.getElementById('history-container').append(historyDiv);
        }
        else{
            alert('Add Money For Donation');
            refreshInput('c1-donation-input');
        }
    }
    else{
        alert('Invalid Donation Amount!');
        refreshInput('c3-donation-input');
    }
})
