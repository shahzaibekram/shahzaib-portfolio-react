import React from 'react'

const Card = (props) => {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text"></p>
                    <a href={props.demo} className="btn btn-primary">Live Demo</a>
                </div>
            </div>
        </div>

        
    )
}
export default Card;