const input = document.querySelector('#search');
const message = document.querySelector('.message');

const searchButton = document.querySelector('.button-search');
const removeButton = document.querySelector('.remove-button');

const weatherInfo = document.querySelector('.info-block');

const cityInfo = document.querySelector('.info-block-city');
const tempInfo = document.querySelector('.info-block-temp');
const pressureInfo = document.querySelector('.info-block-pressure');
const descriptionInfo = document.querySelector('.info-block-description');
const humidityInfo = document.querySelector('.info-block-humidity');
const speedInfo = document.querySelector('.info-block-speed');
const degInfo = document.querySelector('.info-block-deg');
const icon = document.querySelector('.info-block-icon');

const INDEX_OF_ARRAY = 0;

const arrOfTitles = [...weatherInfo.children];

const getData = (city) => {
    return new Promise( (resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
            .then((response) => {
                if (city === '') {
                    throw new Error('Input must be filled!');
                } else if (!response.ok) {
                    throw new Error(`A city is not found, try another one`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

searchButton.addEventListener('click', async () => {
    try {
        const dataResult = await getData(input.value);
        const widgetData = dataResult['weather'][INDEX_OF_ARRAY]['icon'];
        cityInfo.innerText = dataResult.name;
        tempInfo.innerText = `Temperature - ${Math.round(dataResult['main']['temp'])}`;
        pressureInfo.innerText = `Pressure - ${dataResult['main']['pressure']}`;
        descriptionInfo.innerText = dataResult['weather'][INDEX_OF_ARRAY]['description'].charAt(0).toUpperCase() +
            dataResult['weather'][INDEX_OF_ARRAY]['description'].slice(1).toLowerCase();
        humidityInfo.innerText = `Humidity - ${dataResult['main']['humidity']}`;
        speedInfo.innerText = `Speed of the wind - ${dataResult['wind']['speed'].toFixed(1)}`;
        degInfo.innerText = `Wind's degree- ${dataResult['wind']['deg']}`;
        icon.setAttribute('src', `https://openweathermap.org/img/w/${widgetData}.png`)
        weatherInfo.classList.remove('hidden');
        input.value = '';
    } catch (error) {
        message.innerText = error.message;
        input.style.color = 'red';
        input.style.borderColor = 'red';
        setTimeout(() => {
            input.value = '';
            message.innerText = '';
            input.style.color = 'black';
            input.style.borderColor = 'white';
        }, 2000);
    }
});

removeButton.addEventListener('click', () => {
    arrOfTitles.forEach((child) => {
        if (child !== removeButton) child.innerText = '';
        if (child === icon) child.setAttribute('src', '');
    });
    weatherInfo.classList.add('hidden');
});