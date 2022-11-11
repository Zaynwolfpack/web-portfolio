import './index.scss';
import TTLogo from '../../../assets/images/TTLogo.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import  DrawSVGPlugin  from 'gsap-trial/all';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
            .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
            .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20
        })
        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])
        
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={TTLogo} alt="TT"/>
              
           </div>
       )
   }
export default Logo