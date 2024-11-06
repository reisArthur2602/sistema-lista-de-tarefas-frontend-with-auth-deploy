import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex h-full">
      <section className="flex flex-1 items-center justify-center">
        {children}
      </section>
      <div className="relative flex-1">
        <Image
          src={"/banner-hero.jpg"}
          alt="banner sistema lista de tarefas"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
