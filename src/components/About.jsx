// import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-20 gap-8">
        {/* image section */}
        <div>
            <img src="/cheif.png" alt="Cheif" className="w-full h-96 object-cover"/>
        </div>
        {/* description section */}
        <div>
            <h2 className="text-3xl font-bold">Made with passion.</h2>
            <p className="mt-4">
                At Savora Kitchen, we believe great food should be fresh, flavorful, and made with care.<br></br> We bring together delicious meals, quality ingredients, and a passion for good<br /> cooking to create dishes you’ll genuinely enjoy.

From comforting classics to flavorful favorites,<br /> every meal is prepared with attention to taste and quality.<br /> Whether you’re grabbing a quick lunch, ordering dinner, or treating yourself<br /> to something special, Savora Kitchen is here to make every bite worth it.

Good food.<br /> Great taste. Made for you.
            </p>
            {/* Button */}
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
                Learn More
            </button>
        </div>

    </div>
  )
}

export default About