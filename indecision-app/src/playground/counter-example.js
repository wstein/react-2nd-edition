class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            counter: 0,
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
                counter: 0
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

ReactDOM.render(<Counter/>, document.getElementById('app'));