"use client";

import { deleteSessionUser } from "@/app/auth/(login)/login.services";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <>
      <Button
        variant={"link"}
        size={"icon"}
        onClick={() => deleteSessionUser()}
      >
        <>SAIR</>
        <LogOut size={32} />
      </Button>
    </>
  );
};

export default LogoutButton;
