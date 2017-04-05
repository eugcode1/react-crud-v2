"use strict";

class HomePageComponent extends React.Component {
    componentDidMount() {
        $('.page-header h1').text('Home');
    }

    componentWillUnmount() {}
    render() {
        return(
            <div>
                <h1 className="text-center">Welcome to <span className="pink">Floral Heaven</span>!</h1>
            </div>

        );
    }
}