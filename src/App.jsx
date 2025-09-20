import Home from './components/Home';
import Main from './components/Main';
import BookingDetail from './components/BookingDetail';
import Alert  from './components/Alert';
import Confirmed from './components/Confirmed';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AlertProvider } from './components/alertContext';
import { BookDetailProvider } from './components/bookingDetailContext';
import { BookingProvider, useBookingContext } from './components/bookingContext';
import './App.css';


function ProtectedRoute({children}) {
  const { booking } = useBookingContext();

  if(!booking) {
    return <Navigate to="/booking" replace />;
  }
  return children;
};


function App() {
  return (
    <AlertProvider>
      <BookingProvider>
        <BookDetailProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking/' element={<Main />} />
            <Route path='/booking/details/' element={<ProtectedRoute><BookingDetail /></ProtectedRoute>} />
            <Route path='/booking/confirmed/' element={<Confirmed />} />
          </Routes>
        </BookDetailProvider>
      </BookingProvider>
      <Alert />
    </AlertProvider>
  );
};

export default App;
