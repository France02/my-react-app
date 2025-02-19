import React, { useState, useEffect } from 'react';
import * as API from '../api';

function BookingForm({ availableTimes, updateAvailableTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  useEffect(() => {
    if (formData.date) {
      const fetchTimes = async () => {
        const times = await API.fetchAPI(new Date(formData.date));
        updateAvailableTimes(times);
      };
      fetchTimes();
    }
  }, [formData.date, updateAvailableTimes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Invece di chiamare direttamente API.submitAPI, usiamo la funzione submitForm passata via props
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Scegli la data:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Scegli l'ora:</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        <option value="">Seleziona un orario</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

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

      <label htmlFor="occasion">Occasione:</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="">Seleziona un'occasione</option>
        <option value="compleanno">Compleanno</option>
        <option value="anniversario">Anniversario</option>
      </select>

      <button type="submit">Invia prenotazione</button>
    </form>
  );
}

export default BookingForm;
