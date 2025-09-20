import { createContext, useContext, useState } from "react";

const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(null);

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);