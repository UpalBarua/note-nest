import Link from 'next/link';
import { Scroll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ui/theme-toggle';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-1 sm:py-2 sticky top-0 bg-black">
      <Link className="flex items-center gap-1.5" href="/">
        <Scroll />
        <span className="font-medium text-lg">Note Nest</span>
      </Link>
      <nav>
        <ThemeToggle />
        <Button>Register</Button>
      </nav>
    </header>
  );
};

export default Navbar;
