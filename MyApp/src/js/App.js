import React from 'react';
import MessageBox from './components/MessageBox';
import Dashboard from './components/Dashboard';
const App = React.createClass({

    render() {
        return (
        	<div>    
            	<h1>Hello, world!!!.</h1>
            	<MessageBox />
            	<Dashboard />
            </div>
        );
    }

});

export default App;