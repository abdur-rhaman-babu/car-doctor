'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full md:backdrop-blur-lg md:bg-white/80 shadow-md z-50 md:px-6 lg:px-16 px-3 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} width={50} height={30} alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-black transition-all">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="relative group text-[16px] font-medium">
                <span className={`hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`}>{name}</span>
                <span className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-black transition-all" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-black transition-all" />
          <Button variant='primary'>Appointment</Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
        menuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-primary text-lg">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 py-6">
          {menuItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className={`text-lg ${isActive ? 'text-primary font-bold' : 'text-gray-700'}`}>
                {name}
              </Link>
            );
          })}
          <Button variant='primary'>Appointment</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

