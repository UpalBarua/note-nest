import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import GoogleAuthButton from './google-auth-button';
import { auth } from '@/firebase/firebase.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { z } from 'zod';
import { Loader } from 'lucide-react';

const LoginForm = () => {
  const [authError, setAuthError] = useState('');

  const LoginFormSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormSchemaType) => {
    try {
      setAuthError('');

      await signInWithEmailAndPassword(auth, email, password);

      reset();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setAuthError(error.message);
      }
    }
  };

  return (
    <form className="space-y-3">
      <fieldset className="space-y-2.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          {errors?.email?.message ? (
            <p className="text-sm text-red-500/80">
              {`* ${errors.email.message}`}
            </p>
          ) : null}
        </div>
        <Input id="email" {...register('email')} />
      </fieldset>
      <fieldset className="space-y-2.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          {errors?.password?.message ? (
            <p className="text-sm text-red-500/80">
              {`* ${errors.password.message}`}
            </p>
          ) : null}
        </div>
        <Input id="password" type="password" {...register('password')} />
      </fieldset>
      {authError ? (
        <div className="text-sm text-red-500/80 bg-red-500/20 rounded py-2 px-3 border border-red-500/20">
          {authError}
        </div>
      ) : null}
      <div className="flex flex-col w-full gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader className="animate-spin" /> : 'Login'}
        </Button>
        <GoogleAuthButton />
      </div>
    </form>
  );
};

export default LoginForm;
