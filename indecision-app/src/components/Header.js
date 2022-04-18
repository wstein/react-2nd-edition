import React from "react";
import AddOption from "./AddOption";

class Header extends React.Component {
    defaultProps: {
        title: 'Indecision'
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.subtitle && <h2>{this.props.subtitle}</h2>}
            </div>
        );
    }
}

export default Header;