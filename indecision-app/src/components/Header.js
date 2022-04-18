import React from "react";
import AddOption from "./AddOption";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.subtitle && <h2>{this.props.subtitle}</h2>}
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;