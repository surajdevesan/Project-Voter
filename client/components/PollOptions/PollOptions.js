import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrelloImg from '../../../public/images/trello_sample.png';
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
        <div style={style.pollOptions}>
            {/* Here we have the cards for polling.*/}
            <img src={TrelloImg} />
        </div>

    )
  }
}

PollOptions.propTypes = {};

export default PollOptions;