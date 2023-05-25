const block = document.querySelector('.emoji-block');
const emojiArr = [...document.querySelectorAll('.emoji')];
const counter = document.querySelectorAll('.counter-style');

block.addEventListener('click', ({target}) => {
    emojiArr.filter((elem) => {
        if(elem === target) +counter[emojiArr.indexOf(elem)].innerText++;
    });
})