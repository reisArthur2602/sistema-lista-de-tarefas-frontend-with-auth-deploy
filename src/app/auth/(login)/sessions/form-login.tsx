"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useLoginModel } from "../login.model";
import ErrorMessage from "@/components/error-message";

const FormLogin = () => {
  const { loginForm, handleLogin } = useLoginModel();

  return (
    <form
      className="flex w-full max-w-96 flex-col gap-6"
      onSubmit={handleLogin}
    >
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-zinc-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="Digite seu email"
          {...loginForm.register("email")}
          disabled={loginForm.formState.isSubmitting}
        />
        <ErrorMessage message={loginForm.formState.errors.email?.message} />
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="******"
          type="password"
          {...loginForm.register("password")}
          disabled={loginForm.formState.isSubmitting}
        />
        <ErrorMessage message={loginForm.formState.errors.password?.message} />
      </div>

      <Button disabled={loginForm.formState.isSubmitting}>Acessar</Button>
      <Link
        href="/auth/register"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Ainda não possui uma conta? Clique Aqui
      </Link>
    </form>
  );
};

export default FormLogin;
