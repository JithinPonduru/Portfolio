import React from "react";

function Footer({
  contactTitle = "Let's keep in touch!",
  contactDescription = "Please feel free to reach out via any of these platforms; I generally respond within 1-2 business days.",
  socialLinks = [
    { href: "https://x.com/Jithin_001", iconClass: "fab fa-twitter", colorClass: "text-lightBlue-400" },
    { href: "https://github.com/JithinPonduru", iconClass: "fab fa-github", colorClass: "text-blueGray-800" },
    { href: "mailto:zithinchowdhary159898@gmail.com", iconClass: "fas fa-envelope", label: "Mail" },
    { href: "https://www.instagram.com/berlin_m_h/", iconClass: "fab fa-instagram", colorClass: "text-lightBlue-600" },
    { href: "https://jithinponduru.vercel.app/", iconClass: "fab fa-dribbble", colorClass: "text-blueGray-800" },
  ],

  author = "Jithin Ponduru",
}) {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-white">
      <div className="px-10">
        <div>
          <h4 className="text-3xl font-semibold text-blueGray-700 mb-4">
            {contactTitle}
          </h4>
          <h5 className="text-lg text-blueGray-600 mb-6">{contactDescription}</h5>

          <div className="flex justify-evenly">
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index}>
                <button
                  className={`shadow-lg font-normal mx-10 h-12 w-12 items-center justify-center rounded-full outline-none focus:outline-none ${link.colorClass}`}
                  type="button"
                >
                  <i className={`${link.iconClass} text-xl`}></i>
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Useful Links */}
       
      </div>

      <div className="flex justify-center gap-5 w-full text-center text-sm text-blueGray-500 font-semibold py-4 mt-6 border-t border-blueGray-200">
        <span id="get-current-year">Copyright © {new Date().getFullYear()}</span>
        <span>{author}</span>
      </div>
    </footer>
  );
}

export default Footer;
