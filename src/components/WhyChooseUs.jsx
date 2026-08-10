// import React from 'react'
import { LuUtensils, LuTruck, LuHeart } from "react-icons/lu";

const WhyChooseUs = () => {
  return (
    <div>
        {/* The Cards */}
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-6 rounded-xl">
                    <LuUtensils size={24} className="text-orange-500"/>
                    <h3 className="text-xl font-bold text-white mb-2">Quality Ingredients</h3>
                    <p className="text-gray-400">
                        We source only the finest ingredients to ensure every dish is of the highest quality.
                    </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                    <LuTruck size={24} className="text-orange-500"/>
                    <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
                    <p className="text-gray-400">
                        Enjoy your favorite dishes delivered quickly and safely to your doorstep.
                    </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl">
                    <LuHeart size={24} className="text-orange-500"/>
                    <h3 className="text-xl font-bold text-white mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-400">
                        Our commitment to customer satisfaction drives everything we do.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs