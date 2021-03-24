
import React from 'react';
import './Footer.css';



import { Link } from 'react-router-dom';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function Footer() {
    return (

        <div className='footer-container'>
            <div>
                {/* <FontAwesomeIcon icon={fab} /> */}
            </div>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe here to get the latest updates on covid vaccines
        </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
        </p>
                <div className='input-areas' >
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />

                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link><br />
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                  {/*   <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Agency</Link>
                    </div> */}
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>
                        <a href="https://www.instagram.com"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>

                        </Link>
                        <Link to='/'>
                        <a href="https://www.facebook.com"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>

                        </Link>
                        <Link to='/'>
                        <a href="https://www.youtube.com"
                                className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>

                        </Link>
                        <Link to='/'>
                        <a href="https://www.twitter.com" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>

                        </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            COVAX
            
                        </Link>
                    </div>
                    <small className='website-rights'>COVAX © 2021</small>
             

                </div>
            </section>
        </div>
    );
}

export default Footer;
