const person = {
    name: 'Werner',
    age: 54,
    location: {
        city: 'Ludwigsburg',
        temp: 8
    }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location || {};

city && temperature && console.log(`It is ${temperature} in ${city}`);
