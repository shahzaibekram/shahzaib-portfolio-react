import React from 'react'
import Pdata from '../pages/Pdata'
import Card from './Card'

const Portfolio = ()=>{
    return(
        <>
            <div className='my-5' id='2'>
                <h1 className='text-center'><strong>Portfolio</strong> </h1>
            </div>

            <div className='container-fluid mb-5' data-aos='fade-up'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className='row'>
                        
                        {
                            Pdata.map((val, ind)=>{
                                return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                demo={val.demo}
                                />
                                
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center my-5'>
                <a href='https://github.com/Shahzaib2468?tab=repositories/' className='btn-read-more'>More</a>
            </div>
        </>
    )
}
export default Portfolio;