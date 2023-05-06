import Button from '@mui/material/Button';
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";

import './contactStyles.css'
const Contact = () => {
    return (
        <div id='contact' className="contactBody">
            <section className="csection0">
                <h1 className="cHeading">Let&apos;s Be Friends</h1>
            </section>
            <section className="csection1">
                <div className="box0">
                    <a href={'https://www.facebook.com/apil.dhakal.12'}>
                        <FaFacebookSquare />
                    </a>
                </div>
                <div className="box1">
                    <strong>+ 977 9849955795</strong>
                    <a href="tel: 9849955795">
                        <Button 
                        variant="contained"
                        sx={
                            {
                                fontWeight: "800",
                                backgroundColor: "#06d5a0"
                            }
                        }
                        >Call Now</Button>
                    </a>
                </div>
                <div className="box2">
                    <a href={'https://www.youtube.com/channel/UCRoReoJAQyp2Ldh1f0LEyvw/featured'}>
                        <FaYoutube />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact