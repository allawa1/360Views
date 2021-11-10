import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <div className='Socials'>
                <h2>Follow us @ &nbsp;</h2>
                <SocialIcon url="https://www.instagram.com/three60views/" bgColor="#A337B5"/>
            </div>
        )
    }
}


export default NavBar;