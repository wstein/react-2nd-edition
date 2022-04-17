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

ReactDOM.render(<Counter counter={100}/>, document.getElementById('app'));