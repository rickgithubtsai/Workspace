 import React from 'react';
 import SubMessage from './SubMessage';
 import _ from 'lodash';
 const MessageBox = React.createClass({
    
    handleAdd: function(e) {
      console.log(this);
      var newMessage = this.refs.newMessage.getDOMNode().value;
      var newMessages = this.state.messages.concat([newMessage]);
      this.setState({
        messages: newMessages
      });
    },

    handleDelete: function(item) {
      console.log(item);
      var newMessages = _.without(this.state.messages, item);
      this.setState({
        messages: newMessages
      });
    },

    getInitialState: function () {
      return {     
        titleMessage: 'Hello, World',
        messages: [
                    'I like the world',
                    'Coffee flavored ice cream is highly underrated',
                    'My spoon is too big',
                    'Tuesday is coming. Did you bring your coat?',
                    'I am a banana',
                  ]
      }
    },

    render: function() {
      var messages = this.state.messages.map(
        function(message) {          
          return <SubMessage message={message}  onDelete={this.handleDelete} />
        }.bind(this)
      );
      return (
        <div>
          <h2>{ this.state.titleMessage }</h2>
          <input ref="newMessage" type="text"  />
          <button onClick={this.handleAdd}>Add</button>
          { messages }
        </div>
      );
    }
  });

 export default MessageBox;
