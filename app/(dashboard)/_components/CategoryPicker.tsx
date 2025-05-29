"use client";

import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import CreateCategoryDialog from "./CreateCategoryDialog";

interface Props {
  type: TransactionType;
}

const CategoryPicker = ({ type }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const categoriesQuery = useQueries({
    queries: [
      {
        queryKey: ["categories", type],
        queryFn: () =>
          fetch(`/api/categories?type=${type}`).then((res) => res.json()),
      },
    ],
  });

  const categories = categoriesQuery[0]?.data as Category[] | undefined;
  const selectedCategory = categories?.find(
    (category: Category) => category.name === value
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedCategory ? (
            <CatergoryRow category={selectedCategory} />
          ) : (
            "select category"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command onSubmit={(e) => e.preventDefault()}>
          <CommandInput placeholder="Search category..." />
          <CreateCategoryDialog type={type} />
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryPicker;

function CatergoryRow({ category }: { category: Category }) {
  return (
    <div className="flex items-center gap-2">
      <span role="img">{category.icon}</span>
      <span>{category.name}</span>
    </div>
  );
}
