// components/BookingSlot.js
import React from 'react';

function BookingSlot({ time }) {
  return (
    <div style={styles.slot}>
      <p>{time}</p>
    </div>
  );
}

const styles = {
  slot: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    minWidth: '80px',
    textAlign: 'center',
  },
};

export default BookingSlot;