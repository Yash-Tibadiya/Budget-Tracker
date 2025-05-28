import { PiggyBank, PiggyBankIcon } from "lucide-react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="w-11 h-11 stroke stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
};

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBankIcon className="w-7 h-7 stroke stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
