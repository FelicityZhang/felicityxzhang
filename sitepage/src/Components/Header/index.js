import React from 'react';
import './Header.css';
import Layout from 'react'
// #397B66

function Header() {
    return (
        <div id='#' className="main">
            <div className='headIMG'></div>
            <div className='buttons'>
                <div className='button'><a href='#About' className='headerbutton'>About</a></div>
                <div className='button'><a href='#Project' className='headerbutton'>Project</a></div>
                <div className='button'><a href='https://docs.google.com/document/d/1oyuZbN6GJIyXcSCV-K4pr7OW0CKDew07FWPFVhK9gJE/edit' className='headerbutton'>Resume</a></div>
            </div>


        </div>
    );
}

export default Header;
