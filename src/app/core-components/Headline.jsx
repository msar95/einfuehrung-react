import React from "react";
import './Headline.css';

export class Headline extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h1 className="headline">{this.props.headline}</h1>
        );
    }
}