import Link from 'next/link';

const links = [
  { href: '/about', label: 'About', className: 'text-white hover:text-gray-900' },
  { href: '/team', label: 'Team', className: 'text-white hover:text-gray-900' },
  { href: '/booking', label: 'Booking', className: 'text-white hover:text-gray-900' },
  { href: '/services', label: 'Services', className: 'text-white hover:text-gray-900' },
  { href: '/contact', label: 'Contact', className: 'text-white hover:text-gray-900' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-40 shadow-md z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="text-lg font-bold text-white hover:text-gray-400">
            Salon Website
          </a>
        </Link>
        <ul className="flex items-center space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} passHref legacyBehavior>
                <a className={link.className}>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;