function openScroll() {
    const scroll = document.querySelector('#scroll');
    scroll.style.display = 'block';
}

function closeScroll() {
    const scroll = document.querySelector('#scroll');
    scroll.style.display = 'none';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';function openScroll() {
    const scroll = document.getElementById('scroll');
    scroll.style.display = 'block';
}

function closeScroll() {
    const scroll = document.getElementById('scroll');
    scroll.style.display = 'none';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 1000);
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        });
    
    }setInterval(createHeart, 1000);



