console.log('App.js is running!');


const app = {
    title: 'Indecision App',
    subtitle: 'Here is some info...',
    options: []
}

function renderOptions(options) {
    if (options && options.length > 0) {
        return (<div>
            <p>Here are your options: </p>
            <button onClick={removeAll}>Remove All</button>
            <ol> {options.map((option, id) => <li key={id}>Item {option}</li>)} </ol>
        </div>);
    } else {
        return <p>No options</p>
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
}

function removeAll(e) {
    app.options = [];

    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (<div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {renderOptions(app.options)}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>)
    ReactDOM.render(template, appRoot);
}

renderApp();