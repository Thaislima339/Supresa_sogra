const messages = [
    "Imagine um abraço bem apertado agora! 🤗",
    "Você é muito forte e amada! 💪",
    "Tudo vai se resolver, estou ao seu lado! ❤️",
    "Não se preocupe, dias melhores estão a caminho! ☀️"
];

function explodeHearts() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = ['💖', '💕', '💗', '❤️', '🤍'][Math.floor(Math.random() * 5)];

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function sendHug() {
    const msgBox = document.getElementById('special-message');
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    msgBox.innerText = randomMsg;
    msgBox.style.display = 'block';

    for (let i = 0; i < 10; i++) {
        setTimeout(explodeHearts, i * 100);
    }
}

setInterval(() => {
    if (Math.random() > 0.7) {
        explodeHearts();
    }
}, 2000);
