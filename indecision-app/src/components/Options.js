import React from "react";
import Option from "./Option";

const Options = props => (
    <div>
        <button className="button--link"
                onClick={props.handleDeleteOptions}>
            Remove all
        </button>
        <p>{props.options.length === 0 ? 'Please enter an option to get started!' : 'Here are your options:'}</p>
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
    </div>);

export default Options;
