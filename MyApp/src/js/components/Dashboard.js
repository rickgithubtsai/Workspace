import React from 'react';
import $ from 'jquery';
const Dashboard = React.createClass({
	loadData: function() {
    return $.get('https://gsr-demo.firebaseio-demo.com/' + this.props.url + '/.json');
  },
  componentWillMount: function() {

  },

  componentDidMount: function() {
    this.loadData().then(function(data) {
      this.setState({
        metric: data
      });
    }.bind(this));
  },

  componentWillReceiveProps: function(nextProps) {
    var lastUrl = this.props.url;
    this.loadData(nextProps.url).then(function(data) {
      this.setState({
        lastRoute: lastUrl,
        metric: data
      });
    }.bind(this));
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.metric > 100;
  },
  getInitialState: function () {
    return {
      metric: 0,
      lastRoute: ''
    };
  },

  componentWillUnmount: function() {
    $('#tip').tooltip('destroy');
  },

  render: function () {
    return (
      <div >
        {this.state.lastRoute}
        <h2>{this.state.metric}</h2>
      </div>
    );
  }
});

export default Dashboard;
