"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const Categories = [
  "Shopping",
  "Salary",
  "Groceries",
  "Rent",
  "Utilities",
  "Dining Out",
  "Transportation",
  "Entertainment",
  "Healthcare",
  "Insurance",
  "Subscriptions",
  "Savings",
  "Investments",
  "Gifts",
  "Loan Repayment",
  "Travel",
  "Education",
  "Taxes",
  "Freelance Income",
  "Business Income",
  "Pet Care",
  "Electricity Bills",
  "Internet Bills",
  "Gym Membership",
  "Event Tickets",
  "Pension",
];

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

export default function CategorySelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (Category: string) => {
    setSelected((prev) =>
      prev.includes(Category)
        ? prev.filter((c) => c !== Category)
        : [...prev, Category]
    );
  };

  return (
    <div className="w-full py-16 md:py-0 md:pt-24 bg-transparent">
      <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
        What are your favorite Categories?
      </h1>
      <div className="max-w-[570px] mx-auto">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 overflow-visible"
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5,
          }}
        >
          {Categories.map((Category) => {
            const isSelected = selected.includes(Category);
            return (
              <motion.button
                key={Category}
                onClick={() => toggleCategory(Category)}
                layout
                initial={false}
                animate={{
                  backgroundColor: isSelected
                    ? "#2a1711"
                    : "rgba(0, 0, 0, 0.05)",
                }}
                whileHover={{
                  backgroundColor: isSelected
                    ? "#2a1711"
                    : "rgba(0, 0, 0, 0.1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                  backgroundColor: { duration: 0.1 },
                }}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset 
                  ${
                    isSelected
                      ? "text-[#ff9066] ring-[hsla(0,0%,100%,0.12)] shadow-xl dark-shadow-zinc-700/80"
                      : "dark:text-zinc-400 hover:dark:text-zinc-300 text-zinc-700 hover:text-zinc-900 dark:ring-[hsla(0,0%,100%,0.06)] ring-orange-500/30 dark:bg-zinc-800/50 bg-gray-100/50 dark:hover:bg-zinc-700/80 hover:bg-gray-200/80 shadow-md hover:shadow-lg dark:shadow-zinc-700/80"
                  }
                `}
                style={{
                  backgroundColor: isSelected ? "#2a1711" : undefined, // Let Tailwind classes handle the background
                }}
              >
                <motion.div
                  className="relative flex items-center"
                  animate={{
                    width: isSelected ? "auto" : "100%",
                    paddingRight: isSelected ? "1.5rem" : "0",
                  }}
                  transition={{
                    ease: [0.175, 0.885, 0.32, 1.275],
                    duration: 0.3,
                  }}
                >
                  <span>{Category}</span>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          mass: 0.5,
                        }}
                        className="absolute right-0"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#ff9066] flex items-center justify-center">
                          <Check
                            className="w-3 h-3 text-[#2a1711]"
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
