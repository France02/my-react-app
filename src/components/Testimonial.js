import React from 'react';

const Testimonial = () => {
  // Array di testimonianze
  const testimonials = [
    {
      id: 1,
      avatar: "/assets/testimonial-avatar.jpg",
      text: "Un'esperienza culinaria fantastica! Tornerò sicuramente.",
      author: "Maria Rossi",
    },
    {
      id: 2,
      avatar: "/assets/testimonial-avatar.jpg",
      text: "Servizio eccellente e cibo delizioso. Consigliatissimo!",
      author: "Luca Bianchi",
    },
    {
      id: 3,
      avatar: "/assets/testimonial-avatar.jpg",
      text: "Un ambiente accogliente e un menu vario. Perfetto!",
      author: "Anna Verdi",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Cosa dicono i nostri clienti</h2>
      <div className="testimonial-grid container">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img src={item.avatar} alt={`Avatar di ${item.author}`} />
            <p>{item.text}</p>
            <p>- {item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;