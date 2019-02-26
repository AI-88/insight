import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomerData } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchCustomerData();
  }

  render() {
    console.log(this.props.customer_data);
    const { data } = this.props.current_user;
    return (
      <div>
        <h1>Welcome, {data.firstName}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ current_user, customer_data }) => {
  return {
    current_user,
    customer_data
  };
};

export default connect(mapStateToProps, { fetchCustomerData })(Home);
