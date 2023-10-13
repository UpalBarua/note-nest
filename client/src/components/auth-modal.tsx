'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from './login-form';
import RegisterForm from './register-form';

type AuthDialogProps = {
  isAuthDialogOpen: boolean;
  setIsAuthDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export function AuthDialog({
  isAuthDialogOpen,
  setIsAuthDialogOpen,
}: AuthDialogProps) {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [authError, setAuthError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
      <DialogContent className="sm:max-w-[425px] -translate-y-[17rem]">
        <DialogHeader className="space-y-2.5">
          <DialogTitle className="text-start font-medium">
            {isRegisterForm ? 'Create A New Account' : 'Welcome Back'}
          </DialogTitle>
          <DialogDescription className="text-start">
            Unlock Note Nest's full potential.{' '}
            {isRegisterForm
              ? 'start by creating your free account.'
              : 'Login to your account.'}
          </DialogDescription>
        </DialogHeader>
        {isRegisterForm ? <RegisterForm /> : <LoginForm />}
        <DialogFooter className="sm:justify-center ">
          {isRegisterForm ? (
            <p className="text-sm text-center">
              already have an account?{' '}
              <button
                className="font-medium"
                onClick={() => setIsRegisterForm(false)}>
                Login instead
              </button>
            </p>
          ) : (
            <p className="text-sm text-center">
              do not have an account?{' '}
              <button
                className="font-medium"
                onClick={() => setIsRegisterForm(true)}>
                Create a new one
              </button>
            </p>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
