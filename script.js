const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');

yesBtn.addEventListener('click', function() {
    messageDiv.innerHTML = '<h2>Thank you! OMG I hope we have the best safar!</h2>';
    confetti();
    playSaxophone();
});

noBtn.addEventListener('click', function() {
    const messages = [
        'Here\'s some flowers 💐, please say yes!',
        'How about some food? 🍕🍔',
        'Pretty please? 🥺'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.innerHTML = `<h2>${randomMessage}</h2>`;
});

function confetti() {
    // Simple confetti effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = 'randomColor()';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animation = 'fall 2s ease-in-out infinite';
        document.body.appendChild(confetti);
    }
}

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function playSaxophone() {
    // Simple saxophone sound effect
    const audio = new Audio('https://example.com/saxophone.mp3');
    audio.play();
}
