import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {

    {/* {["Home", "About","Services", "Portfolio", "Contact"].map((item,index) => (
      <li key={index} className="nav-li">
        <a href="/" className="nav-li_a">{item}</a>
      </li>
    ))} */}
  return <ul className="nav-ul">
    {navLinks.map(({id,href, name}) => (
      <li key={id} className="nav-li">
        <a href={href}
          className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>))}
  </ul>;
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      {/*tailwindcss 7xl means the element’s maximum width is set to 80rem (1280px by default). */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* when hover over transition from neautral-400 to white */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            {" "}
            Jetro{" "}
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      {/* for mobile devices */}
      <div className={`nav-sidebar ${isOpen ?'max-h-screen': 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
