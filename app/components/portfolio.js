import React from 'react';
import PropTypes from 'prop-types';

export class Portfolio extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 portfolio__header">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.desc}</p>
                        <ul className="portfolio__tags-ul">
                            {this.props.tags.map(function(item, p) {
                                return (
                                    <li key={p}>
                                        <span>{item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {this.props.features.map(function(item, i) {
                        return (
                            <div key={i} className={"col-xs-12 col-md-4"}>
                                <div className="col-xs-12 col-md-10 col-md-offset-1 portfolio__features-box">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-xs-12 portfolio__big-picture">
                            {this.props.imageArr.map(function(item, i) {
                                return (
                                    <img key={i}
                                    className={this.props.separate ? "img-separate" : ""}
                                    src={item}/>
                                )
                            }.bind(this))}
                        
                    </div>
                </div>
            </div>
        )
    }
}

Portfolio.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    bigPicture: PropTypes.string,
    tags: PropTypes.array,
    features: PropTypes.array
}