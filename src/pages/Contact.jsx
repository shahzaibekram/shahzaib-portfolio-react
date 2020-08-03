import React,{useState} from 'react'
import Contactimg from '../images/contact.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
})

const InputEvent = (event)=>{
    const {name, value} = event.target;

    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value,
        }

    })
}

const formSubmit = (e)=>{
    e.preventDefault();
}

    return (
        <section id='3'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>

                            <div className='col-md-6 order-2 order-1' data-aos='fade-up'>
                                <h1 className='text-center'><strong>Contact Me</strong> </h1>

                                <form onSubmit={formSubmit}>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">
                                            Full Name
                                        </label>
                                        <input type="text" class="form-control"
                                            id="exampleFormControlInput1"
                                            name="fullname"
                                            value={data.fullname}
                                            onChange={InputEvent}
                                            placeholder="Enter your name" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">
                                            Email address
                                </label>
                                        <input type="email" class="form-control"
                                            id="exampleFormControlInput1"
                                            name="email"
                                            value={data.email}
                                            onChange={InputEvent}
                                            placeholder="name@example.com" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">
                                            Messages
                                     </label>
                                        <textarea class="form-control"
                                            id="exampleFormControlTextarea1" 
                                            rows="3"
                                            name="msg"
                                            value={data.msg}
                                            onChange={InputEvent}>
                                        </textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>

                                    <div className='icons pt-5'>
                                        <a href="https://github.com/Shahzaib2468" >
                                        <FontAwesomeIcon icon={faGithub} style={{color: 'black'}} />
                                        </a>

                                        <a href="https://www.facebook.com/shahzebikram.shah">
                                        <FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}} />
                                        </a>

                                        <a href="mailto:shahzebekram2468@gmail.com">
                                        <FontAwesomeIcon icon={faGoogle} style={{color: 'red'}} />
                                        </a>
                                    </div>
                                    
                                </form>
                            </div>

                            <div className='col-lg-6 mt-5 mb-5 order-1 order-lg-2 header-img' data-aos='fade-right'>
                                <img src={Contactimg} height='350' className='contactimg' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Contact;