console.log('App.js is running!');


const app = {
    title: 'Indecision App',
    subtitle: 'Here is some info...',
    options: ['One', 'Two', "Three", "Juhu!!"]
}

function renderOptions(options) {
    if (options && options.length > 0) {
        return (
            <div>
                <p>Here are your options: </p>
                <ol> {
                    options.map((option, id) => <li key={id}>Item {option}</li>)
                } </ol>
            </div>)
            ;
    } else {
        return <p>No options</p>
    }
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {renderOptions(app.options)}
    </div>
);

const user = {
    name: 'Werner',
    age: 54,
    location: 'Ludwigsburg'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {user.location}</p>;
    }
    // if location is unknown getLocation returns undefined
    // e.g. return undefined;
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}!</h1>
        {user.age && user.age >= 18 ? <p>Age: {user.age}</p> : false}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

let count = 0;

const addOne = () => {
    console.log("addOne");
    count++;
};

function minusOne() {
    console.log("minusOne");
    count--;
}

function reset() {
    console.log("reset");
    count = 0;
}

const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

ReactDOM.render(templateThree, appRoot);



