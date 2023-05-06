import heroImg from '../../assets/homeImg.png'
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
                <header className='defaultColor oneLiner'>Let&apos;s Learn Something Together</header>
                <h1 className='defaultColor heading'>Hi I am <span className='focusColor'>Aaryan</span></h1>
                <h2 className='defaultColor heading'>+2 Graduate Student</h2>
                <p className='defaultColor'>Looking for a <span className='focusColor'>tution teacher </span> for <span className='focusColor'>grade 1 to 10 students</span> at an <span className='focusColor'>affordable price</span>?</p>
                <p className='defaultColor'>Then Search No more,</p>
                <p className='defaultColor'>Cause stuedent is here to <span className='focusColor'>teach student </span>in the most effective and <span className='focusColor'>cost efficent</span> manner</p>
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