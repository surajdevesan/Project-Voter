import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateNewPoll from '../CreateNewPoll/CreateNewPoll.js';
import PollOptions from '../PollOptions/PollOptions.js';
import { Row, Col, Button } from 'antd';

const style = {
  newIdea: {
    color: '#4264aa',
    textAlign: 'center'
  },
  pollOptions: {
    marginTop: '2%'
  },
  submitButton: {
  backgroundColor: '#4264aa',
  marginLeft: '48%',
  marginBottom: '2%',
  marginTop: '2%'
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
            <p style={style.newIdea}>create a new idea</p>
            <Row type="flex" justify="center" style={style.pollOptions}>
                <Col span={5}><PollOptions /></Col>
                <Col span={5}><PollOptions /></Col>
                <Col span={5}><PollOptions /></Col>
            </Row>
            <Button type="primary" style={style.submitButton}>Primary</Button>                              
        </div>

    )
  }
}

PollingPage.propTypes = {};

export default PollingPage;
