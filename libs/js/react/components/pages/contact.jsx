"use strict";

class ContactPageComponent extends React.Component {
    componentDidMount() {
        $('.page-header h1').text('CONTACT');
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return(
            <div>
                <h1 className="text-center">Welcome to <span className="pink">Floral Heaven</span>!</h1>
            </div>

        );
    }
}