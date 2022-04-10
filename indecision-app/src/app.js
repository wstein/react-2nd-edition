console.log('App.js is running!');


const app = {
    title :'Indecision App',
    subtitle: 'Here is some info...'
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user =
    {
        name: 'Werner',
        age: 54,
        location: 'Ludwigsburg'
    };

const templateTwo = (
    <div>
        <h1>{user.name}!</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);