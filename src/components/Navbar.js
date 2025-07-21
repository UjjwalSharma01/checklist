import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav>
      <header>
        <h1>
          <Link href="/">The Checklist</Link>
        </h1>
      </header>
      <ul className="contact-contribute">
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/contribute">Contribute</Link>
        </li>
      </ul>
      <div className="ham-mob">
        <i className="fa-solid fa-bars toggle-button"></i>
      </div>
      <div className="hamburger">
        <div className="bar">
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="bar">
          <Link href="/contribute">Contribute</Link>
        </div>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
