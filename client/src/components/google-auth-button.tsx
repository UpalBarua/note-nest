import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { auth, googleAuth } from '@/firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { Loader } from 'lucide-react';

const GoogleAuthButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);

      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleAuth}
      disabled={isLoading}>
      {isLoading ? <Loader className="animate-spin" /> : 'Continue With Google'}
    </Button>
  );
};

export default GoogleAuthButton;
