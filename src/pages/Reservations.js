import React from 'react';

const Reservations = () => {
  return (
    <section style={styles.container}>
      <h1>Prenotazioni</h1>
      <p style={styles.message}>Questa pagina è attualmente in costruzione. Torna presto!</p>
    </section>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  message: {
    fontSize: '18px',
    color: '#666',
  },
};

export default Reservations;