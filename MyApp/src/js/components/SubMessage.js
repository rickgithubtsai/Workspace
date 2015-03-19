import React from 'react';
const SubMessage = React.createClass({
	handleDelete: function () {
      console.log(this.props.onDelete);
      this.props.onDelete(this.props.message);
    },

	propTypes: {
      message: React.PropTypes.string.isRequired
    },

    getDefaultProps: function() {
      return {
        message: 'Its good to see you'
      };
    },

    render: function() {
      return (
        <div>
			{this.props.message}
			<button onClick={this.handleDelete}>x</button>
        </div>
      );
    }
});

export default SubMessage;
