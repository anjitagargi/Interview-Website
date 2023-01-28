import React from "react";
import './Contact.css'
import { useState } from "react";
import contact from '../../assets/contact1.png'
import call from '../../assets/call.png';
import mail from '../../assets/mail.png';
import loc from '../../assets/loc.png';
import linkd from '../../assets/link.png';
import insta from '../../assets/insta.png';
import twit from '../../assets/twit.png';

const Contact = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [text, settext] = useState("")

    return (
        <div className="contact">
            <div className="contact_img">
     <img src={contact} alt="" height={500} width={500}/>
            </div>
            <div className="box">
                <div className="head">
                    <h2>Contact us</h2>
                    <p> Our geeks are in full swing relentlessly coading our sleek new app to bring it out to you asps</p>
                </div>

                <div className="form">
                    <form>
                        <div className="ele">
                            <label className="label">Name</label><br></br>
                            <input type='text'
                                className="input-box"
                                name="name"
                                value={name}
                                placeholder='Your Name'
                                onChange={(e) => setname(e.target.value)} /><br></br>

                        </div>
                        <div className="ele">
                            <label className="label">Email Address</label><br></br>
                            <input type='email'
                                className="input-box"
                                value={email}
                                placeholder="Email Address"
                                onChange={(e) => setemail(e.target.value)} /><br></br>
                        </div>
                        <div className="ele">
                            <label className="label">Message</label><br></br>
                            <textarea type='textarea'
                                className="input-area"
                                value={text}
                                placeholder='Type your Message Here'
                                onChange={(e) => settext(e.target.value)} /><br></br>
                        </div>
                        <div>
                            <button className="btn">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="con">
                    <img src={call} alt='' />
                    <p>+(123) 456 7890</p><br></br>

                    <img src={mail} alt='' />
                    <p>xyz@gmail.com</p><br></br>
                    <img src={loc} alt='' />
                    <p>NSUT Dwarka-Delhi</p>
                </div>
                <div className="social">
                    <a href="/"><img src={linkd} alt='' /></a>
                    <a href="/"><img src={insta} alt='' /></a>
                    <a href="/"><img src={twit} alt='' /></a>
                </div>
            </div>
        </div>

    )
}
export default Contact