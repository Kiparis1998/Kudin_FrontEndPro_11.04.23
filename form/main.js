const form = document.querySelector('.block-form');
const name = document.querySelector('#name');
const dateOfBirth = document.querySelector('#date-of-birth');
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const city = document.querySelector('#city');
const address = document.querySelector('#address');
const frenchOption = document.querySelector('#french');
const germanOption = document.querySelector('#german');
const ukrainianOption = document.querySelector('#ukrainian');
const englishOption = document.querySelector('#english');
const email = document.querySelector('#email');
const message = document.querySelector('.message');
const table = document.querySelector('table');
const returnButton = document.querySelector('.block-form_return-button');

const arrOfTableTitles = [...document.querySelectorAll('th')];
const arrOfLanguageOptions = [frenchOption, germanOption, ukrainianOption, englishOption];
function validateData() {
    const objectOfValues = {};
    const checkedLanguages = arrOfLanguageOptions.filter(language => language.checked).map(language => language.value);
    if (name.value.trim() !== '' && dateOfBirth.value.trim() !== '') {
        objectOfValues['name and surname'] = name.value;
        objectOfValues['date of birth'] = dateOfBirth.value;
    } if (maleRadio.checked === true || femaleRadio.checked === true) {
        maleRadio.checked === true ? objectOfValues['gender'] = maleRadio.value : objectOfValues['gender'] = femaleRadio.value;
    } if (city.value !== 'empty') {
        objectOfValues['city'] = city.value;
    } if (address.value.trim() !== '') {
        objectOfValues['address'] = address.value;
    } if (checkedLanguages.length > 0) {
        objectOfValues['languages'] = checkedLanguages.join(', ');
    } if (email.value.trim() !== '' && (email.value.includes('@') && email.value.includes('.com'))) {
        objectOfValues['email'] = email.value;
    } if (Object.keys(objectOfValues).length === 7) {
        return objectOfValues;
    }
    throw new Error('Invalid input');
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(dateOfBirth.value !== false)
    try {
        const result = validateData();
        const row = document.createElement('tr');
        arrOfTableTitles.forEach((cell) => {
            Object.entries(result).forEach(([key, value]) => {
                if (cell.innerText.toLowerCase() === key.toLowerCase()) {
                    const content = document.createElement('td');
                    if (key === 'city' || key === 'gender') {
                        content.innerText = value.charAt(0).toUpperCase() + value.slice(1);
                    } else {
                        content.innerText = value;
                    }
                    row.append(content);
                }
            });
        });
        table.append(row);
        form.classList.add('hidden');
        table.classList.remove('hidden');
        returnButton.classList.remove('hidden');
    } catch (error) {
        message.innerText = error.message;
        form.classList.add('warning-border');
        setTimeout(() => {
            message.innerText = '';
            form.classList.remove('warning-border');
        }, 2000);
    }
});

returnButton.addEventListener('click', () => {
    form.classList.remove('hidden');
    table.classList.add('hidden');
    returnButton.classList.add('hidden');
});