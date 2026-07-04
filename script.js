const colors = [
    'red', 'orange', 'yellow', 'green',
    'blue', 'purple', 'black', 'white'
];

const container = document.getElementById('color-buttons');
let selectedColor = null;

function createColorButtons() {
    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'color-button';
        btn.style.backgroundColor = color;
        btn.title = color;
        btn.addEventListener('click', () => {
            selectedColor = color;
            console.log('選擇顏色:', selectedColor);
        });
        container.appendChild(btn);
    });
}

createColorButtons();
