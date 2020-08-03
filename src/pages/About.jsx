import React from 'react'
import mypic from '../images/shahzaib.JPG'

const About = ()=>{
    return(
        <section id='1' data-aos='fade-right' className='about'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>

                        <div className='col-lg-6 mt-5 order-1 order-lg-2 header-img'>
                            <img src={mypic} height='450' />
                        </div>


                        <div className='col-md-6 pt-5 order-2 order-1'>
                            <h1 className='text-center'><strong>About</strong> </h1>
                            <div>
                                <p>
                                    Hello! I'm Shahzaib, front-end Web
                                    Developer with 3 month of experience in designing and developing
                                    user interfaces, and eCommerce technologies.
                                    Proven ability in optimizing web functionality that improve data
                                    retrieval and workflow efficiencies using modern frontend. <br />
                                    <br /> Currently i am in 1st semester of my bachelors from SMIU
                                    University of Pakistan.
                                 </p>
                                <br />
                                <p>
                                    Here are a few technologies I've been working with recently:
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5 & (S)CSS3</li>
                                    <li>ReactJS</li>
                                    <li>Bootstrap</li>
                                    <li>Wordpress</li>
                                    <li>Gatsby</li>


                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}
export default About;