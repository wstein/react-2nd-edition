let isVisible = false;

const appRoot = document.getElementById('app');

function onToggleVisibility(_e) {
    isVisible = !isVisible;
    renderApp();
}

const renderApp = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisibility}>
                {isVisible ? 'Hide details' : 'Show details'}
            </button>
            {isVisible && <p>Juhu, here are some details!</p>}
        </div>
    );

    ReactDOM.render(jsx, appRoot);
}

renderApp()
