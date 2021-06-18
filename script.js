const principal = document.getElementById('principal');
const colors = document.getElementById('colors');

// Divs das colors
for(let index = 0; index <= 8; index += 1) {
  let createColors = document.createElement('div');
  colors.appendChild(createColors);
  createColors.className = 'color';
}

