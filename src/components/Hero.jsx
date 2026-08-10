const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/cheif.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fresh food, made for your cravings.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Delicious meals prepared fresh and delivered to your doorstep
            across Lagos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#menu"
              className="px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-center transition duration-300"
            >
              View Menu
            </a>

            <a
              href="https://wa.me/2348141401872"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-white text-white hover:bg-white hover:text-gray-950 font-semibold rounded-lg text-center transition duration-300"
            >
              Order on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;