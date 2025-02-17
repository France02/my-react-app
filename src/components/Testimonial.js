import React from 'react';
import avatar from '../icons_assets/3daf33e4-d6ea-47d4-aab5-84bdbae898d7.png'
const Testimonial = () => {
  // Array di testimonianze
  const testimonials = [
    {
      id: 1,
      star: "⭐⭐⭐⭐",
      avatar: avatar,
      text: "Un'esperienza culinaria fantastica! Tornerò sicuramente.",
      author: "Maria Rossi",
    },
    {
      id: 2,
      star: "⭐⭐⭐⭐",
      avatar: avatar,
      text: "Servizio eccellente e cibo delizioso. Consigliatissimo!",
      author: "Luca Bianchi",
    },
    {
      id: 3,
      star: "⭐⭐⭐⭐",
      avatar: avatar,
      text: "Un ambiente accogliente e un menu vario. Perfetto!",
      author: "Anna Verdi",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Our customers love us!</h2>
      <div className="testimonial-grid container">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">           
            <img src={item.avatar} alt={`Avatar di ${item.author}`} />
            <p>{item.text}</p>
            <p>- {item.author}</p> 
            <p>{item.star}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;