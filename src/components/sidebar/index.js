import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import TTLogo4 from '../../assets/images/TTLogo0.PNG'
import TTLogoSub from '../../assets/images/Thokozani.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
   const [showNav, setShowNav] = useState(false)



return (
    <div className="nav-bar">
       <Link 
       className="logo" 
       to="/" 
       onClick={() => setShowNav(false)} >
        <img src={TTLogo4} alt='logo' />
        <img className='TTLogo-Sub' src={TTLogoSub} alt='Thokozani' /> 
       </Link>
       <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
        onClick={() => setShowNav(false)}
        activeclassname="active" 
        to="/">
            <FontAwesomeIcon icon={faHome} color="#895061" />
        </NavLink>
        <NavLink 
        onClick={() => setShowNav(false)} 
        activeclassname="active" 
        className="about-link" 
        to="/about">
            <FontAwesomeIcon icon={faUser} color="#895061" />
        </NavLink>
        <NavLink 
        onClick={() => setShowNav(false)} 
        activeclassname="active" 
        className="contact-link" 
        to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#895061" />
        </NavLink>
        <FontAwesomeIcon 
         onClick={() => setShowNav(false)}
         icon={faClose}
         color="#0677A1"
         size='3x'
         className='close-icon' />
       </nav>
       <ul>
         <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href='http://linkedin.com/in/thokozani-tshabalala-702557242'>
                <FontAwesomeIcon icon={faLinkedin} color="#895061" />
            </a>
         </li>
         <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href='http://github.com/Zaynwolfpack'>
                <FontAwesomeIcon icon={faGithub} color="#895061" />
            </a>
         </li>
       </ul>
       <FontAwesomeIcon 
         onClick={() => setShowNav(true)}
         icon={faBars}
         color="#0677A1"
         size='3x'
         className='hamburger-icon' />
    </div>
)
}
export default Sidebar