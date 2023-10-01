import React, { Component } from "react";
import '.Header.css';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div classname="header-content">
                    <h1>Group 3</h1>
                    <p>Software Engineering Extraordinaires</p>
                    <img
                        src="new_image.jpeg"
                        className="header-image"
                        />
                </div>
            </header>
        )
    }

}