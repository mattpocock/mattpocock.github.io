import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer__backdrop">
                <div className="col-xs-12 footer">
                    <a href="mailto:mpocock@me.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                    <a href="https://www.twitter.com/mpocock1"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}