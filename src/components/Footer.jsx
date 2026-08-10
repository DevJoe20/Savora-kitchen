const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              SAVORA
            </h2>

            <p className="mt-3 text-gray-400">
              Good food. Made fresh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#menu"
                  className="hover:text-orange-500 transition"
                >
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Lagos, Nigeria</p>

              <a
                href="tel:+2348141401872"
                className="hover:text-orange-500 transition"
              >
                +234 814 140 1872
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Savora Kitchen. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;