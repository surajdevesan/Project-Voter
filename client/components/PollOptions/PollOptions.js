import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PollCards from '../PollCards/PollCards.js';
import { Card, Col, Row } from 'antd';

const style = {
  pollOptions: {
    marginTop: '10%'
  }
};

class PollOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span={24}>
            <Card title="Project Voter" bordered={false}>
              <PollCards />
            </Card>
          </Col>
        </Row>
      </div>        

    )
  }
}

PollOptions.propTypes = {};

export default PollOptions;
