function Features() {
  const features = [
    { title: "Modern Design", text: "Clean and professional layouts." },
    { title: "Responsive", text: "Perfect experience on all devices." },
    { title: "Fast Loading", text: "Optimized for performance." },
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div key={index} className="feature fade-in">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
