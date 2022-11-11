import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
         return  setLetterClass('text-animate-hover')
       }, 3000)
    }, [])

    return (
       <div id="page">
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
                <AnimatedLetters
                 letterClass={letterClass}
                 strArray={"About me".split("")}
                 idx={15} />
            </h1>
            <p>
              I'm a very ambitious frontend developer looking for a role where I can be creative and solve problems that improve the publics digital interaction with the company.  
            </p>
            <p>
               What I may lack in experience I make up in creativity and a large appetite for learning new skills and becoming as great as possible at developing the most interesting websites while helping the business grow 
            </p>
            <p>

            </p>
          </div>
          <div className='stage-cube-cont'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='cube-spinner'>
             <div className='face1'>
                <FontAwesomeIcon icon={faReact} color="#DD0031" />
             </div>
             <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
             </div>
             <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className='face4'>
                <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
             </div>
             <div className='face5'>
                <FontAwesomeIcon icon={faReact} color="#EFD81D" />
             </div>
             <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
             </div>
            </div>
          </div>
        </div>
        <Loader  type='pacman'/>
       </div>
    )
}

export default About