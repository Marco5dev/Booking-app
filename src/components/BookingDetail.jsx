import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../styles/booking_detail.css';
import { submitAPI } from "../api";
import { useAlertContext } from "./alertContext";
import { useNavigate } from "react-router-dom";
import { useBookDetailContext } from "./bookingDetailContext";


export default function BookingDetail() {
  const { setBookingDetails } = useBookDetailContext();
  const { onOpen } = useAlertContext();
  const navigate = useNavigate();
  const [initialValues, setinitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    expire_date: "",
    cvv: "",
  });
  
  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    expire_date: Yup.string().required("Expire date is required"),
    cvv: Yup.string().length(3, "CVV must be 3 digits")
            .matches(/^\d+$/, "CVV must be numeric")
            .required("CVV is required")
  });
  
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const success = await submitAPI(values);

      if (success) {
        setBookingDetails(values);
        resetForm();
        setTimeout(() => {
          navigate("/booking/confirmed/"); 
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
              <div className="table-container2">
                <div className="background-color"></div>
                <h1>Your Contacts!</h1>
                <div className="reservation-container">

                    <div className="first-name-container">
                        <label htmlFor="date">First Name</label>
                        <Field
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="First Name"
                        aria-label="Enter your first name"
                        className={`${
                            errors.first_name && touched.first_name ? "input-error" : "first_name"
                        }`}
                        onChange={(e) => {
                            setFieldValue("first_name", toTitleCase(e.target.value));
                        }}
                        />
                        <ErrorMessage name="first_name" component="div" className="error" />
                    </div>

                    <div className="last-name-container">
                        <label htmlFor="last_name">Last Name</label>
                        <Field
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Last Name"
                        aria-label="Enter your last name"
                        className={`${
                            errors.last_name && touched.last_name ? "input-error" : "last_name"
                        }`}
                        onChange={(e) => {
                          setFieldValue("last_name", toTitleCase(e.target.value));
                        }}
                        />
                        <ErrorMessage name="last_name" component="div" className="error" />
                    </div>

                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        aria-label="Enter your email"
                        className={`${
                            errors.email && touched.email
                            ? "input-error"
                            : "email"
                        }`}
                        onChange={(e) => {
                          setFieldValue("email", e.target.value);
                        }}
                        />
                        <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="phone-container">
                        <label htmlFor="phone">Phone</label>
                        <Field
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        aria-label="Enter your phone"
                        className={`${
                            errors.phone && touched.phone
                            ? "input-error"
                            : "phone"
                        }`}
                        onChange={(e) => {
                          setFieldValue("phone", e.target.value);
                        }}
                        />
                        <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="expire-date-container">
                        <label htmlFor="expire_date">Expire Date</label>
                        <Field
                        type="date"
                        name="expire_date"
                        id="expire_date"
                        placeholder="Expire Date"
                        aria-label="Enter the expire date"
                        min={new Date().toISOString().split("T")[0]}
                        className={`${
                            errors.expire_date && touched.expire_date
                            ? "input-error"
                            : "expire_date"
                        }`}
                        onChange={(e) => {
                          setFieldValue("expire_date", e.target.value);
                        }}
                        >
                        </Field>
                        <ErrorMessage
                        name="expire_date"
                        component="div"
                        className="error"
                        />
                    </div>

                    <div className="cvv-container">
                        <label htmlFor="cvv">CVV</label>
                        <Field
                        type="number"
                        name="cvv"
                        id="cvv"
                        placeholder="CVV"
                        aria-label="Enter your CVV"
                        className={`${
                            errors.cvv && touched.cvv
                            ? "input-error"
                            : "cvv"
                        }`}
                        onChange={(e) => {
                          setFieldValue("cvv", e.target.value);
                        }}
                        />
                        <ErrorMessage
                        name="cvv"
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

