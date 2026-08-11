import { useEffect, useState } from "react";

const Gallery = () => {
  const foods = [
    {
      name: "Asun",
      image: "/Asun.jpg",
    },
    {
      name: "Beef Burger",
      image: "/beef burger.jpg",
    },
    {
      name: "Beef Shawarma",
      image: "/Beef-Shawarma.jpg",
    },
    {
      name: "Chicken Burger",
      image: "/Chicken-Burger.jpg",
    },
    {
      name: "Chicken Noodles",
      image: "/Chicken-Noodles.jpg",
    },
    {
      name: "Chicken Wings",
      image: "/Chicken-Wings.jpg",
    },
    {
      name: "Chicken Wrap",
      image: "/Chicken-Wrap.jpg",
    },
    {
      name: "Creamy Chicken Pasta",
      image: "/Creamy-Chicken-Pasta.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Determine how many cards to show
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  // Keep current index valid when screen size changes
  useEffect(() => {
    const maxIndex = foods.length - slidesToShow;

    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [slidesToShow, currentIndex, foods.length]);

  // Next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = foods.length - slidesToShow;

      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Previous slide
  const previousSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = foods.length - slidesToShow;

      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Food
          </h2>

          <p className="text-gray-400 mt-3">
            Freshly prepared. Beautifully served. Made to satisfy.
          </p>
        </div>

        {/* Gallery */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {foods.map((food) => (
              <div
                key={food.name}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="overflow-hidden rounded-2xl bg-gray-900">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {food.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={previousSlide}
            className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition"
            aria-label="Previous food"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition"
            aria-label="Next food"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({
            length: foods.length - slidesToShow + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-6 bg-orange-500"
                  : "w-2 bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;