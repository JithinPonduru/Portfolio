import React from "react";

function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap justify-between gap-6">
        {/* Left Section: Contact and Social Media */}
        <div className="w-full lg:w-6/12 flex flex-col items-start mb-6 lg:mb-0">
          <h4 className="text-3xl font-semibold text-blueGray-700 mb-4">
            Let's keep in touch!
          </h4>
          <h5 className="text-lg text-blueGray-600 mb-6">
            Please feel free to reach out via any of these platforms; I
            generally respond within 1-2 business days.
          </h5>

          <div className="flex space-x-4 mb-4">
            <a href="https://x.com/Jithin_001">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-12 w-12 items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter text-xl"></i>
              </button>
            </a>
            <a href="https://www.instagram.com/berlin_m_h/">
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-12 w-12 items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-instagram text-xl"></i>
              </button>
            </a>
            <a href="https://jithinponduru.vercel.app/">
              <button
                className="bg-white shadow-lg font-normal h-12 w-12 items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-dribbble text-xl"></i>
              </button>
            </a>
            <a href="https://github.com/JithinPonduru">
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-12 w-12 items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-github text-xl"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Right Section: Useful Links */}
        <div className="w-full lg:w-4/12 flex flex-col items-start">
          <h1 className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
            Useful Links
          </h1>
          <ul className="flex flex-col list-unstyled space-y-2">
            <li>
              <a
                className="text-blueGray-600 hover:text-blue-400 font-semibold block pb-2 text-sm"
                href="https://blog.creative-tim.com?ref=njs-profile"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-blueGray-600 hover:text-blue-400 font-semibold block pb-2 text-sm"
                href="https://github.com/JithinPonduru"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="text-blueGray-600 hover:text-blue-400 font-semibold block pb-2 text-sm"
                href="mailto:zithinchowdhary159898@gmail.com"
              >
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-5 w-full text-center text-sm text-blueGray-500 font-semibold py-4 mt-6 border-t border-blueGray-200">
        
        <span id="get-current-year">Copyright © {new Date().getFullYear()}</span>
        <span>Jithin Ponduru</span>
      </div>
    </footer>
  );
}

export default Footer;
