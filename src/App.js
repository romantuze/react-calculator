import React, { Component } from 'react';
import Calculator from './Calculator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class App extends Component {
  render() {
    return (
        <Calculator current={this.props.current} {...this.props.actions} />
    );
  }
}

const mapStateToProps = state => ({
  current: state.current
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
