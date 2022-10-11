import React, { Component } from 'react';

const withCounter = (OrginalComponent) => {
    class NewCounter extends Component {
      state = {
        count: 0,
      };
      handleClick = () => {
        this.setState((prev) => ({ count: prev.count + 1 }));
      };
      render() {
        return <OrginalComponent count={this.state.count} handleClick={this.handleClick}/>;
      }
    }
    return NewCounter;
} 

export default withCounter;