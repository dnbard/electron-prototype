var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function () {
        return <div>Hello Electron</div>;
    }
});

ReactDOM.render(<MyComponent /> , document.querySelector('#react-app'));
