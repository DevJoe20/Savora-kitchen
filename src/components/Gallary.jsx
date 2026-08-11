import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default ?? SliderModule;

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-950">
      <p className="text-white text-center">
        Screen width: {window.innerWidth}px
      </p>
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

        {/* Slider */}
        <Slider {...settings}>
          {foods.map((food) => (
            <div key={food.name} className="px-3">
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
        </Slider>

      </div>
    </section>
  );
};

export default Gallery;