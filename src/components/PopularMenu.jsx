// import React from 'react'

const PolpularMenu = () => {
  const dishes = [
    {
      name: "Smoky Jollof Rice",
      price: "₦4,500",
      image: "/Smoky-Jollof-Rice.jpg",
    },
    {
      name: "Grilled Chicken",
      price: "₦5,500",
      image: "/Grilled-Chicken.jpg",
    },
    {
      name: "Creamy Chicken Pasta",
      price: "₦4,000",
      image: "/Creamy-Chicken-Pasta.jpg",
    },
    {
      name: "Fried Rice & Chicken",
      price: "₦5,000",
      image: "/Fried-Rice-&Chicken.jpg",
    },
    {
      name: "Chicken Burger",
      price: "₦4,500",
      image: "/Chicken-Burger.jpg",
    },
    {
      name: "Beef Shawarma",
      price: "₦4,000",
      image: "/Beef-Shawarma.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Our Popular Dishes
          </h2>
          <p className="text-gray-400 mt-2">
            Customer favorites, freshly prepared for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {dish.name}
                </h3>

                <p className="text-lg font-bold text-orange-500 mt-2">
                  {dish.price}
                </p>

                <button className="w-full mt-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PolpularMenu