import { PiggyBankIcon } from "lucide-react";
import { SvgPiggyBank } from "./Icons";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <SvgPiggyBank />
      <p className="bg-gradient-to-r from-amber-600/90 dark:from-amber-400 to-orange-600/90 dark:to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </Link>
  );
};

export function LogoMobile() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <PiggyBankIcon className="w-7 h-7 stroke stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </Link>
  );
}

export default Logo;
