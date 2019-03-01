import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Statistic } from 'antd';
import { fetchSubscriptionsData } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchSubscriptionsData();
  }

  render() {
    console.log(this.props.subscriptions_data);
    const { data } = this.props.current_user;
    return (
      <div>
        <h1>Welcome, {data.firstName}</h1>
        <Statistic
          title='Active Subscriptions'
          value={50}
          precision={2}
          suffix='%'
        />
      </div>
    )
  }
}

const mapStateToProps = ({ current_user, subscriptions_data }) => {
  return {
    current_user,
    subscriptions_data
  };
};

export default connect(mapStateToProps, { fetchSubscriptionsData })(Home);
