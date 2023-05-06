import Button from '@mui/material/Button';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import './contactStyles.css'
const Contact = () => {
    return (
        <div id='contact' className="contactBody">
            <section className="csection0">
                <h1 className="cHeading">Book Your Class Now</h1>
            </section>
            <section className="csection1">
                <div className="box0">
                    <a href={'https://www.facebook.com/profile.php?id=100090820037966'}>
                        <FaFacebookSquare />
                    </a>
                </div>
                <div className="box1">
                    <strong>+ 977 9821319306</strong>
                    <a href="tel: 9821319306">
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
                    <a href={'https://www.facebook.com/profile.php?id=100090820037966'}>
                        <FaInstagramSquare />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact