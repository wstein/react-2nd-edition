class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            counter: props.counter,
            title: 'Counter Application'
        };
    }

    componentDidMount() {
        const counter = parseInt(localStorage.counter, 10);

        if (!isNaN(counter)) {
            this.setState(() => ({counter}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            localStorage.counter = this.state.counter;
        }
    }

    handleAddOne(e) {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        });
    }

    handleMinusOne(e) {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        });
    }

    handleReset(e) {
        this.setState(() => {
            return {
                counter: this.props.counter
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Count: {this.state.counter}</h2>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    counter: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));