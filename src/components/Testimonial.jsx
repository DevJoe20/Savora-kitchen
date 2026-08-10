const Testimonial = () => {
  const testimonials = [
    {
      text: "The jollof rice was absolutely delicious. Everything tasted fresh, well-seasoned, and perfectly prepared. I'll definitely be ordering again.",
      name: "David A.",
    },
    {
      text: "I ordered the creamy chicken pasta and it was amazing. The portion was generous, the food arrived fresh, and the whole experience was smooth.",
      name: "Daniel O.",
    },
    {
      text: "Savora Kitchen has become one of my favorite places to order from. Great food, good portions, and excellent service every time.",
      name: "Michelle H.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/cheif.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-px bg-white/70"></span>
            <span className="text-2xl">★</span>
            <span className="w-16 h-px bg-white/70"></span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-7 text-center"
            >
              {/* Quote */}
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="mt-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <h3 className="text-white font-bold text-lg mt-3">
                  {testimonial.name}
                </h3>

                <div className="text-yellow-400 text-sm mt-1">
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;