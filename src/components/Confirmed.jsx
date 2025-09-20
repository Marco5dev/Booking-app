import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/confirmed.css"
import confirmed from "../images/confirmed.png"
import { useBookDetailContext } from "./bookingDetailContext";
import { useBookingContext } from "./bookingContext";
import { Link } from "react-router-dom";


export default function Confirmed() {
    const { bookingDetails } = useBookDetailContext();
    const { booking } = useBookingContext();

    return (
        <div className="main">
            <Navbar />
            <div className="confirmed-container">
                <div className="background-color"></div>
                <div className="title">
                    <img src={confirmed} className="confirmed-icon" alt="icon"/>
                    <h1>Reservation is Confirmed!</h1>
                    <h2>Thank you for the reserved</h2>
                </div>
                <div className="booking-details-container">
                    <div className="datas">
                        <h2>Booking Detail</h2>
                        <div className="booking">
                            {booking ? (
                                <ul>
                                    <li><span className="sign">Date:</span> {booking.date}</li>
                                    <li><span className="sign">Time:</span> {booking.time}</li>
                                    <li><span className="sign">Guests:</span> {booking.guests}</li>
                                    <li><span className="sign"> Occasion:</span> {booking.occasion}</li>
                                    <li><span className="sign">Table:</span> {booking.table}</li>
                                    <li><span className="sign">Location:</span> {booking.location}</li>
                                </ul>
                            ) : (
                                <p>No booking data found.</p>
                            )}
                        </div>
                        <div className="booking-details">
                            {bookingDetails ? (
                                <ul>
                                    <li><span className="sign">Name:</span> {bookingDetails.first_name} <span className="last-name">{bookingDetails.last_name}</span></li>
                                    <li><span className="sign">Email:</span> {bookingDetails.email}</li>
                                    <li><span className="sign">Phone:</span> {bookingDetails.phone}</li>
                                    <li><span className="sign">Date:</span> {bookingDetails.expire_date}</li>
                                </ul>
                            ) : (
                                <p>No booking data found.</p>
                            )}
                        </div>
                    </div>
                    <Link to="/"><button className="button" aria-label="Home">Home</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};