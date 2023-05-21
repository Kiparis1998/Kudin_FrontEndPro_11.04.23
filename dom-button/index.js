const block = document.querySelector('.block');
const input = document.createElement('input');
const btnBlock = document.createElement('div');
const firstBtn = document.createElement('button');
const secondBtn = document.createElement('button');
const firstText = document.createElement('p');
const secondText = document.createElement('p');

input.type = 'text';
input.classList.add('input-text', 'animation');
btnBlock.classList.add('btn-block');
firstBtn.classList.add('button-style', 'animation');
secondBtn.classList.add('button-style', 'animation');
firstText.style.margin = '0';
firstText.style.fontSize = '14px';
firstText.innerText = 'Click on me :)'
secondText.style.margin = '0';
secondText.style.fontSize = '14px';
secondText.innerText = 'No! Click on me first!'
input.value = 'google.com';

block.append(input, btnBlock);
btnBlock.append(firstBtn, secondBtn);
firstBtn.append(firstText);
secondBtn.append(secondText);

firstBtn.addEventListener('click', () => {
    if (input.value === '') {
        input.style.borderColor = 'red';
    } else if (!input.value.includes('https')) {
        document.location.href = `https://${input.value}`;
        input.value = `https://${input.value}`;
        input.style.borderColor = '#46ff00';
    }else {
        document.location.href = input.value;
    }
});

secondBtn.addEventListener('click', () => {
    if (input.value === '') {
        input.style.borderColor = 'red';
    } else if (!input.value.includes('http')) {
        document.location.href = `http://${input.value}`;
        input.value = `http://${input.value}`;
        input.style.borderColor = 'orange';
    }else {
        document.location.href = input.value;
    }
});