import React, { Component } from 'react'

export default class Introhome extends Component {
    render() {
        return (
            <div>
        <section id="intro">
          <div className="intro-container ">
            <h1 className="mb-4 pb-0">The Annual<br /><span>Marketing</span> Conference</h1>
            <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
            <a href="#about" className="about-btn scrollto">About The Event</a>
          </div>
        </section>
        {/* <main id="main">
        </main> */}
        </div>
        )
    }
}
