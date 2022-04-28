// Object
{
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
}

// Array
{
    const address = ['Hans Str 11', 'Stuttgart', 'BW', 70469];

    const [, city, state, , country = 'Germany'] = address;
    console.log(`You are in ${address[1]} ${address[2]}`);
    console.log(`You are in ${city} ${state} ${country}`);
}