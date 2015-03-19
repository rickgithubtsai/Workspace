 import React from 'react';
 import SubMessage from './SubMessage';

 const MessageBox = React.createClass({

    getInitialState: function () {
      return {     
        titleMessage: 'Hello, World'
      }
    },

    render: function() {
   

      return (
        <div>
          <h2>{ this.state.titleMessage }</h2>

          <SubMessage />
        </div>
      );
    }
  });

 export default MessageBox;

