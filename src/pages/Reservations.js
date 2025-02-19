import React, { useReducer, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';
import { fetchAPI } from '../apiWrapper'; // Importa fetchAPI

// Riduttore per gestire availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;

    case 'UPDATE_TIMES':
      return action.payload;

    default:
      throw new Error(`Azione sconosciuta: ${action.type}`);
  }
};

const Reservations = () => {
  // Stato iniziale: array vuoto
  const initialState = [];

  // Usa useReducer per gestire availableTimes
  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

  // Effetto per inizializzare gli orari disponibili per la data odierna
  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date().toISOString().split('T')[0]; // Data odierna in formato YYYY-MM-DD
      const times = await fetchAPI(today); // Chiamata API per ottenere gli orari disponibili
      dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    };
    initializeTimes();
  }, []);

  // Funzione per aggiornare gli orari disponibili in base alla data selezionata
  const updateAvailableTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate); // Chiamata API per ottenere gli orari disponibili
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Prenotazioni</h1>
      <p style={styles.subtitle}>Compila il modulo sottostante per prenotare un tavolo.</p>

      {/* Passa lo stato e la funzione di aggiornamento al componente figlio */}
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />

      {/* Mostra gli slot di prenotazione disponibili */}
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