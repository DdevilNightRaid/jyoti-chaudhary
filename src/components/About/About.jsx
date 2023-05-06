import './aboutStyles.css'
import target from "../../assets/aboutImgs/target-dynamic-color.png"
const About = () => {
    return (
        <div id='about' className='aboutBody'>
            <section className="section0">
                <h2 className='why'>About</h2>
                <h1 className='heading1'>You may not need my skills but, <span className='focusColor'> We can Still get connected</span></h1>
                <h2 className='why'>MY Opinion On Computer ;</h2>
                <section className="desc">
                I love using my laptop and making new projects (3d,2d,grapics,prg etc.) and i think that every persons, childrens should get devices cuz it&apos;s 2022 but but there comes one thing that if we gave phones , laptops , pc to the childrens we should make sure that the childrens are doing good things cuz every think has it&apos;s own advantages and disadvantages the childrens should be taught about the advantages and disadvantages of computer , networking..! So, That was my personal Opinion..!

                </section>
            </section>
            <section className="section1">
                <h2 className='s1h2'>My Qualities: </h2>
                <p className='ads'>1. Friendly</p>
                <p className='ads'>2. Joking Personality</p>
                <p className='ads'>3. Tech Guy</p>
                <p className='ads'>4. Likes being around people</p>
                <a href={'https://www.facebook.com/apil.dhakal.12'}>
                    <img src={target} alt="tick" className='tick' />
                </a>
            </section>
        </div>
    )
}

export default About