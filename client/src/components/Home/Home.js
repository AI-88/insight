import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { data } = this.props.current_user;
    return (
      <div>
        <h1>Welcome, {data.firstName}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ current_user }) => {
  return {
    current_user
  };
};

export default connect(mapStateToProps, null)(Home);
