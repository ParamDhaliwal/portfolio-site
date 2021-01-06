import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Param. I am a Network Engineer with 1+ years of educational experience in Network security, Firewalls and Routers, TCP/IP communications, RSA Cryptography and skills in object oriented and web/mobile development.</p>

                <p>Have acquired experience in designing and implemeting programs with widely used programming languages and scripting tools such as, Java, C++, C, JavaScript, PHP, HTML and XML.</p>

                <p>My dream is to start my own business and become a successful entrepreneur, under software programming industry (currently working on some ideas).</p>

                <p>I am constantly learning new things. Currently those things include gaining more experience with MongoDB, React, PHP, and Node JS.</p>

                <hr/>

                <p>Feel free to reach out to me using this <a href="mailto:veerdhaliwal22@gmail.com">link</a>.</p>

                <p>The enclosed document below gives an insight on my experience, education, and skills acquired for technical career.</p>

                <a href="Param_Resume.pdf" className="button" download><i className="fas fa-download"></i>Download</a>
            </Content>
        </div>
    );
}

export default AboutPage;