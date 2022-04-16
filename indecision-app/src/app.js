console.log('App.js is running!');

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing three", "Thing four"];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
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
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
