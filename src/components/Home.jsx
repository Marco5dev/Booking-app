import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styles/home.css";


export default function Home() {
  return (
    <div className="main">
      <Navbar/>

      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Le are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking/">Reserve a Table</Link>
        </div>
      </section>

      <div className="hero-img">
        <img
           src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
           alt="food"
        />
      </div>

      <section className="specials">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="yellow-btn">Online Menu</button>
        </div>

        <div className="cards">
          <div className="card">
            <img
              src="https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg"
              alt="Greek Salad"
            />
            <div className="card-body">
              <div className="card-title">
                <h3>Greek salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="#">Order a delivery 🚴‍♂️</a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://www.centercutcook.com/wp-content/uploads/2024/10/bruschetta-with-mozzarella-14.jpg"
              alt="Bruschetta"
            />
            <div className="card-body">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <span className="price">$5.89</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="#">Order a delivery 🚴‍♂️</a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://www.cookingclassy.com/wp-content/uploads/2016/03/lemon_cheesecake_mousse.-1.jpg"
              alt="Lemon Dessert"
            />
            <div className="card-body">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="#">Order a delivery 🚴‍♂️</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}