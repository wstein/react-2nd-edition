import React from "react";

export default (props) => (
    <div>
        <h1>A Thing I have Done</h1>
        <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
);