class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.subtitle = 'Put your life in the hands of a computer';

        this.state = {
            options: []
        };
    }

    componentDidMount() {
        console.log('fetching data!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating data!');
    }

    componentWillUnmount() {
        console.log('component will unmount!');
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return `The option '${option}' already exists`;
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        return (
            <div>
                <Header subtitle={this.subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = props => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
}

const Action = props => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

const Options = props => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        <p>Here are your options: </p>
        <ol>
            {
                props.options.map((option, index) => (
                    <Option
                        key={index}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </ol>
    </div>
);

const Option = props => (
    <li key={props.key}>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            remove
        </button>
    </li>
);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
