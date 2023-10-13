'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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
        {isRegisterForm ? (
          <form className="space-y-3">
            <fieldset className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <p className="text-sm text-red-500/80">
                  * this is a error message
                </p>
              </div>
              <Input id="name" className="col-span-3" />
            </fieldset>
            <fieldset className="space-y-2.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <p className="text-sm text-red-500/80">
                  * this is a error message
                </p>
              </div>
              <Input id="email" className="col-span-3" />
            </fieldset>
            <fieldset className="space-y-2.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <p className="text-sm text-red-500/80">
                  * this is a error message
                </p>
              </div>
              <Input id="password" type="password" className="col-span-3" />
            </fieldset>
            <div className="text-sm text-red-500/80 bg-red-500/20 rounded py-2 px-3 border border-red-500/20">
              this is a error message from firebase bitch! brand new brand new!
            </div>
            <div className="flex flex-col w-full gap-2">
              <Button type="submit">Register</Button>
              <Button type="button">Continue With Google</Button>
            </div>
          </form>
        ) : (
          <form className="space-y-3">
            <fieldset className="space-y-2.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <p className="text-sm text-red-500/80">
                  * this is a error message
                </p>
              </div>
              <Input id="email" className="col-span-3" />
            </fieldset>
            <fieldset className="space-y-2.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <p className="text-sm text-red-500/80">
                  * this is a error message
                </p>
              </div>
              <Input id="password" type="password" className="col-span-3" />
            </fieldset>
            <div className="text-sm text-red-500/80 bg-red-500/20 rounded py-2 px-3 border border-red-500/20">
              this is a error message from firebase bitch! brand new brand new!
            </div>
            <div className="flex flex-col w-full gap-2">
              <Button type="submit">Register</Button>
              <Button type="button">Continue With Google</Button>
            </div>
          </form>
        )}
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
