import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home ~~~~~ ~~~~~ <br />
                当前计数：{this.state.count}<br />
                <Button onClick={() => this._handleClick()} type="warning" className="btn">ADD</Button>
            </div>
        )
    }
}