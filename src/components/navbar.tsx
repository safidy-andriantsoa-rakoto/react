import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '#contact' },
  ];

return (
  <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Dev<span className="text-gray-900">Safidy</span>.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-block"
        >
          Me contacter
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-800 md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Me contacter
          </a>
        </div>
      )}
  </nav>

);
}

export default Navbar;
