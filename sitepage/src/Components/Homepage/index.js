import React from 'react';
import './Homepage.css';
import LinkedIn from '../IMG/linkedin.png'
import Email from '../IMG/email.png'
import Github from '../IMG/github-logo.png'
import Link from '../IMG/broken-link.png'




function Homepage() {
    return (
        <div className='homepage'>
            <div className='mainpage'>
                <div className='cloud1'></div>
                <div className='engineer'><div className='headIMG-1'></div><p>I'm Felicity</p><p className='engineer-1'>a Software engineer</p></div>
                <div className='aboutpage'>
                    <p className='hi'>Hi, my name is</p>
                    <p className='felicity'>Felicity Zhang</p>
                    <p className='subtitle'>I build things for the web.</p>

                    <p className='about-content'>I'm a software engineer based in New York City, specializing in building <br />(and occasionally designing) exceptional websites, applications, and <br />everything in between.

                    </p>
                    <button className="getintouch "><a href='#GetInTouch'> Get In Touch</a></button>


                    <p className='engineer'>A Front-end Software Engineer</p>
                </div>

                <div className='cloud2'></div>
                <div className="mainimg"></div>
            </div>

            {/* -----------------------About me-------------------------- */ }
            <div id='About' className='aboutme-page'>
                <div className='aboutme-main'>
                    <div className='aboutme-titile-contianer'>
                        <p className='about-title'>About Me</p>
                        <p className='line'></p>

                    </div>
                    <div className='aboutme-container'>
                        <div className='aboutme-content-div'>
                            <p className='main-color'>Hello! I'm Felicity, a software engineer based in New York City.</p>
                            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                            <p>Shortly after graduating from <span style={ { fontWeight: "bold" } }>New York University</span>, I joined the Software Engineering Booth camp at General Assembly where I studied on a wide variety of interesting and meaningful projects. </p>
                            <p>Here are a few technologies I've been working with recently:</p>
                            <div className='skills'>
                                <div>
                                    <p>- JavaScript (ES6+)</p>
                                    <p>- HTML CSS(Bootstrap scss)</p>
                                    <p>- React(redux styled-components)</p>
                                </div>
                                <div className='margin-left-100'>
                                    <p>- Node.js</p>
                                    <p>- PostgreSQL</p>
                                    <p>- RESTful API</p>
                                </div>
                            </div>
                        </div>
                        <div className='aboutme-img'>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------------------projects main------------------------- */ }
            <div className='project-page'>
                <div id='Project' className='project-div'>
                    <div className='aboutme-titile-contianer'>
                        <p className='about-title'>Some Things I've Built</p>
                        <p className='line'></p>
                    </div>
                    <div>
                        <div className='singleProject-div'>
                            <div className='singleProject-img img-chinatown'></div>
                            <div class='project-content-div'>
                                <p className='project-name'>Send Chinatown love</p>
                                <p className='project-description'>As a front-end software engineer, I worked with our team members to create a digital community for Chinatown’s restaurants to sustain themselves during the COVID-19 pandemic and beyond.</p>
                                <p className='main-color'>React(Redux), Ruby on Rails, Styled-Components</p>
                                <div><a href='https://github.com/sendchinatownlove/sendchinatownlove.github.io'><img className='bitmap-2' src={ Github } /></a>
                                    <a href='https://www.sendchinatownlove.com/'><img className='bitmap-2' src={ Link } /></a></div>
                            </div>
                        </div>
                        <div className='singleProject-div reverse-item'>
                            <div className='singleProject-img img-chumely '></div>
                            <div class='project-content-div reverse-text-align'>
                                <p className='project-name'>Chumely Restaurant</p>
                                <p className='project-description padding-left-0'>Chumley's is a redesigned restaurant Website. In this project, our team of 4 worked with Ux design team. Interacted with designers regularly throughout the design process. Built out designs as closely as possible to what the design team has worked on.</p>
                                <p className='main-color'>Zeplin, React, CSS (flexbox)</p>
                                <div><a href='https://github.com/FelicityZhang/Chumleys'><img className='bitmap-2' src={ Github } /></a>
                                    <a href='http://chumleys-app.surge.sh/'><img className='bitmap-2' src={ Link } /></a></div>
                            </div>
                        </div>
                        <div className='singleProject-div'>
                            <div className='singleProject-img img-imhere'></div>
                            <div class='project-content-div'>
                                <p className='project-name'>I'm Here: Tasks Helper</p>
                                <p className='project-description'>I'm here is a full stack web application connecting those seeking services with those providing labor and help. I worked in a team of 4 to ideate user stories in order to design and develop the platform. it's took charge all API and database schema designs. </p>
                                <p className='main-color'>ReactJS, NodeJS, Express.JS </p>
                                <div><a href='https://github.com/FelicityZhang/imhere'><img className='bitmap-2' src={ Github } /></a>
                                    <a href='http://imhere.surge.sh/'><img className='bitmap-2' src={ Link } /></a></div>                            </div>
                        </div>
                        <div className='singleProject-div reverse-item'>
                            <div className='singleProject-img img-shopshop'></div>
                            <div class='project-content-div reverse-text-align'>
                                <p className='project-name'>Shopshop.com</p>
                                <p className='project-description padding-left-0'>Shopshop is an e-commerce platform featuring a searchable catalogue of fashionable clothes. Used Etsy’s API to fetch data from its database of clothing and built functionality to help users search and find items via a user- friendly interface.</p>
                                <p className='main-color'>ReactJS,  CSS(Flexbox),  RESTful API</p>
                                <div><a href='https://github.com/FelicityZhang/SHOPSHOP'><img className='bitmap-2' src={ Github } /></a>
                                    <a href='http://shopshopshop.surge.sh/'><img className='bitmap-2' src={ Link } /></a></div>                            </div>
                        </div>
                        <div className='singleProject-div'>
                            <div className='singleProject-img img-gigagent'></div>
                            <div class='project-content-div '>
                                <p className='project-name'>Gig Artists Agent</p>
                                <p className='project-description '>GigAgent is a web-platform aiming to help models, actors, and others working in the entertainment-industry by connecting them to opportunities in their vicinity. Designed and built the entire full stack application in 1 week as final project.</p>
                                <p className='main-color'>React.js, Express.js, Ruby on Rails</p>
                                <div><a href='https://github.com/FelicityZhang/gig_agent'><img className='bitmap-2' src={ Github } /></a>
                                    </div>                           
                           </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            {/* ------------------------Projects------------------------- */ }
            <div id='Project' className='project-main'>
                <p id='Project' className='text-project'>Development Case Studies</p>
                <div className='projects'>
                    <div className='project-container'>
                        <div className='project-img img-chinatown'></div>
                        <p className='project-title'>Send Chinatown Love</p>
                        <div className='description'>
                            <p className='project-content'>As a front-end software engineer, I worked with our team members to create a digital community for Chinatown’s restaurants to sustain themselves during the COVID-19 pandemic and beyond.</p>
                        </div>
                        <div className='learnmore-button'><a href='https://www.sendchinatownlove.com/'>Learn More</a></div>
                    </div>
                    <div className='project-container'>
                        <div className='project-img img-chumely'></div>
                        <p className='project-title'>Chumely Restaurant</p>
                        <div className='description'>
                            <p className='project-content'>Chumley's is a redesigned restaurant Website. In this project, our team of 4 worked with Ux design team. Interacted with designers regularly throughout the design process. Built out designs as closely as possible to what the design team has worked on.</p>
                        </div>
                        <div className='learnmore-button'><a href='https://github.com/FelicityZhang/Chumleys'>Learn More</a></div>

                    </div>
                    <div className='project-container'>
                        <div className='project-img img-imhere '></div>
                        <p className='project-title'>I'm here: Tasks Helper</p>
                        <div className='description'>
                            <p className='project-content'>Built a full stack web application connecting those seeking services with those providing labor and help. Worked in a team of 4 to ideate user stories in order to design and develop the platform. Took charge all API and database schema designs.</p>
                        </div>
                        <button className='learnmore-button' ><a href='https://github.com/FelicityZhang/imhere'>Learn More</a></button>

                    </div>
                   
                    <div className='project-container'>
                        <div className='project-img img-gigagent'></div>
                        <p className='project-title'>GIG Artists Agent</p>
                        <div className='description'>
                            <p className='project-content'>GigAgent is a web-platform aiming to help models, actors, and others working in the entertainment-industry by connecting them to opportunities in their vicinity. Designed and built the entire full stack application in 1 week as final project.</p>
                        </div>
                        <button className='learnmore-button'><a href='https://github.com/FelicityZhang/gig_agent'>Learn More</a></button>

                    </div>
                    <div className='project-container'>
                        <div className='project-img img-shopshop'></div>
                        <p className='project-title'>Shopshop.com</p>
                        <div className='description'>
                            <p className='project-content'>Shopshop is an e-commerce platform featuring a searchable catalogue of fashionable clothes. Used Etsy’s API to fetch data from its database of clothing and built functionality to help users search and find items via a user- friendly interface.</p>
                        </div>
                        <button className='learnmore-button'><a href='https://github.com/FelicityZhang/SHOPSHOP'>Learn More</a></button>

                    </div>
                </div>
            </div>
            <div id='GetInTouch' className="displayQuote">
                <div className='Dimmer-Box'>
                    <div className='DimmerContainer'>

                        <div className='-Bedford-St-New-Y'>
                            New York, New York
               </div>
                        <div className='socialMedia'>
                            <div className='sociallogo'><a href="https://www.linkedin.com/in/tofelicityzhang/"><img className='Shape' src={ LinkedIn } /><span className="tooltiptext">Linkedin</span></a></div>
                            <div className='sociallogo'><a href="mailto:xz1574@nyu.edu"><img className='Shape' src={ Email } /><span className="tooltiptext">Email</span></a></div>
                            <div className='sociallogo'><a href="https://github.com/FelicityZhang"><img className='Shape' src={ Github } /><span className="tooltiptext">Github</span></a></div>

                        </div>
                        <div className='phone'>(347) 570-2606</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
