import UserProfile from './assets/user_profile.png';

function TestimonialCard({Rating, image, name, review}) {
    return (
        <section className="testimonialCard">
            <h2>{Rating}</h2>
            <section className="testimonial-img">
                <img src={image} alt="placeholder"/>
            </section>
            <h3>{name}</h3>
            <p>{review}</p>
        </section>
    )
}

function Testimonial() {
    return (
        <section className="testimonial">
            <h1>Testimonials</h1>
            <section className="testimonialCards">
                <TestimonialCard Rating="Rating" image={UserProfile} name="name" review="Review Text" />
                <TestimonialCard Rating="Rating" image={UserProfile} name="name" review="Review Text" />
                <TestimonialCard Rating="Rating" image={UserProfile} name="name" review="Review Text" />
                <TestimonialCard Rating="Rating" image={UserProfile} name="name" review="Review Text" />
            </section>
        </section>
    )
}

export default Testimonial;