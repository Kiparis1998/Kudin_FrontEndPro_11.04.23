const dateOfBirth = prompt("What's your date of birth?", '23.09.1986');
const city = prompt('What city do you live?', 'Kyiv');
const sportPreference = prompt('What kind of sport are you keen on?', 'tennis');

if(dateOfBirth && city && sportPreference) {
    alert(`Your date of birth - ${dateOfBirth}
${city === 'London' || city === 'Kyiv' || city === 'Washington' ? `You live in the capital of ${city}` : `You live in ${city}`}
${sportPreference === 'bodybuilder' ? 'Wow, do you wanna be like Arnold Schwarzenegger?' :
        sportPreference === 'football' ? 'Wow, do you wanna be like Lionel Messi?' :
            sportPreference === 'tennis' ? 'Wow, do you wanna be like Rafael Nadal?' :
                'Sorry, I dont know any champions in this field of sport'} `);
} else {
    switch (true) {
        case dateOfBirth === null && city !== null && sportPreference !== null:
            alert(`It's a pity you didn't point your date of birth
${city === 'London' || city === 'Kyiv' || city === 'Washington' ? `You live in the capital of ${city}` : `You live in ${city}`}
${sportPreference === 'bodybuilder' ? 'Wow, do you wanna be like Arnold Schwarzenegger?' :
                sportPreference === 'football' ? 'Wow, do you wanna be like Lionel Messi?' :
                    sportPreference === 'tennis' ? 'Wow, do you wanna be like Rafael Nadal?' :
                        'Sorry, I dont know any champions in this field of sport'} `);
            break;

        case dateOfBirth !== null && city === null && sportPreference !== null:
            alert(`Your date of birth - ${dateOfBirth}
It's a pity you didn't point your city
${sportPreference === 'bodybuilder' ? 'Wow, do you wanna be like Arnold Schwarzenegger?' :
                sportPreference === 'football' ? 'Wow, do you wanna be like Lionel Messi?' :
                    sportPreference === 'tennis' ? 'Wow, do you wanna be like Rafael Nadal?' :
                        'Sorry, I dont know any champions in this field of sport'} `);
            break;

        case dateOfBirth !== null && city !== null && sportPreference === null:
            alert(`Your date of birth - ${dateOfBirth}
${city === 'London' || city === 'Kyiv' || city === 'Washington' ? `You live in the capital of ${city}` : `You live in ${city}`}
It's a pity you didn't point your favorite type of sport`);
            break;

        case dateOfBirth === null && city === null && sportPreference !== null:
            alert(`It's a pity you didn't point your date of birth
It's a pity you didn't point your city
${sportPreference === 'bodybuilder' ? 'Wow, do you wanna be like Arnold Schwarzenegger?' :
                sportPreference === 'football' ? 'Wow, do you wanna be like Lionel Messi?' :
                    sportPreference === 'tennis' ? 'Wow, do you wanna be like Rafael Nadal?' :
                        'Sorry, I dont know any champions in this field of sport'} `);
            break;

        case dateOfBirth === null && city !== null && sportPreference === null:
            alert(`It's a pity you didn't point your date of birth
${city === 'London' || city === 'Kyiv' || city === 'Washington' ? `You live in the capital of ${city}` : `You live in ${city}`}
It's a pity you didn't point your favorite type of sport`);
            break;

        case dateOfBirth !== null && city === null && sportPreference === null:
            alert(`Your date of birth - ${dateOfBirth}
It's a pity you didn't point your city
It's a pity you didn't point your favorite type of sport`);
            break;

        default:
            alert("It's a pity you pointed nothing :(")
    }
}