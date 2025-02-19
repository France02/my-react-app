import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';
import * as API from '../api';

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    setAvailableTimes(API.fetchAPI(today));
  }, []);

  const submitForm = async (formData) => {
    const success = await API.submitAPI(formData);
    if (success) {
      // (Opzionale) aggiorna gli orari disponibili rimuovendo l'orario prenotato
      const updatedTimes = availableTimes.filter((time) => time !== formData.time);
      setAvailableTimes(updatedTimes);

      // Naviga alla pagina di conferma, passando i dati del modulo tramite state
      navigate('/confirmed', { state: formData });
    } else {
      alert("Errore nell'invio della prenotazione. Riprova.");
    }
  };

  return (
    <section style={styles.section}>
      <h1>Prenotazioni</h1>
      <p>Compila il modulo sottostante per prenotare un tavolo.</p>

      <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={setAvailableTimes}
        submitForm={submitForm} // Passa la funzione submitForm al modulo
      />

      <div style={styles.slotsContainer}>
        <h2>Slot di prenotazione disponibili:</h2>
        <div style={styles.slots}>
          {availableTimes.map((time, index) => (
            <BookingSlot key={index} time={time} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  slotsContainer: {
    marginTop: '40px',
  },
  slots: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
};

export default Reservations;
