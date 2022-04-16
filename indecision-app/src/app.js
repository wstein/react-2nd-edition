console.log('App.js is running!');

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.title = 'Indecision';
        this.subtitle = 'Put your life in the hands of a computer';
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: ['Thing one', 'Thing two', 'Thing three', 'Thing four']
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <p>Here are your options: </p>
                <ol>
                    {
                        this.props.options.map((option, id) => <Option id={id} optionText={option}/>)
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        console.log(this.props.id)
        return (
            <li key={this.props.id}>Item {this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            e.target.elements.option.value = '';
            alert(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
