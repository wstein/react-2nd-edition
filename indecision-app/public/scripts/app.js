
console.log('App.js is running!');

// let template = <p>This is JSX from App.js!</p>;
let template = /*#__PURE__*/ React.createElement(
    "p",
    null,
    "This is JSX from App.js!"
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);