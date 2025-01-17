import React from 'react'
import './contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter Your E-mail here' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <EmailIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact
