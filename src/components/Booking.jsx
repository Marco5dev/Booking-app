import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/booking.css";
import { useAlertContext } from "./alertContext";
import { submitAPI } from "../api";
import { useNavigate } from "react-router-dom";
import { useBookingContext } from "./bookingContext";


export default function Booking({ availableTimes, dispatch }) {
  const [successForm, setSuccessForm] = useState(false);
  const { setBooking } = useBookingContext();
  const { onOpen } = useAlertContext();
  const navigate = useNavigate();
  const tables = Array.from({ length: 20 }, (_, i) => i + 1);
  const [initialValues] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
    table: "",
    location: "",
  });

  const validationSchema = Yup.object({
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest")
      .max(10, "Max 10 guests")
      .required("Guests number is required"),
    occasion: Yup.string().required("Occasion is required"),
    table: Yup.string().required("Please choose a table"),
    location: Yup.string().required("Location is required")
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const success = await submitAPI(values);

      if (success) {
        setSuccessForm(true);
        setBooking(values);
        resetForm();

        setTimeout(() => {
          navigate("/booking/details/"); 
        }, 500);
        
      } else {
        onOpen("error", "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      onOpen("error", "Something went wrong");
    }
  };

  return (
    <div className="main">
      <Navbar />
      <section className="hero2">
        <h1>Reserve a Table</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div className="background-color"></div>
      </section>

      <div className="reservation">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, errors, touched, isValid }) => (
            <Form>
              <div className="table-container">
                <div className="background-color"></div>
                <h1>Booking!</h1>
                <div className="reservation-container">

                    <div className="date-container">
                        <label htmlFor="date">Date</label>
                        <Field
                        type="date"
                        name="date"
                        id="date"
                        min={new Date().toISOString().split("T")[0]}
                        aria-label="Select reservation date"
                        className={`${
                            errors.date && touched.date ? "input-error" : "date"
                        }`}
                        onChange={(e) => {
                            setFieldValue("date", e.target.value);
                            dispatch({ type: "UPDATE_TIMES", date: e.target.value });
                        }}
                        />
                        <ErrorMessage name="date" component="div" className="error" />
                    </div>

                    <div className="time-container">
                        <label htmlFor="time">Time</label>
                        <Field
                        as="select"
                        name="time"
                        id="time"
                        aria-label="Select reservation time"
                        className={`${
                            errors.time && touched.time ? "input-error" : "time"
                        }`}
                        onChange={(e) => {
                          setFieldValue("time", e.target.value);
                        }}
                        >
                        <option value="">Select time</option>
                        {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                        ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className="error" />
                    </div>

                    <div className="guests-container">
                        <label htmlFor="guests">Number of Guests</label>
                        <Field
                        type="number"
                        name="guests"
                        id="guests"
                        min="1"
                        max="10"
                        placeholder="1-10"
                        aria-label="Select reservation number of guests"
                        className={`${
                            errors.guests && touched.guests
                            ? "input-error"
                            : "guests"
                        }`}
                        onChange={(e) => {
                          setFieldValue("guests", e.target.value);
                        }}
                        />
                        <ErrorMessage
                        name="guests"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="occasion-container">
                        <label htmlFor="occasion">Occasion</label>
                        <Field
                        as="select"
                        name="occasion"
                        id="occasion"
                        aria-label="Select reservation occasion"
                        className={`${
                            errors.occasion && touched.occasion
                            ? "input-error"
                            : "occasion"
                        }`}
                        >
                        <option value="">Select occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        </Field>
                        <ErrorMessage
                        name="occasion"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="location-container">
                        <label htmlFor="location">Location</label>
                        <Field
                        as="select"
                        name="location"
                        id="location"
                        aria-label="Select reservation location"
                        className={`${
                            errors.location && touched.location
                            ? "input-error"
                            : "location"
                        }`}
                        onChange={(e) => {
                          setFieldValue("location", e.target.value);
                        }}
                        >
                        <option value="">Select location</option>
                        <option value="Inside">Inside</option>
                        <option value="Outside">Outside</option>
                        </Field>
                        <ErrorMessage
                        name="location"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="number-of-table-container">
                        <label htmlFor="table">Number of table</label>
                        <Field
                        as="select"
                        name="table"
                        id="table"
                        aria-label="Select reservation number of table"
                        className={`${
                            errors.table && touched.table
                            ? "input-error"
                            : "table"
                        }`}
                        onChange={(e) => {
                          setFieldValue("table", e.target.value);
                        }}
                        >
                        <option value="">Select Number Of Table</option>
                        {tables.map((n) => (<option value={n}>{n}</option>))}
                        </Field>
                        <ErrorMessage
                        name="table"
                        component="div"
                        className="error"
                        />
                    </div>
                    <button type="submit" className="next" aria-label="Next" disabled={!isValid}>
                        Next
                    </button>
                </div>
                <div className="part-of-logo">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Le are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                </div>
              </div>  
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}