import './aboutStyles.css'
import tick from "../../assets/aboutImgs/tick-dynamic-color.png"
const About = () => {
    return (
        <div id='why' className='aboutBody'>
            <section className="section0">
                <h2 className='why'>Why?</h2>
                <h1 className='heading1'>Why Hiring a Private Tutor Like Me Can Improve Your Child&apos;s Academic Performance?</h1>
                <section className="desc">
                    Every parent wants their child to excel academically and achieve their full potential. However, not all students can thrive in a traditional classroom setting, and they may require additional help and support to succeed. This is where <span className='focusColor'> I can make a significant difference in your child&apos;s academic performance.</span>

                </section>
            </section>
            <section className="section1">
                <h2 className='s1h2'>Advantages: </h2>
                <p className='ads'>1. Individualized Attention and Customized Learning</p>
                <p className='ads'>2. Improved Confidence and Motivation</p>
                <p className='ads'>3. Better Grades and Academic Performance</p>
                <p className='ads'>4. Flexibility and Convenience</p>
                <a href={'https://www.facebook.com/profile.php?id=100090820037966'}>
                    <img src={tick} alt="tick" className='tick' />
                </a>
            </section>
        </div>
    )
}

export default About