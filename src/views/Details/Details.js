import React from "react";
import axios from "axios";
import ReactDOMServer from 'react-dom/server';
import './Details.scss';
import { withRouter } from "react-router-dom"
// var ReactDOMServer = require('react-dom/server');

class Details extends React.Component {
    state = {
        id: ''
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            this.setState({
                id: id
            })
        }
    }

    render() {
        return (
            <>
                <div className="detail-container">
                    <div>Hello detail id: {this.state.id}</div>
                </div>
            </>
        )
    }
}

export default withRouter(Details);