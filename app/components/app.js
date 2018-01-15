import React from 'react';
import { Bio } from './bio.js';
import { Skills } from './skills.js';
import { Portfolio } from './portfolio.js'
import { SectionTitle } from './section-title.js';
import { Footer } from './footer.js';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillArr: [
                {
                    image: "",
                    title: "Wordpress & SEO",
                    listArr: [
                        "Comfortable in any CMS tool, especially Wordpress",
                        "Creating customizable themes from scratch",
                        "Five years experience attracting clients through SEO",
                        "Five separate domains at number one in competitive keywords"
                    ]
                },
                {
                    image: "",
                    title: "Front End",
                    listArr: [
                        "Javascript: Skills in Angular, React, Vanilla and jQuery",
                        "CSS: Very comfortable in SASS, or normal CSS",
                        "Bootstrap: Skilled in responsive design, both with and without Bootstrap",
                        "Compilers: Experience in Babel/Webpack and Node.js"
                    ]
                },
                {
                    image: "",
                    title: "Back End",
                    listArr: [
                        "PHP: Basic knowledge of PHP, especially within Wordpress themes and plugins",
                        "MySQL: Experience with storing user data and security practices",
                        "Java: Basic knowledge within an Android context"
                    ]
                }
            ],

            portfolio: [
                {
                    title: "Foxglove & Ginger",
                    desc: "A mouth-watering site for my local Indian restaurant",
                    imageArr: [
                        "/img/foxginger1.JPG",
                        "/img/foxginger2.JPG",
                        "/img/foxginger3.JPG",
                        "/img/foxginger4.JPG",
                        "/img/foxginger5.JPG"
                    ],
                    separate: false,
                    tags: [
                        "jQuery",
                        "SASS",
                        "Node.JS",
                        "PHP",
                        "Wordpress"
                    ],
                    features: [
                        {
                            title: "Animated Menu",
                            desc: "jQuery and CSS helped create a sleek user experience, from the buttons to the shopping cart.",
                            image: ""
                        },
                        {
                            title: "PHP Contact Form",
                            desc: "PHP and AJAX sends the order directly to the restaurant, and asks the user to wait for confirmation.",
                            image: ""
                        },
                        {
                            title: "Maintainable File Structure",
                            desc: "Combining Wordpress with ES6 and a Webpack compiler makes for incredibly easy-to-maintain code.",
                            image: ""
                        }
                    ]
                },
                {
                    title: "Crack A Pack",
                    desc: "A booster simulator for the Magic: The Gathering community",
                    imageArr: [
                        "/img/crackapack.JPG",
                        "/img/crackapack3.JPG",
                        "/img/crackapack2.JPG"
                    ],
                    separate: true,
                    tags: [
                        "Node.JS",
                        "ReactJS",
                        "RESTful API",
                        "Bootstrap"
                    ],
                    features: [
                        {
                            title: "RESTful API",
                            desc: "Used the Javascript SDK from magicthegathering.io to access their JSON database of cards.",
                            image: ""
                        },
                        {
                            title: "Mobile Touch Events",
                            desc: "Exceptionally mobile-responsive: has mobile touch events for swiping cards left and right.",
                            image: ""
                        },
                        {
                            title: "Loading Screen",
                            desc: "Custom loading screen: a card called 'Time To Reflect' slowly turns from grayscale to colour.",
                            image: ""
                        }
                    ]

                },
                {
                    title: "AccentLab",
                    desc: "The ultimate accent-learning platform",
                    imageArr: [
                        "/img/accentlab2.JPG",
                        "/img/accentlab3.JPG",
                        "/img/accentlab4.JPG",
                        "/img/accentlab5.JPG"
                    ],
                    separate: true,
                    tags: [
                        "jQuery",
                        "Bootstrap",
                        "PHP",
                        "MySQL"
                    ],
                    features: [
                        {
                            title: "Phonetic Translator",
                            desc: "Over 3 months, I created a Javascript phonetic translator using Carnegie Mellon's online dictionary.",
                            image: ""
                        },
                        {
                            title: "User Data Storage",
                            desc: "Used MySQL to store the user's data, such as logging their practice sessions and saving their dashboard.",
                            image: ""
                        },
                        {
                            title: "Soon:    AccentLab 2.0",
                            desc: "This was my first ever project. As such, it got a bit sloppy. Currently refactoring the entire site to meet ES6 standards.",
                            image: ""
                        }
                    ]
                },
                {
                    title: "Freelancer",
                    desc: "A customizable Wordpress theme, built from scratch",
                    imageArr: [
                        "/img/freelancer1.JPG",
                        "/img/freelancer2.JPG",
                        "/img/freelancer3.JPG",
                        "/img/freelancer4.JPG"
                    ],
                    separate: false,
                    tags: [
                        "Wordpress",
                        "SASS",
                        "NO Bootstrap",
                        "PHP"
                    ],
                    features: [
                        {
                            title: "No Frameworks",
                            desc: "Set myself the challenge to design the site from the ground up: no Wordpress Theme, and no Bootstrap.",
                            image: ""
                        },
                        {
                            title: "Mobile Responsive",
                            desc: "Worked using only SASS - mimicking Bootstrap's breakpoints - to make the site fully mobile responsive.",
                            image: ""
                        },
                        {
                            title: "Customisation",
                            desc: "The whole site is fully configurable, using Wordpress's native customisation options.",
                            image: ""
                        }
                    ]
                },
                {
                    title: "Canary Care (Demo)",
                    desc: "Fully animated site in AngularJS, hosted on Github.",
                    imageArr: [
                        "/img/canarycare.gif"
                    ],
                    separate: true,
                    tags: [
                        "Angular JS",
                        "Typescript",
                        "GitHub"
                    ],
                    features: [
                        {
                            title: "AngularJS",
                            desc: "Used an Angular architecture: great for making encapsulated, maintainable components.",
                            image: ""
                        },
                        {
                            title: "Animations",
                            desc: "Beautiful CSS animations as the page loads make for a professional, dynamic feel.",
                            image: ""
                        },
                        {
                            title: "Hosted in Github",
                            desc: "Versioned, hosted, and compiled with Github's integration with AngularJS. Easy as pie.",
                            image: ""
                        }
                    ]

                }
            ]
        }
    }
    render() {
        return (
            <section>
                <div className="container-fluid title__backdrop">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 title">
                                <h1>Matt Pocock</h1>
                                <h2>Web Developer | Expert Voice Coach</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 bio">
                            <Bio/>
                        </div>
                    </div>
                </div>
                <SectionTitle title="Skills"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 skills">
                            <Skills
                            skillArr={this.state.skillArr}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid portfolio__backdrop">
                    {this.state.portfolio.map(function(item, i) {
                        return (
                            <Portfolio key={i}
                                title={item.title}
                                desc={item.desc}
                                tags={item.tags}
                                separate={item.separate}
                                imageArr={item.imageArr}
                                features={item.features}/>
                        )
                    })}
                </div>
                <Footer/>
            </section>
        )
    }
}