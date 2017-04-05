"use strict";

class NavComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: '',
            user: ''
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        $.get('api/logout.php', function(result) {
            if(result == 'ok')
                this.setState({
                    isLoggedIn: 'false'
                });

            window.location.href = "#login";
        }.bind(this));
    }

    componentDidMount() {
        this.serverRequest = $.get('api/is_logged_in.php', function(result) {
            this.setState({
                isLoggedIn: result
            });
        }.bind(this));

        this.serverRequest = $.get('api/get_current_user.php', function(result) {
            if(result != '') {
                var u = JSON.parse(result)[0];
                this.setState({
                    user: u
                });
            }
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        var hometitle="Floral Heaven";
        var homedesc="Order & Get Instant Delivery of Fine Flowers";
        return(
            <div className="row">
                <div className="col-md-4">
                    <p className="hs-site-title"><a href="#">{hometitle}</a></p>
                    <p className="hs-site-description">{homedesc}</p>
                </div>
                <div className="col-md-8">
                {
                    (this.state.isLoggedIn == 'false') ?
                    <nav id="hs-main-navigation"className="navbar navbar-default">
                        <div className="container">
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#login">Sign In</a></li>
                                    <li><a href="#register">Sign Up</a></li>
                                    <li><a href="#store">Store</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    :
                    <nav id="hs-main-navigation"className="navbar navbar-default">
                        <div className="container">
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="#">Home</a></li>
                                    {
                                        (this.state.user != '') ?
                                        <li><a>Welcome, {this.state.user.email}</a></li>
                                        : null
                                    }
                                    <li><a href="#logout" onClick={this.logout}>Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                }
                </div>
            </div>
        );
    }
}