import Link from "next/link";
import LogoutButton from "./logout-button";


const Header = () => {
  return (
    <header className="bg-foreground">
      <nav className="flex h-16 items-center justify-between px-8 text-white">
        <Link href={"/task"} className="text-xl font-bold text-white">
          PAINEL TASKLIST
        </Link>

        <LogoutButton />
      </nav>
    </header>
  );
};

export default Header;
