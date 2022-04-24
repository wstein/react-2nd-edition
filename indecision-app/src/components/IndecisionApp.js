import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
    subtitle = 'Put your life in the hands of a computer';
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = optionToRemove => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption
        }))
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    handleAddOption = option => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return `The option '${option}' already exists`;
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    componentDidMount() {
        localStorage.options &&
        this.setState(() => ({
            options: JSON.parse(localStorage.options)
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.options = JSON.stringify(this.state.options);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount!');
    }

    render() {
        return (
            <div>
                <Header subtitle={this.subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}