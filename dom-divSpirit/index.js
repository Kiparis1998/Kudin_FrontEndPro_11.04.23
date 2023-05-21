const mainBlock = document.querySelector('.block');
const input = document.querySelector('.block_input');
const div = document.createElement('div');

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'blue';
div.classList.add('block_div-spirit', 'animation');

mainBlock.append(div)

input.addEventListener('focus', () => {
    div.classList.remove('block_div-spirit');
    input.style.transform = 'translateX(0)'
});

input.addEventListener('blur', () => {
    div.classList.add('block_div-spirit');
    input.style.transform = 'translateX(150px)'
});