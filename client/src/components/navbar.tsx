'use client';

import Link from 'next/link';
import { Scroll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ui/theme-toggle';
import { AuthDialog } from './auth-modal';
import { useState } from 'react';

const Navbar = () => {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-1 sm:py-2 sticky top-0 bg-black">
      <Link className="flex items-center gap-1.5" href="/">
        <Scroll />
        <span className="font-medium text-lg">Note Nest</span>
      </Link>
      <nav>
        <ThemeToggle />
        <Button size="sm" onClick={() => setIsAuthDialogOpen(true)}>
          Register
        </Button>
        <AuthDialog
          isAuthDialogOpen={isAuthDialogOpen}
          setIsAuthDialogOpen={setIsAuthDialogOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;
