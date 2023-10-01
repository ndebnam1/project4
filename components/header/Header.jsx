import React, { Component } from "react";
import '.Header.css';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="background-image"></div>
                <div classname="header-content">
                    <h1>Group 3</h1>
                    <p>Software Engineering Extraordinaires</p>
                </div>
            </header>
        );
    }

}