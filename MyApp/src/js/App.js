import React from 'react';
 import MessageBox from './components/MessageBox';
const App = React.createClass({

    render() {
        return (
        	<div>    
            	<h1>Hello, world!!!.</h1>
            	<MessageBox />
            </div>
        );
    }

});

export default App;