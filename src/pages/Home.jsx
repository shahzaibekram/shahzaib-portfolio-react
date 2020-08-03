import React from 'react'
import headimg from '../images/header.png'

const Home = () => {
    return (
        <section className='d-flex align-items-center home' id='head'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row' data-aos='fade-right'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column'>
                            <h1><strong>Hey Folks!</strong> </h1>
                            <h3 className='my-3'>I am Front-End Web Developer</h3>

                            <div className='mt-3'>
                                <a href="#2" className='btn-read-more'>Read More</a>
                            </div>
                        </div>

                        <div className='col-lg-6 order-1 order-lg-2 header-img' data-aos='fade-left'>
                            <img src={headimg} className='headpic' height='550' />
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Home;