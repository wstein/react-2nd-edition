console.log('App.js is running!');

const template = (
    <div>
        <h1>This is JSX from App.js</h1>
        <p>this is some text...</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);