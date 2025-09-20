import Bruchetta from './assets/bruchetta.svg';
import GreekSalad from './assets/greek salad.jpg';
import LemonDessert from './assets/lemon dessert.jpg';
import DeliveryOrder from './assets/delivery_order.png';

function HighlightCard({image, title, price, description}) {
    return (
        <section className="highlightCard">
            <img src={image} className="card-img" alt="placeholder"/>
            <section className="highlightCardHeader">
                <h2>{title}</h2>
                <h3>{price}</h3>
            </section>
            <p>{description}</p>
            <button className="order-delivery">
                <span>Order a delivery</span>
                <img src={DeliveryOrder} alt="delivery icon" />
            </button>
        </section>
    );
}

function Highlight() {
    return (
        <section className="highlight">
            <section className="highlightHeader">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </section>
            <section className="highlightCards">
                <HighlightCard image={GreekSalad} title="Greek Salad" price="$12.99" description="Fresh and healthy." />
                <HighlightCard image={Bruchetta} title="Bruchetta" price="$ 5.99" description="Delicious Italian starter." />
                <HighlightCard image={LemonDessert} title="Lemon Dessert" price="$ 5.00" description="Sweet and tangy." />
            </section>
        </section>
    );
}

export default Highlight;