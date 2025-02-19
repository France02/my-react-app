import React, { useState } from 'react';
import { submitAPI } from '../apiWrapper'; // Importa submitAPI

function BookingForm({ availableTimes, updateAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se il campo modificato è "date", aggiorna gli orari disponibili
    if (name === 'date') {
      updateAvailableTimes(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Invia i dati del modulo tramite API
    const success = await submitAPI(formData);

    if (success) {
      alert('Prenotazione inviata con successo!');
    } else {
      alert('Errore durante l\'invio della prenotazione.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Data */}
      <label htmlFor="res-date">Scegli la data:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      {/* Ora */}
      <label htmlFor="res-time">Scegli l'ora:</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Seleziona un orario</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* Numero di ospiti */}
      <label htmlFor="guests">Numero di ospiti:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      {/* Occasione */}
      <label htmlFor="occasion">Occasione:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Seleziona un'occasione</option>
        <option value="compleanno">Compleanno</option>
        <option value="anniversario">Anniversario</option>
      </select>

      {/* Pulsante di invio */}
      <button type="submit">Invia prenotazione</button>
    </form>
  );
}

export default BookingForm;