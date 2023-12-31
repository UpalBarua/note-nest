import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/firebase/firebase.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GoogleAuthButton from './google-auth-button';

const RegisterForm = () => {
  const [authError, setAuthError] = useState('');

  const RegisterFormSchema = z.object({
    name: z.string().min(3, { message: 'Min length 3' }),
    email: z.string(),
    password: z.string(),
  });

  type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async ({
    email,
    password,
    name,
  }: RegisterFormSchemaType) => {
    try {
      setAuthError('');

      await createUserWithEmailAndPassword(auth, email, password);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      reset();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setAuthError(error.message);
      }
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          {errors?.name?.message ? (
            <p className="text-sm text-red-500/80">
              {`* ${errors.name.message}`}
            </p>
          ) : null}
        </div>
        <Input id="name" {...register('name')} />
      </fieldset>
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
          {isSubmitting ? <Loader className="animate-spin" /> : 'Register'}
        </Button>
        <GoogleAuthButton />
      </div>
    </form>
  );
};

export default RegisterForm;
