function checkAnswer(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'unknown') {
        responseElement.textContent = 'Wrong answer, try it again.';
        responseElement.classList.remove('correct');
    } else if (answer === 'liziko') {
        responseElement.textContent = 'Yes, you are the prettiest one PUPSIK, correct.';
        responseElement.classList.add('correct');
    }
}

function moveButton() {
    const container = document.getElementById('button-container');

    // Get random positions for the container within the viewport
    const randomX = Math.floor(Math.random() * (window.innerWidth - container.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - container.clientHeight));

    // Set the new positions for the container
    container.style.position = 'absolute';
    container.style.left = `${randomX}px`;
    container.style.top = `${randomY}px`;
}

function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the width as needed for your definition of a mobile device
}

function handleMouseOver() {
    if (!isMobileDevice()) {
        moveButton();
    }
}

function handleClick() {
    if (isMobileDevice()) {
        moveButton();
    }
    checkAnswer('unknown');
}
