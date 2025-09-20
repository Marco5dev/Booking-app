import Restaurant1 from './assets/restaurant.jpg';
import Restaurant2 from './assets/restaurant chef B.jpg';

function About() {
    return (
        <section className="about">
            <section className="aboutText">
                <section className="aboutHeader">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </section>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </section>
            <section className="aboutImage">
                <img src={Restaurant1} className="aboutImg1" alt="Restaurant interior"/>
                <img src={Restaurant2} className="aboutImg2" alt="Restaurant chef B"/>
            </section>
        </section>
    );
}

export default About;