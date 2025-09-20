import React, { useReducer } from "react";
import Booking from "./Booking";
import { fetchAPI } from "../api";


export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};


export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};


export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Booking availableTimes={availableTimes} dispatch={dispatch} />
  );
}