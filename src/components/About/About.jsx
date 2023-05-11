import './aboutStyles.css'
import target from "../../assets/aboutImgs/target-dynamic-color.png"
const About = () => {
    return (
        <div id='about' className='aboutBody'>
            <section className="section0">
                <h2 className='why font1'>About</h2>
                <h1 className='heading1'>Are you at grade <span className='focusColor'> 11 or 12</span>?</h1>
                <h2 className='wone'>Looking for someone to teach you <span className='blueDark'>Maths</span>, <span className='blueDark'>Physics</span> or perhaps <span className='blueDark'>Chemistry</span>?</h2>
                <section className="desc">
                    With my personalized approach and dedication to your success, I&apos;ll work together to identify your strengths and weaknesses, address your specific learning needs, and help you gain confidence in your abilities. My goal is not only to help you understand the subject matter but also to foster a lifelong love of learning.

                </section>
            </section>
            <section className="section1">
                <h2 className='s1h2'>My Track Record: </h2>
                {/* <div className='adsDiv'>
                    <span className="ads">1. </span>
                    <p className='ads'>SLC Distinction, Sagarmatha Niketen School</p></div>
                <div className='adsDiv'>
                    <span className="ads">2. </span>
                    <p className='ads'>Joking Personality</p></div>
                <div className='adsDiv'>
                    <span className="ads">3. </span>
                    <p className='ads'>Tech Guy</p>
                </div>
                <div className='adsDiv'>
                    <span className="ads">4. </span>
                    <p className='ads'>Gaming</p>
                </div> */}
                <div className='addv'>
                    <span className='ads'>1.</span>
                    <p className='ads'>SLC Distinction, Sagarmatha Niketen School</p>
                </div>
                <div className='addv'>
                    <span className='ads'>2.</span>
                    <p className='ads'>A+ at 11 grade, JanaPriya Collage</p>
                </div>
                <div className='addv'>
                    <span className='ads'>3.</span>
                    <p className='ads'>A+ at 12 grade, JanaPriya Collage</p>
                </div>
                <a href={'https://www.facebook.com/apil.dhakal.12'}>
                    <img src={target} alt="tick" className='tick' />
                </a>
            </section>
        </div>
    )
}

export default About