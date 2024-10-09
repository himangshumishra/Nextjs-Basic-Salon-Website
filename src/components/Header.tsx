import Link from 'next/link';

interface HeaderProps {
  // Add any props you need here
}

const links = [
  { href: '/about', label: 'About', className: 'text-white hover:text-gray-900' },
  { href: '/team', label: 'Team', className: 'text-white hover:text-gray-900' },
  { href: '/booking', label: 'Booking', className: 'text-white hover:text-gray-900' },
  { href: '/services', label: 'Services', className: 'text-white hover:text-gray-900' },
  { href: '/contact', label: 'Contact', className: 'text-white hover:text-gray-900' },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-40 shadow-md z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-lg font-bold text-white hover:text-gray-400">
            Salon Website
          </span>
        </Link>
        <ul className="flex items-center space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className={link.className}>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;