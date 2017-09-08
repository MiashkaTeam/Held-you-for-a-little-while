var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav/>
                <h1>My Oh My!</h1>
            </div>
        );
    }
});

var Nav = React.createClass({
    render: function () {
        return (
            <h3>Nav component</h3>
            )
    }
});

ReactDOM.render(
    <Main/>,
document.getElementById('app')
);
