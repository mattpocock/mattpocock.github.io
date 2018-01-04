import React from 'react';
import PropTypes from 'prop-types';

export class Skills extends React.Component {
    render() {
        return (
            <div className="col-xs-12 skills__container">
                {this.props.skillArr.map(function(item, index){
                    return (
                        <div key={index} className="col-xs-12 col-md-4 skills__box">
                            <img src={item.image}/>
                            <h3>{item.title}</h3>
                            <ul>
                                {item.listArr.map(function(item2, i){
                                    return (
                                        <li key={i}>
                                            <span>{item2}</span>
                                        </li>
                                    )
                                }.bind(this))}
                            </ul>
                        </div>
                    )
                }.bind(this))}
            </div>
        )
    }
}

Skills.propTypes = {
    skillArr: PropTypes.array.isRequired
}