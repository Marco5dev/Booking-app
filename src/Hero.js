import RestaurantFood from './assets/restauranfood.jpg';

function Hero() {
    return (
        <section className="hero">
            <section className="heroText">
                <section className="heroTitle">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </section>
                <p className="heroDescription">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="heroButton">Reserve a Table</button>
            </section>
            <section className="heroImage">
                <img src={RestaurantFood} alt="Delicious food from our restaurant"/>
            </section>
        </section>
    );
}

export default Hero;