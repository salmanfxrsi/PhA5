// All


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
}) 

// History Button
document.getElementById('history').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.add('bg-[#B4F461]');
    document.getElementById('donation').classList.add('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('history').classList.remove('border', 'border-[#111111]', 'border-opacity-30');
    document.getElementById('card-container').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
})