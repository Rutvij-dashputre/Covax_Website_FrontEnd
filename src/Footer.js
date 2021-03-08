/* import React from "react";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>

            <footer className="bg-light text-center"  >
                <p>Copyright © 2021 </p>
            </footer>
            <div className='input-areas'>
                <form>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <button buttonStyle='btn--outline'>Subscribe</button>
                </form>
            </div>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>

                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>

                </div>
                <div class='social-icons'>
                    <Link
                        class='social-icon-link facebook'
                        to='/'






                        
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <a href="https://www.facebook.com/"><i class='fab fa-facebook-f' /> </a>
                    </Link>
                    <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <a href="https://www.instagram.com/"><i class='fab fa-instagram' /></a>
                    </Link>
                    <Link
                        class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <a href="https://www.youtube.com/"><i class='fab fa-youtube' /></a>
                    </Link>
                    <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <a href="https://www.twitter.com/"><i class='fab fa-twitter' /></a>
                    </Link>

                </div>

            </div>

        </>);
}

export default Footer;
 */

import React from 'react';
import './Footer.css';
/* import { fab } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome"; */


import { Link } from 'react-router-dom';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* 
export default function Footer1() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>

  );
}
 */



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
                <div className='input-areas'>
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
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Agency</Link>
                    </div>
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
