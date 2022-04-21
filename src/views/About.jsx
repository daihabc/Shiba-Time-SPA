import shiba1 from '../assets/shiba-1.jpeg';
import shiba2 from '../assets/shiba-2.jpeg';
import '../styles/about.css';

function About() {
    return (
        <div className="about">
            <div className="about__title">About</div>
            <div className="about__text">This website is dedicated to the Shiba Inu breed. We hope to showcase their cuteness and connect with Shiba lovers! Please stay in touch! </div>
            <div className="about__image__wrapper--outter">
                <div className="about__image__wrapper--inner">
                    <img src={shiba2} className="about__img__shiba2" alt="shiba with hat by Anna Shevet" />
                    <img src={shiba1} className="about__img__shiba1" alt="shiba with hat by Anna Shevet" />
                </div>
            </div>
            <div className="about__quote">"Scratch a Shiba and you will find a permanent job! " </div>
        </div>
    );
};

export default About;
