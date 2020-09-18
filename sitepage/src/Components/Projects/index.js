import React, { Component } from 'react';
import './Projects.css';
import img1 from '../IMG/chumely.png'
import img2 from '../IMG/shopshop.png'
import img3 from '../IMG/imhere.png'
import img4 from '../IMG/agent.png'


class Projects extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            counter: 0
        }
    }

    handleNextBtn() {
        if ( this.state.counter > 3 ) return
        if ( this.state.counter >= 3 ) {
            this.setState( {
                counter: this.state.counter - 3
            } )
        }
        else {
            this.setState( {
                counter: this.state.counter + 1
            } )
        }
    }

    handlePrevBtn() {
        if ( this.state.counter <= 0 ) return
        if ( this.state.counter <= 3 ) {
            this.setState( {
                counter: this.state.counter - 1
            } )
        }
    }

    // handleClick1() {
    //     this.setState( { counter: 0 } )
    // }

    render() {
        return (
            <div className='projects'>
                <div className='slidecontainer middle'>
                    <div className='Slides' style={ { 'transform': `translateX(-${ this.state.counter * 900 }px)` } }>
                        <img className='Slide' src={ img1 } alt='' />
                        <img className='Slide' src={ img2 } alt='' />
                        <img className='Slide' src={ img3 } alt='' />
                        <img className='Slide' src={ img4 } alt='' />
                    </div>
                </div>
                <div className='navigation'>
                    <button id='prevBtn' onClick={ () => this.handlePrevBtn() }>Prev</button>
                    <button id='nextBtn' onClick={ () => this.handleNextBtn() }>Next</button>
                    <p>JSslides</p>
                </div>

            </div>
        )
    }
}

export default Projects;
