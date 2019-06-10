import React, { Component } from 'react'
import { Row, Col } from 'antd'
import index1 from './index1.jpeg'
import index2 from './index2.jpeg'
import index3 from './index3.jpeg'
import './App.css';

export default class index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <img src={index1} className="index-kaoya" alt="" />
            <img src={index2} className="index-kaoya" alt="" />
            <img src={index3} className="index-kaoya" alt="" />
          </Row>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
        </header>
      </div>
    )
  }
}
