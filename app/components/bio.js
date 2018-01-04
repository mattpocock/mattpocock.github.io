import React from 'react';

export class Bio extends React.Component {
    render() {
        return (
            <div>
                <div className="col-xs-2 col-sm-3 col-sm-offset-0 col-md-offset-2 bio__img-container">
                    <img src="https://pbs.twimg.com/profile_images/751696248047009792/_HiVTyjR_400x400.jpg"/>
                </div>

                <div className="col-xs-10 col-sm-9 col-md-5 bio__text-container">
                    <h3>About Me</h3>
                    <p>My name's Matt. I'm a conscientious, user-focused developer with exceptional communication skills.
                        I've got skills in Javascript, jQuery, SASS, HTML5 and Wordpress, and I'm looking for a full-time role at a junior level.</p>
                    <p>Before I became a developer, I taught over 4,000 lessons as a voice coach: public speaking, accents and communication.</p>
                    <p>I've worked with clients from the BBC, NHS, local Government, ITV, Sky, Time Warner - among many others.
                    I shared a stage with Channel 4's Jon Snow at Accenture's annual conference to 2,000 people.</p>
                    <p>I hold a Masters in Voice (Distinction) from Guildford School of Acting, and a 1:1 Drama BA from Exeter University.</p>
                    <p>I found joy in teaching from communicating difficult ideas in simple terms,
                        and good design always starts with good communication.</p>
                    <p>I'm looking forward to bringing my experience to bear on web development,
                        and I hope we can work together.
                        </p>
                </div>
            </div>
        )
    }
}