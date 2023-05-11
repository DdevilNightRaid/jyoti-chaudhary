import heroImg from '../../assets/homeImg.jpg'
import "./homeStyles.css"

// Importing Images 
import clock from "../../assets/homeImgs/clock-dynamic-color.png"
import calculator from "../../assets/homeImgs/calculator-dynamic-color.png"
import notebook from "../../assets/homeImgs/notebook-dynamic-color.png"
import plus from "../../assets/homeImgs/plus-dynamic-color.png"
const Home = () => {
    return (
        <div id='home' className="homeBody">
            <section className="hbSection0">
                <header className='defaultColor oneLiner'>Le&apos;me Guide You In Your Learning Path</header>
                <h1 className='defaultColor heading'>Hi I am <span className='focusColor font1'>Jyoti</span></h1>
                <h2 className='defaultColor heading'>Bachelor Running, Tutor</h2>
                <p className='defaultColor'>Looking for a <span className='focusColor'>tution teacher?</span> Them, I will be able to help you out.<span className='focusColor'>As a bachelor student in Food Technology.</span> I can help you out with your studies.<span className='focusColor'> In a cost effective way</span>.</p>
            </section>
            <section className="hbSection1">
            <img src={clock} alt="" className='heroSideImgs zero'/>
                <img src={calculator} alt="" className='heroSideImgs one'/>
                <img src={notebook} alt="" className='heroSideImgs two'/>
                <img src={plus} alt="" className='heroSideImgs three'/>
                <img
                    src={heroImg}
                    alt="Hero Img"
                    className='heroImg'
                />
            </section>
        </div>
    )
}

export default Home