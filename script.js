let started = false;
const starttext = document.getElementById('starttext');
const typed = []

addEventListener('keydown', (event) => {
    const key = event.key;
    typed.push(key);
    if (key == 'Backspace') {
        typed.pop();
        typed.pop();
    } else if (key == "Shift") {
        typed.pop();
    };
    console.log(`Key pressed: ${key}\n`);
    started = true;
    const textElement = document.getElementById('text');

    textElement.textContent = typed.join('');

    starttext.textContent = '';

});

