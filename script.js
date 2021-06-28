const principal = document.getElementById('principal');
const colors = document.getElementById('colors');

// Divs of colors
for(let index = 0; index <= 6; index += 1) {
  let createColors = document.createElement('div');
  colors.appendChild(createColors);
  createColors.className = 'color';
}

function chooseColorPalette() {
  const colors = document.getElementsByClassName('color'); 
  colors[0].style.backgroundColor = 'black'; 
  colors[0].className = 'color selected'
  for (let index = 1; index < colors.length; index += 1) { 
    const randomRed = Math.random() * 256; 
    const randomGreen = Math.random() * 256;
    const randomBlue = Math.random() * 256;
    colors[index].style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } 
}

chooseColorPalette()

// create pixels
function createPixel() {
const numberLines = 5;
const pixelBoard = document.getElementById('pixel-board')
pixelBoard.innerHTML = '';
for (let index = 0; index < numberLines; index += 1) {
  let lines = document.createElement('tr');
  lines.className = 'pixels'
  pixelBoard.appendChild(lines);
  for (let key = 0; key < numberLines; key += 1) {
    const columns = document.createElement('td');
    columns.className = 'pixel';
    lines.appendChild(columns);
  }
}
}

// change selected
const allColors = document.querySelectorAll('#colors .color');

function changeSelected(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');

}

function addClass() {
    for (let index = 0; index < allColors.length; index += 1) {
      allColors[index].addEventListener('click', changeSelected);
    }
}

// change Color of Pixel

function changeColorPixel(event) {
  const selected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selected;
}
function changeColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColorPixel);
  }
}

// clear pixel
function cleanPixels() {
  const pixels1 =  document.querySelectorAll('.pixel');
  for(let index = 0; index < pixels1.length; index += 1) {
    pixels1[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-button').addEventListener('click', cleanPixels);

// Create Board-Size
const defineSizeButton = document.querySelector('#create-size');
const defaultSizeButton = document.querySelector('#default-size-btn');
const inputSize = document.querySelector('.size');

function defineTableSize() {
  const table = document.getElementById('pixel-board');
  table.innerHTML = '';
  for (let index = 0; index < inputSize.value; index += 1) {
    const newPixelsRow = document.createElement('tr');
    table.appendChild(newPixelsRow);
    for (let index1 = 0; index1 < inputSize.value; index1 += 1) {
      const newPixel = document.createElement('td');
      newPixel.className = ('pixel');
      newPixelsRow.appendChild(newPixel);
      newPixel.addEventListener('click', changeColorPixel);
    }
  }
}

defineSizeButton.addEventListener('click', defineTableSize);

// Tamanho maximo da table
function maxTableSize() {
  const table = document.getElementById('pixel-board');
  table.innerHTML = '';
  const rowsAndColumns = 50;
  for (let index = 0; index < rowsAndColumns; index += 1) {
    const pixelsRow = document.createElement('tr');
    table.appendChild(pixelsRow);
    for (let index1 = 0; index1 < rowsAndColumns; index1 += 1) {
      const pixel = document.createElement('td');
      pixel.className = ('pixel');
      pixelsRow.appendChild(pixel);
      pixel.addEventListener('click', changeColorPixel);
    }
  }
}

function boardLimitSize() {
  if (inputSize.value < 5) {
    alert('board inválido! Valor menor que 5');
    initialTableSize();
  }

  if (inputSize.value > 25) {
    alert('board inválido! Valor maior que 25');
    maxTableSize();
  }
}

defineSizeButton.addEventListener('click', boardLimitSize);



window.onload = () => {
  addClass()
  createPixel();
  chooseColorPalette()
  changeColor()
  changeColorPixel();
}
