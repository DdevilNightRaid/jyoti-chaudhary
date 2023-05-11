import Button from '@mui/material/Button';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import './contactStyles.css'
const Contact = () => {
    return (
        <div id='contact' className="contactBody">
            <section className="csection0">
                <h1 className="cHeading darkColor">Start Learning Now</h1>
            </section>
            <section className="csection1">
                <div className="box0">
                    <a href={'https://www.facebook.com/profile.php?id=100025534297318'}>
                        <FaFacebookSquare className='darkColor'/>
                    </a>
                </div>
                <div className="box1">
                    <strong>+ 977 9826140199</strong>
                    <a href="tel: 9826140199">
                        <Button 
                        variant="contained"
                        sx={
                            {
                                fontWeight: "800",
                                backgroundColor: "#07689F"
                            }
                        }
                        >Call Now</Button>
                    </a>
                </div>
                <div className="box2">
                    <a href={'https://www.instagram.com/Jyotichaudhary693/'}>
                        <FaInstagramSquare className='darkColor'/>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact