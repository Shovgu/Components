import React, { Component } from "react"
import "./Wine.css"

class Wine extends Component {
    render() {
        return (
            <div className="container">
                <div className="main">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="main">
                    <p className="description">{this.props.description}</p>
                </div>
                <div className="main">
                    <p className="rating">{this.props.rating}</p>
                </div>
            </div>
        )
    }
}
export default Wine