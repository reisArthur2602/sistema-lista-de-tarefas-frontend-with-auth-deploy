"use client";

import ErrorMessage from "@/components/error-message";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRegisterModel } from "../register.model";

const FormRegister = () => {
  const { handleRegister, registerForm } = useRegisterModel();

  return (
    <form
      className="flex w-full max-w-96 flex-col gap-6"
      onSubmit={handleRegister}
    >
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Cadastro</h1>
        <p className="text-zinc-400">
          Preencha os campos para realizar seu cadastro.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="Digite seu email"
          {...registerForm.register("email")}
          disabled={registerForm.formState.isSubmitting}
        />
        <ErrorMessage message={registerForm.formState.errors.email?.message} />
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="******"
          type="password"
          {...registerForm.register("password")}
          disabled={registerForm.formState.isSubmitting}
        />
        <ErrorMessage
          message={registerForm.formState.errors.password?.message}
        />
      </div>

      <Button disabled={registerForm.formState.isSubmitting}>Acessar</Button>
      <Link
        href="/auth"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Já possui uma conta? Clique Aqui
      </Link>
    </form>
  );
};

export default FormRegister;
