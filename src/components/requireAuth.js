import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    //our component just got rendered
    componentDidMount(){
      this.shouldNavigateAway();
    }

  //our component recieved new set of props, ie. updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent />''
    }
  }
  //mapStateToProps is always at end of clas, right above the class return statement
  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
