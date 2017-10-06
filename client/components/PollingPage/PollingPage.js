import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateNewPoll from '../CreateNewPoll/CreateNewPoll.js';
import PollOptions from '../PollOptions/PollOptions.js';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const style = {
  ne: {
    color: '#4264aa',
    textAlign: 'center'
  }
};

class PollingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={1}><CreateNewPoll /></Col>
            </Row> 
            <p style={style.ne}>create a new idea</p>
            <Row type="flex" justify="center">
                <Col span={5}><PollOptions /></Col>
                <Col span={5}><PollOptions /></Col>
                <Col span={5}><PollOptions /></Col>
                <Col span={5}><PollOptions /></Col>
            </Row>                               
        </div>

    )
  }
}

PollingPage.propTypes = {};

export default PollingPage;
