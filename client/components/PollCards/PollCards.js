import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Icon, Tag } from 'antd';

const style = {
  icons: {
    fontSize: '20px',
    color: '#4264aa',
    marginLeft: '45%',
    marginBottom: '7%'
  }, 
  para: {
    marginBottom: '7%',
    textAlign: 'center'    
  },  
  technologiesUsed: {
      marginBottom: '5%'
  }
};

class PollCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Icon type="user" style={style.icons}/>
            <p style={style.para}>John Doe
            </p>         
        <Icon type="laptop" style={style.icons}/>
        <p style={style.para}>
            This project aims to be base platfrom for all our future endeavours.
            We can poll among ourselves to choose the future projects.
        </p>
        <Icon type="rocket" style={style.icons}/>
        <div className="technologies-used" style={style.para}>
            <Tag color="green" style={style.technologiesUsed}>React</Tag>
            <Tag color="green" style={style.technologiesUsed}>Redux</Tag>
            <Tag color="green" style={style.technologiesUsed}>Node</Tag>
            <Tag color="green" style={style.technologiesUsed}>JS</Tag>
            <Tag color="green" style={style.technologiesUsed}>Lint</Tag>
        </div>
        <Icon type="hourglass" style={style.icons}/> 
        <p style={style.para}>
            30 days
        </p>     
      </div>        

    )
  }
}

PollCard.propTypes = {};

export default PollCard;