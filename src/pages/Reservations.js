import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

  const updateAvailableTimes = (newTimes) => {
    setAvailableTimes(newTimes);
  };

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Prenotazioni</h1>
      <p style={styles.subtitle}>Compila il modulo sottostante per prenotare un tavolo.</p>

      
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />

     
      <div style={styles.bookingSlotsContainer}>
        <h2>Slot di prenotazione disponibili:</h2>
        <div style={styles.bookingSlots}>
          {availableTimes.map((time, index) => (
            <BookingSlot key={index} time={time} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '30px',
  },
  bookingSlotsContainer: {
    marginTop: '40px',
  },
  bookingSlots: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
};

export default Reservations;