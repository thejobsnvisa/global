import { useState } from 'react';
import logo from '../assets/logo2.svg';
import b1 from '../assets/b1.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'English Test', path: '/english-test' },
    { name: 'Migration Assessment', path: '/migration-assessment' },
    { name: 'Latest Update', path: '/latest-update' },
  ];

  const activeLink = navItems.find((item) => item.path === locationPath)?.name || '';

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav className="bg-[#CFFCFF] w-full">
      <div className="flex h-[80px] w-full items-center justify-between px-4 sm:px-5 lg:px-6">
        <img src={logo} alt="Logo" className="h-[52px] w-[160px] sm:h-[60px] sm:w-[180px] lg:h-[66px] lg:w-[200px]" />

        <ul className="hidden items-center gap-5 text-[16px] xl:flex xl:gap-8 xl:text-[18px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={handleNavClick}
                className={`text-[#000000] transition-all ${activeLink === item.name ? 'font-bold' : 'font-normal'}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden bg-[#84C8AF] text-[#27456E] w-[150px] h-[46px] rounded-[30px] px-[14px] py-[12px] text-[16px] font-semibold items-center justify-center gap-2 xl:flex"
        >
          Contact Us
          <img src={b1} alt="Button Image" className="h-[20px] w-[20px]" />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#27456E]/20 bg-white/40 text-[#27456E] xl:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-[#27456E]" />
            <span className="block h-0.5 w-5 bg-[#27456E]" />
            <span className="block h-0.5 w-5 bg-[#27456E]" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#27456E]/10 bg-[#CFFCFF] px-4 py-4 xl:hidden">
          <ul className="flex flex-col gap-3 text-[16px]">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={handleNavClick}
                  className={`block rounded-md px-3 py-2 text-[#000000] ${activeLink === item.name ? 'font-bold bg-white/40' : 'font-normal'}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            onClick={handleNavClick}
            className="mt-4 flex h-[46px] w-full items-center justify-center gap-2 ml-2 rounded-[30px] bg-[#84C8AF] text-[16px] font-semibold text-[#27456E]"
          >
            Contact Us
            <img src={b1} alt="Button Image" className="h-[20px] w-[20px]" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar
