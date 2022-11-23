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
                {this.props.like ? <p className="heart">&#128157;</p> : null}
            </div>
        )
    }
}
export default Wine