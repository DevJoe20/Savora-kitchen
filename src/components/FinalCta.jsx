const FinalCta = () => {
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Hungry already?
        </h2>

        <p className="mt-4 text-lg md:text-xl text-white/90">
          Order your favourite meal today.
        </p>

        <a
          href="https://wa.me/2348141401872"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-white text-orange-500 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Order on WhatsApp
        </a>

      </div>
    </section>
  );
};

export default FinalCta;