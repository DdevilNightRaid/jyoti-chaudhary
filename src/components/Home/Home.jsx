import heroImg from '../../assets/homeImg.jpg'
import "./homeStyles.css"

// Importing Images 
import blender from "../../assets/homeImgs/blender-dynamic-color.png"
import figma from "../../assets/homeImgs/figma-dynamic-color.png"
import chat from "../../assets/homeImgs/chat-dynamic-color.png"
import minecraft from "../../assets/homeImgs/minecraft-dynamic-color.png"
const Home = () => {
    return (
        <div id='home' className="homeBody">
            <section className="hbSection0">
                <header className='defaultColor oneLiner'> Adventure , Photography , Programming , Gaming.</header>
                <h1 className='defaultColor heading'>Hi I am <span className='focusColor'>Apil</span></h1>
                <h2 className='defaultColor heading'>10 Graduated, #Developer</h2>
                <p className='defaultColor'>I am learning phython, <span className='focusColor'>C# because I love coding </span>, Game Devlopment<span className='focusColor'>and I also know general stuff about coding and hacking.</span>& I love travelling to the new places <span className='focusColor'>with some photography</span>.</p>
            </section>
            <section className="hbSection1">
                <img src={blender} alt="" className='heroSideImgs zero'/>
                <img src={figma} alt="" className='heroSideImgs one'/>
                <img src={chat} alt="" className='heroSideImgs two'/>
                <img src={minecraft} alt="" className='heroSideImgs three'/>
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