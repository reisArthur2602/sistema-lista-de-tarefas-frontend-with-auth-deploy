import { ListMinus } from "lucide-react";

import React from "react";

export const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center text-2xl font-bold text-slate-900 transition-all hover:scale-105 hover:text-primary">
      <>TASKLIST</>
      <ListMinus size={28} />
    </div>
  );
};
