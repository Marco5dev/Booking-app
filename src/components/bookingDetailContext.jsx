import { createContext, useContext, useState } from "react";

const BookDetailContext = createContext(undefined);

export const BookDetailProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <BookDetailContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookDetailContext.Provider>
  );
};

export const useBookDetailContext = () => useContext(BookDetailContext);