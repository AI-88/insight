import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Statistic, Icon, Spin } from 'antd';
import { fetchSubscriptionsData } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchSubscriptionsData();
  }

  renderSubscriptionsData() {
    const { data: { data }, isFetching } = this.props.subscriptions_data;
    if (isFetching) {
      return (
        <div className='spinner-container'>
          <Spin
            size='large'
            indicator={<Icon type='loading' />}
          />
        </div>
      );
    }
    if (data) {
      return (
        <div>
          <Statistic
            title='Active Subscriptions'
            value={data.length}
            prefix={<Icon type='team' />}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    console.log(this.props.subscriptions_data);
    return (
      <div>{this.renderSubscriptionsData()}</div>
    );
  }
}

const mapStateToProps = ({ subscriptions_data }) => {
  return {
    subscriptions_data
  };
};

export default connect(mapStateToProps, { fetchSubscriptionsData })(Home);
