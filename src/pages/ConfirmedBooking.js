import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  const { state: formData } = useLocation();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Prenotazione Confermata!</h1>
        {formData ? (
          <div style={styles.details}>
            <p style={styles.text}>Grazie per aver prenotato con noi. La tua prenotazione è stata completata con successo!</p>
            <div style={styles.infoContainer}>
              <p style={styles.detailText}>
                <strong>Data:</strong> {formData.date}
              </p>
              <p style={styles.detailText}>
                <strong>Orario:</strong> {formData.time}
              </p>
              <p style={styles.detailText}>
                <strong>Numero di ospiti:</strong> {formData.guests}
              </p>
              {formData.occasion && (
                <p style={styles.detailText}>
                  <strong>Occasione:</strong> {formData.occasion}
                </p>
              )}
            </div>
            <Link to="/" style={styles.link}>Torna alla home</Link>
          </div>
        ) : (
          <p style={styles.text}>Nessun dato di prenotazione trovato.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff', // Sfondo giallo
  },
  card: {
    backgroundColor: '#ffffff', // Sfondo bianco per il card
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#495e57', // Colore verde scuro per il titolo
    marginBottom: '20px',
  },
  details: {
    marginTop: '20px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#495e57', // Verde scuro per il testo
    marginBottom: '10px',
  },
  infoContainer: {
    marginTop: '20px',
    backgroundColor: '#fff', // Background giallo per il container delle informazioni
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  detailText: {
    fontSize: '1rem',
    color: '#495e57',
    margin: '5px 0',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#ffffff', // Colore bianco per il link
    backgroundColor: '#495e57', // Colore verde scuro per il pulsante
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default ConfirmedBooking;
