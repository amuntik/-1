const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

let selectedColor = colorPicker.value;

function createCanvas() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (width < 1 || width > 128 || height < 1 || height > 128) {
        alert('Размеры холста должны быть между 1x1 и 128x128');
        return;
    }

    let tableHtml = '';
    for (let i = 0; i < height; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < width; j++) {
            tableHtml += '<td></td>';
        }
        tableHtml += '</tr>';
    }

    pixelCanvas.innerHTML = tableHtml;

    pixelCanvas.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', function() {
            this.style.backgroundColor = selectedColor;
        });
    });
}

colorPicker.addEventListener('input', function() {
    selectedColor = colorPicker.value;
});