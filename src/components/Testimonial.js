import React from 'react';
import { FaStar } from 'react-icons/fa';
import Avatar from 'react-avatar';

const testimonials = [
  {
    id: 1,
    rating: 4,
    text: "Un'esperienza culinaria fantastica! Tornerò sicuramente.",
    author: "Maria Rossi",
  },
  {
    id: 2,
    rating: 5,
    text: "Servizio eccellente e cibo delizioso. Consigliatissimo!",
    author: "Luca Bianchi",
  },
  {
    id: 3,
    rating: 4,
    text: "Un ambiente accogliente e un menu vario. Perfetto!",
    author: "Anna Verdi",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-header">
        <h2>Our customers love us!</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map(item => (
          <div key={item.id} className="testimonial-card">
            <Avatar 
              name={item.author} 
              size="80" 
              round={true} 
              className="avatar"
            />
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  color={i < item.rating ? '#FFD700' : '#ddd'} 
                  size={20}
                />
              ))}
            </div>
            <p className="quote">{item.text}</p>
            <p className="author">- {item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;