import "./index.scss";
import Animatedletters from "../AnimatedLetters"
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
         return  setLetterClass('text-animate-hover')
       }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
           .sendForm(
               'service_zdif8vy',
               'template_8ct4kye',
               refForm.current,
               'iEPgTtkYTbEwQ7_1a'
           )
           .then(
             () => {
                alert('Message successfully sent!')
                window.location.reload(false)
             }, 
             () => {
                alert("Failed to send message, please try again")
             }
           )
    }


    return (
       <>
         <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <Animatedletters 
                    letterClass={letterClass}
                     strArray={"Contact Me".split("")}
                     idx={15}
                    />
                </h1>
                <p>
                    I am interested in both freelance work and employent opportunities. However, if you have any other request or questions, do not hesitate to contact me using the form below.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                          <li className="half">
                            <input className="namemail" type="text" name="name" placeholder="Name" required />
                          </li>
                          <li className="half">
                            <input className="namemail" type="email" name="email" placeholder="Email" required />
                          </li>
                          <li className="half">
                            <input className="namemail" id="subject" type="text" name="subject" placeholder="Subject" required />
                          </li>
                          <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                          </li>
                          <li>
                            <input type="submit" className="flat-button" value="SEND" />  
                          </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Thokozani Tshabalala,
                <br />
                South Africa
                <br />
                D36 Loco Road Krugersdorp, 1739 <br />
                Johannesburg <br />
                <span>tshabalalat711@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[-26.248538, 27.854032]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[-26.248538, 27.854032]}>
                        <Popup>Thokozani lives here, come over so we can talk chat about your ideas</Popup>
                    </Marker>
                </MapContainer>
            </div>
         </div>
       </>
    )
}

export default Contact