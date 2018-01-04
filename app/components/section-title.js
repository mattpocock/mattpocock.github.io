import React from 'react';
import PropTypes from 'prop-types';

export class SectionTitle extends React.Component {
    render() {
        return (
            <div className={ this.props.noBottom ?
                                "container-fluid section-title__backdrop no-bottom-border" : 
                                "container-fluid section-title__backdrop" }>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 title">
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    noBottom: PropTypes.bool
}